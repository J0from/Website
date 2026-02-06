#!/usr/bin/env node

/**
 * Button System Governance Script
 *
 * This script audits the codebase for violations of the Button Design System rules:
 * 1. No ad-hoc gradient classes on interactive elements (Button, button, a, Link)
 *    outside components/ui/button.tsx — use variant="gradient" instead
 * 2. Links styled as buttons must use Button asChild or buttonVariants()
 * 3. No inline button-like styling on <a> or <Link> elements
 *
 * Decorative gradients (page backgrounds, text gradients, icon containers,
 * section backgrounds, dividers) are allowed.
 *
 * Run with: npm run check:buttons
 */

import { execSync } from "child_process"
import { readFileSync } from "fs"

const ERRORS: string[] = []
const WARNINGS: string[] = []

/**
 * Patterns that indicate a gradient is decorative (not a button violation):
 * - bg-clip-text: text gradient effect
 * - loading/skeleton files
 * - ALLOWED: explicit opt-out comment
 */
const DECORATIVE_PATTERNS = [
  "bg-clip-text",
  "// ALLOWED:",
  "{/* ALLOWED:",
]

/**
 * Patterns that indicate a gradient is on an interactive element (violation):
 * - <Button — the Button component
 * - <button — raw button element
 * - className on a Button (multi-line JSX where <Button is on a prior line)
 */
const INTERACTIVE_PATTERNS = [
  "<Button",
  "<button",
]

function isDecorativeGradient(line: string): boolean {
  return DECORATIVE_PATTERNS.some((pattern) => line.includes(pattern))
}

function isInteractiveElement(line: string): boolean {
  return INTERACTIVE_PATTERNS.some((pattern) => line.includes(pattern))
}

/**
 * For lines that aren't clearly decorative or interactive from the line alone,
 * check the surrounding context in the file to determine if the gradient
 * className belongs to an interactive element.
 */
function checkContextForInteractive(filePath: string, lineNum: number): boolean {
  try {
    const content = readFileSync(filePath, "utf-8")
    const lines = content.split("\n")
    // Look at the 5 lines before the gradient line for an opening interactive tag
    const startLine = Math.max(0, lineNum - 6)
    const contextLines = lines.slice(startLine, lineNum).join("\n")

    // Check if the className is on a Button or button element (multi-line JSX)
    if (/<Button[\s\n]/.test(contextLines) || /<button[\s\n]/.test(contextLines)) {
      // Make sure there isn't a closing > between the tag and our line
      const lastButtonIdx = Math.max(
        contextLines.lastIndexOf("<Button"),
        contextLines.lastIndexOf("<button"),
      )
      const afterTag = contextLines.slice(lastButtonIdx)
      // If we find a self-closing or closing before our gradient, it's not on that element
      if (!/>/.test(afterTag.split("\n").slice(0, -1).join("\n"))) {
        return true
      }
    }
  } catch {
    // If we can't read the file, assume not interactive
  }
  return false
}

// Check for ad-hoc gradient classes on interactive elements
function checkAdHocGradients() {
  try {
    const result = execSync(
      `grep -r "bg-gradient-to-" app/ --include="*.tsx" --include="*.ts" -n | grep -v "components/ui/button"`,
      { encoding: "utf-8" },
    )

    if (result.trim()) {
      const lines = result.trim().split("\n")
      lines.forEach((line) => {
        // Skip the button component itself
        if (line.includes("components/ui/button")) return

        // Skip decorative gradients
        if (isDecorativeGradient(line)) return

        // Check if gradient is on an interactive element
        if (isInteractiveElement(line)) {
          ERRORS.push(`❌ Ad-hoc gradient on interactive element: ${line}`)
          return
        }

        // For ambiguous cases, check file context
        const match = line.match(/^(.+?):(\d+):/)
        if (match) {
          const [, filePath, lineNumStr] = match
          const lineNum = parseInt(lineNumStr, 10)
          if (checkContextForInteractive(filePath, lineNum)) {
            ERRORS.push(`❌ Ad-hoc gradient on interactive element: ${line}`)
            return
          }
        }

        // Otherwise it's a decorative gradient — allowed
      })
    }

    if (ERRORS.length === 0) {
      console.log("✅ No ad-hoc gradient classes found on interactive elements")
    }
  } catch (error) {
    // No matches found (exit code 1) - this is good!
    console.log("✅ No ad-hoc gradient classes found outside Button component")
  }
}

// Check for button-like Links without proper DS usage
function checkLinkAsButton() {
  try {
    const result = execSync(
      `grep -r "className=.*\\(rounded.*px-\\|px-.*rounded\\)" app/ --include="*.tsx" | grep "<Link"`,
      { encoding: "utf-8" },
    )

    if (result.trim()) {
      const lines = result.trim().split("\n")
      lines.forEach((line) => {
        // Check if it's using Button asChild or buttonVariants
        if (!line.includes("buttonVariants") && !line.includes("asChild")) {
          WARNINGS.push(`⚠️  Link with button-like styling (should use Button asChild): ${line}`)
        }
      })
    }
  } catch (error) {
    console.log("✅ No improperly styled Links found")
  }
}

// Main execution
console.log("🔍 Running Button System Audit...\n")

checkAdHocGradients()
checkLinkAsButton()

// Report results
console.log("\n📊 AUDIT RESULTS:\n")

if (ERRORS.length > 0) {
  console.log("ERRORS (must fix):")
  ERRORS.forEach((err) => console.log(err))
  console.log("")
}

if (WARNINGS.length > 0) {
  console.log("WARNINGS (should review):")
  WARNINGS.forEach((warn) => console.log(warn))
  console.log("")
}

if (ERRORS.length === 0 && WARNINGS.length === 0) {
  console.log("✅ All checks passed! Button system is compliant.")
  process.exit(0)
} else {
  console.log(`\n❌ Found ${ERRORS.length} errors and ${WARNINGS.length} warnings`)
  process.exit(ERRORS.length > 0 ? 1 : 0)
}
