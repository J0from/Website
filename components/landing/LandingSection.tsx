"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Lightbulb, Rocket } from "lucide-react"
import { ROLES } from "@/lib/constants"
import type { SectionData } from "@/lib/landing-sections"

interface SectionProps extends SectionData {
  isActive: boolean
}

export default function LandingSection({
  id,
  title,
  subtitle,
  description,
  gradient,
  textColor,
  type,
  isActive,
}: SectionProps) {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const roles = ROLES

  useEffect(() => {
    if (type !== "hero") return
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsVisible(true)
      }, 300)
    }, 2000)
    return () => clearInterval(interval)
  }, [roles.length, type])

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
      "Support", "Finance", "HR", "Accounting", "Marketing", "Operations",
      "Sales", "Safety", "QA", "Compliance", "Clinical", "Nursing",
      "Engineering", "Maintenance", "Production", "Processing", "Sanitation", "Legal", "IT",
    ]
    if (extraDashRoles.includes(department)) {
      return "_".repeat(baseLength + 1)
    }
    return "_".repeat(baseLength)
  }

  const renderContent = () => {
    switch (type) {
      case "hero":
        return (
          <div className="flex flex-col h-full">
            {/* Video Section */}
            <div className="relative flex-1 max-h-[60vh] overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover opacity-60"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="/images/herro-20video.mov"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-purple-300/10 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href="https://demo.jofrom.io/">
                  <Button className="h-10 md:h-12 px-6 md:px-8 text-base md:text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-2xl">
                    Try Jo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Title Section */}
            <div className="flex-1 flex items-center justify-center px-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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
                    />
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
        )

      case "statement":
        if (id === "balance") {
          return (
            <div className="flex items-center justify-center h-full px-6 md:px-12 lg:px-24">
              <div className="max-w-6xl">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  We help businesses strike the <br className="hidden sm:block" />
                  right balance between{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent whitespace-nowrap">
                    Human + Machine
                  </span>
                  .
                </p>
              </div>
            </div>
          )
        }
        if (id === "bottlenecks") {
          return (
            <div className="flex items-center justify-center h-full px-6 md:px-12 lg:px-24">
              <div className="max-w-7xl text-right">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight space-y-1 text-balance">
                  <div>
                    Jo fixes{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                      labor bottlenecks
                    </span>{" "}
                    in{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                      highly regulated industries
                    </span>
                    ,
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
            </div>
          )
        }
        return null

      case "feature":
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 md:px-12 lg:px-24 py-12">
            <div className="max-w-6xl w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
                {description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {/* Discovery */}
                <Card className="border-2 hover:border-blue-200 transition-all bg-white h-64 sm:h-72">
                  <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                      <Search className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Discovery</h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600">Discover the problem</p>
                  </CardContent>
                </Card>

                {/* Design */}
                <Card className="border-2 hover:border-blue-200 transition-all bg-white h-64 sm:h-72">
                  <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                      <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Design</h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600">Design the fix</p>
                  </CardContent>
                </Card>

                {/* Deploy */}
                <Card className="border-2 hover:border-blue-200 transition-all bg-white h-64 sm:h-72 sm:col-span-2 md:col-span-1">
                  <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                      <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Deploy</h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600">Deploy the solution</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      case "cta":
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 md:px-12 lg:px-24 gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Meet Jo?
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="/enterprise">
                <Button
                  variant="outline"
                  className="h-14 md:h-16 bg-slate-900 text-white border-0 hover:bg-white hover:text-slate-900 transition-colors px-10 md:px-14 text-lg md:text-xl font-semibold"
                >
                  Enterprise
                </Button>
              </Link>
              <Link href="/solutions/smb">
                <Button variant="gradient" className="h-14 md:h-16 px-10 md:px-14 text-lg md:text-xl font-semibold">
                  Meet Jo
                </Button>
              </Link>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <motion.section
      className={`h-screen w-full snap-start bg-gradient-to-br ${gradient}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
    >
      {renderContent()}
    </motion.section>
  )
}
