"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Link from "next/link"
import LandingSection from "./LandingSection"
import LandingLayout from "./LandingLayout"
import { sections } from "@/lib/landing-sections"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <LandingLayout>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 sm:py-6 px-6 md:px-12 lg:px-24 bg-transparent">
        <div className="flex items-center">
          <Link href="/" className="text-xl sm:text-2xl md:text-3xl">
            <Logo width={24} height={24} />
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="https://app.jofrom.io/auth">
            <Button
              variant="ghost"
              className="text-slate-900 hover:text-slate-700 text-sm sm:text-base px-3 sm:px-4 bg-white/80 backdrop-blur-sm"
            >
              Login
            </Button>
          </Link>
          <Link href="/solutions/smb/purchase?billing=annual">
            <Button variant="gradient" className="text-sm sm:text-base px-3 sm:px-6">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>

      {/* Side Navigation Dots */}
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {sections.map((section, index) => (
          <button
            type="button"
            key={section.id}
            className={`w-3 h-3 rounded-full my-2 transition-all ${
              index === activeSection ? "bg-blue-600 scale-150" : "bg-gray-400"
            }`}
            onClick={() => handleNavClick(index)}
            aria-label={`Go to ${section.title} section`}
          />
        ))}
      </nav>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left z-40"
        style={{ scaleX }}
      />

      {/* Scrollable Sections */}
      <div ref={containerRef} className="h-full overflow-y-auto snap-y snap-mandatory">
        {sections.map((section, index) => (
          <LandingSection key={section.id} {...section} isActive={index === activeSection} />
        ))}

        {/* Footer as last section */}
        <div className="snap-start">
          <Footer />
        </div>
      </div>
    </LandingLayout>
  )
}
