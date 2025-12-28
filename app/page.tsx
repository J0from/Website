"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Search, Lightbulb, Rocket } from "lucide-react"
import { Footer } from "@/components/footer"
import { ROLES } from "@/lib/constants"
import { Logo } from "@/components/logo"

export default function HomePage() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const roles = ROLES

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsVisible(true)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [roles.length])

  const getDepartmentSizeClasses = () => {
    return "text-6xl md:text-8xl"
  }

  const getUnderlineLength = (department: string) => {
    const baseLength = department.length

    const extraDashRoles = [
      "Support",
      "Finance",
      "HR",
      "Accounting",
      "Marketing",
      "Operations",
      "Sales",
      "Safety",
      "QA",
      "Compliance",
      "Clinical",
      "Nursing",
      "Engineering",
      "Maintenance",
      "Production",
      "Processing",
      "Sanitation",
      "Legal",
      "IT",
    ]

    if (extraDashRoles.includes(department)) {
      return "_".repeat(baseLength + 1)
    }
    return "_".repeat(baseLength)
  }

  const marginClass = "px-6 md:px-12 lg:px-24"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className={`flex justify-between items-center py-4 sm:py-6 max-w-[1600px] mx-auto ${marginClass}`}>
        <div className="flex items-center">
          <Link href="/" className="text-xl sm:text-2xl md:text-3xl">
            <Logo width={24} height={24} />
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="https://app.jofrom.io/auth">
            <Button variant="ghost" className="text-slate-900 hover:text-slate-700 text-sm sm:text-base px-3 sm:px-4">
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

      {/* Main Content */}
      <div className={`flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] ${marginClass}`}>
        <div className="text-center max-w-6xl mx-auto w-full">
          {/* Main Heading */}
          <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-4 sm:mb-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 leading-tight">
              <span className="flex items-center">
                <span>J</span>
                <div className="relative mx-1 sm:mx-2 inline-block" style={{ width: "0.6em", height: "0.6em" }}>
                  <Image src="/qubit.png" alt="Qubit" fill className="brightness-0 object-contain" />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-normal opacity-100"
                    style={{
                      maskImage: `url('/qubit.png')`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskImage: `url('/qubit.png')`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                    }}
                  ></div>
                </div>
                <span>from</span>
              </span>
              <span className="relative hidden lg:inline-block">
                <span
                  className="absolute left-0 bottom-0 sm:bottom-1 font-normal tracking-wider opacity-60"
                  style={{ color: "#94A3B8" }}
                >
                  {getUnderlineLength(roles[currentRole])}
                </span>
                <span
                  className={`transition-all duration-300 ease-in-out transform relative ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {roles[currentRole]}
                  </span>
                </span>
              </span>
              <span className="hidden lg:inline-block">.</span>
            </h1>
          </div>

          {/* CTA Button */}
          <Link href="https://demo.jofrom.io/" target="_blank" rel="noopener noreferrer">
            <Button className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg bg-slate-900 hover:bg-slate-800 text-white">
              Try Jo
            </Button>
          </Link>
        </div>
      </div>

      {/* Man + Machine Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16 md:py-24">
        <div className={`w-full max-w-6xl mx-auto ${marginClass}`}>
          <div className="text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              We help businesses strike the <br />
              right balance between{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent whitespace-nowrap">
                Human + Machine
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-4 bg-white text-right">
        <div className={`max-w-[1600px] mx-auto ${marginClass}`}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch justify-center">
            <Link href="/enterprise" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto h-12 sm:h-14 md:h-16 bg-slate-900 text-white border-0 hover:bg-white hover:text-slate-900 transition-colors px-8 sm:px-10 md:px-14 text-base sm:text-lg md:text-xl font-semibold"
              >
                Enterprise
              </Button>
            </Link>
            <Link href="/solutions/smb" className="w-full sm:w-auto">
              <Button
                variant="gradient"
                className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-8 sm:px-10 md:px-14 text-base sm:text-lg md:text-xl font-semibold"
              >
                Meet Jo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* White Divider Section */}
      <section className="bg-white py-6 sm:py-8 md:py-12"></section>

      {/* Discover, Design, Deploy Framework Section */}
      <section className={`py-12 sm:py-14 md:py-16 bg-gradient-to-br from-slate-50 to-slate-100 ${marginClass}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Framework
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 text-balance px-4">
            Fast Insight, Practical Plans, Real Operational Change.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Discovery Phase */}
            <Card className="border-2 hover:border-blue-200 transition-all bg-white">
              <CardContent className="p-6 sm:p-7 md:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Search className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Discovery</h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600">Discover the problem</p>
              </CardContent>
            </Card>

            {/* Design Phase */}
            <Card className="border-2 hover:border-blue-200 transition-all bg-white">
              <CardContent className="p-6 sm:p-7 md:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Design</h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600">Design the fix</p>
              </CardContent>
            </Card>

            {/* Deploy Phase */}
            <Card className="border-2 hover:border-blue-200 transition-all bg-white sm:col-span-2 md:col-span-1">
              <CardContent className="p-6 sm:p-7 md:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Deploy</h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600">Deploy the solution</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Bottlenecks (BG Black, Left Aligned) */}
      <section className={`py-12 sm:py-16 md:py-20 lg:py-24 bg-black pl-[-6rem] pr-102`}>
        <div className="text-right">
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white leading-tight space-y-1">
            <div>
              Jo fixes{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                labor bottlenecks
              </span>{" "}
              in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                highly regulated operations
              </span>
              —
            </div>
            <div>
              so you{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                stay compliant
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                cut costs
              </span>
              , and finally have
            </div>
            <div>
              enough hands to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                get the work done
              </span>
              .
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-20 md:py-24 bg-white ${marginClass}`}>
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/solutions/smb/purchase">
            <Button
              variant="gradient"
              size="hero"
              className="px-12 sm:px-16 md:px-20 text-lg sm:text-xl md:text-2xl font-semibold"
            >
              Get Jo
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
