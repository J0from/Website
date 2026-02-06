"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Search, Lightbulb, Rocket } from "lucide-react"
import { Footer } from "@/components/footer"
import { ROLES } from "@/lib/constants"
import { Logo } from "@/components/logo"

export function HomePageClient() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleLoadedMetadata = () => {
        video.currentTime = video.duration / 2
      }
      video.addEventListener("loadedmetadata", handleLoadedMetadata)
      return () => video.removeEventListener("loadedmetadata", handleLoadedMetadata)
    }
  }, [])

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex justify-between items-center py-4 sm:py-6 px-6 md:px-12 lg:px-24 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
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

      {/* Hero Video Section with Overlaid Button */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center pt-8 sm:pt-0 pb-8">
        <div className="relative w-full max-h-[600px] overflow-hidden border-y-4 border-slate-300 shadow-lg">
          <video ref={videoRef} className="w-full h-full object-cover opacity-60" autoPlay loop muted playsInline>
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Herro%20Video-4KoLgBEgSZSrzfzocWhpAxa4boP0as.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-purple-300/10 pointer-events-none"></div>
          {/* Overlaid Try Jo Button - Made Smaller */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href="https://demo.jofrom.io/">
              <Button className="h-10 md:h-12 px-6 md:px-8 text-base md:text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-2xl">
                Try Jo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[30vh] sm:min-h-[35vh] w-full">
        <div className="text-center w-full">
          {/* Main Heading */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-4 sm:mb-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 leading-tight">
              <span className="flex items-center">
                <span>J</span>
                <div className="relative mx-1 sm:mx-2 inline-block" style={{ width: "0.6em", height: "0.6em" }}>
                  <Image src="/qubit.png" alt="Qubit" fill sizes="20px" className="brightness-0 object-contain" />
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
        </div>
      </div>

      {/* Man + Machine Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
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
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
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
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-slate-50 to-slate-100 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Framework
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 text-balance px-4">
            Discover the opportunity. Design the solution. Deploy the fix.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Discovery Phase */}
            <div className="flip-card h-64 sm:h-72 md:h-80">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="border-2 hover:border-blue-200 transition-all bg-white h-full">
                    <CardContent className="p-6 sm:p-7 md:p-8 text-center h-full flex flex-col justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                        <Search className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Discovery</h3>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600">Discover the opportunity</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="border-2 border-blue-400 bg-white h-full">
                    <CardContent className="p-6 sm:p-7 md:p-8 h-full flex flex-col justify-center">
                      <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3">Discover</h3>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        We map how work moves through your operation. We find where tasks pile up, where compliance risks
                        hide, and where your team spends time on work that doesn't match their skills.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Design Phase */}
            <div className="flip-card h-64 sm:h-72 md:h-80">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="border-2 hover:border-blue-200 transition-all bg-white h-full">
                    <CardContent className="p-6 sm:p-7 md:p-8 text-center h-full flex flex-col justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                        <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Design</h3>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600">Design the solution</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="border-2 border-purple-400 bg-white h-full">
                    <CardContent className="p-6 sm:p-7 md:p-8 h-full flex flex-col justify-center">
                      <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-3">Design</h3>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        We build your staffing plan. Every task is evaluated: Does it require a person's judgment? Can a
                        machine handle it? We design the right balance—people lead, machines support.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Deploy Phase */}
            <div className="flip-card h-64 sm:h-72 md:h-80 sm:col-span-2 md:col-span-1">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Card className="border-2 hover:border-blue-200 transition-all bg-white h-full">
                    <CardContent className="p-6 sm:p-7 md:p-8 text-center h-full flex flex-col justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                        <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Deploy</h3>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600">Deploy the fix</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flip-card-back">
                  <Card className="border-2 border-blue-400 bg-white h-full">
                    <CardContent className="p-6 sm:p-7 md:p-8 h-full flex flex-col justify-center">
                      <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3">Deploy</h3>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        We place people and machines into your operation. We monitor performance, ensure compliance, and
                        track results. Quality up. Cost down.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Bottlenecks (BG Black, Left Aligned) */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
        <div className="text-right px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight space-y-1 text-balance">
            <div>
              We staff{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                Human + Machines
              </span>{" "}
              to fix{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                labor bottlenecks
              </span>
            </div>
            <div>
              in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                Healthcare
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                Energy
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                Manufacturing
              </span>
              —
            </div>
            <div>
              the blue-collar jobs that are the{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                foundation of our society
              </span>
              .
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-20 md:py-24 bg-white px-6 md:px-12 lg:px-24`}>
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
