"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Footer } from "@/components/footer"
import { Logo } from "@/components/logo"
import { useOnboarding } from "@/lib/onboarding-context"

function SignUpContent() {
  const { state, update } = useOnboarding()
  const searchParams = useSearchParams()
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Pick up tier/billing from URL params (passed from checkout)
  useEffect(() => {
    const tier = searchParams.get("tier")
    const billing = searchParams.get("billing")
    if (tier) update({ tier })
    if (billing) update({ billing })
  }, [searchParams, update])

  // Pre-fill from onboarding context if returning to this step
  useEffect(() => {
    if (state.firstName || state.email) {
      setFormData((prev) => ({
        ...prev,
        firstName: state.firstName || prev.firstName,
        lastName: state.lastName || prev.lastName,
        email: state.email || prev.email,
        company: state.company || prev.company,
      }))
    }
  }, [state.firstName, state.lastName, state.email, state.company])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.length >= 8 &&
      formData.password === formData.confirmPassword
    )
  }

  const getPasswordStrength = () => {
    const password = formData.password
    if (password.length === 0) return { strength: 0, label: "" }
    if (password.length < 8) return { strength: 1, label: "Weak" }
    if (password.length < 12) return { strength: 2, label: "Medium" }
    return { strength: 3, label: "Strong" }
  }

  const passwordStrength = getPasswordStrength()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid()) return

    setIsLoading(true)
    setError("")

    try {
      // Register user via dashboard API
      const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.jofrom.io"
      const res = await fetch(`${dashboardUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          tier: state.tier,
          billing: state.billing,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Registration failed")
      }

      // Save to onboarding context
      update({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
      })

      router.push("/business-type")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl sm:text-2xl">
          <Logo width={20} height={20} />
        </Link>
        <Button variant="ghost" className="gap-2" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </Link>
        </Button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 py-8">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Create Your Account</h1>
            <p className="text-slate-600">Join Jo and transform your business operations</p>
            {state.tier && (
              <p className="text-sm text-blue-600 mt-2">
                {state.tier.charAt(0).toUpperCase() + state.tier.slice(1)} Plan ({state.billing})
              </p>
            )}
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-6 sm:p-8">
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">{error}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@company.com"
                    className="w-full"
                    required
                  />
                </div>

                {/* Company (Optional) */}
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name (Optional)</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="At least 8 characters"
                      className="w-full pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {/* Password Strength Indicator */}
                  {formData.password.length > 0 && (
                    <div className="space-y-1">
                      <div className="flex gap-1">
                        <div
                          className={`h-1 flex-1 rounded ${passwordStrength.strength >= 1 ? "bg-red-500" : "bg-slate-200"
                            }`}
                        ></div>
                        <div
                          className={`h-1 flex-1 rounded ${passwordStrength.strength >= 2 ? "bg-yellow-500" : "bg-slate-200"
                            }`}
                        ></div>
                        <div
                          className={`h-1 flex-1 rounded ${passwordStrength.strength >= 3 ? "bg-green-500" : "bg-slate-200"
                            }`}
                        ></div>
                      </div>
                      <p className="text-xs text-slate-500">{passwordStrength.label}</p>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      placeholder="Re-enter your password"
                      className="w-full pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {formData.confirmPassword.length > 0 && formData.password !== formData.confirmPassword && (
                    <p className="text-xs text-red-500">Passwords do not match</p>
                  )}
                </div>

                {/* Terms & Privacy */}
                <p className="text-xs text-slate-500">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                </p>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!isFormValid() || isLoading}
                  variant={isFormValid() && !isLoading ? "gradient" : "default"}
                  className={`w-full h-12 transition-all duration-200 ${!(isFormValid() && !isLoading)
                      ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                      : ""
                    }`}
                >
                  {isLoading ? (
                    "Creating Account..."
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              {/* Login Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-600">
                  Already have an account?{" "}
                  <Link href="https://app.jofrom.io/auth/signin" className="text-blue-600 hover:underline font-semibold">
                    Log in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" />}>
      <SignUpContent />
    </Suspense>
  )
}
