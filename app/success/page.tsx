"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Footer } from "@/components/footer"

export default function SuccessPage() {
  const searchParams = useSearchParams()

  const companyName = useMemo(() => {
    return searchParams.get("company") || (typeof window !== "undefined" ? localStorage.getItem("jo-company-name") : null) || "Your Company"
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-4xl mx-auto">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center">
          J
          <div className="relative mx-1 w-4 h-4 sm:w-5 sm:h-5">
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
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="w-full max-w-lg mx-auto text-center">
          <Card className="shadow-xl">
            <CardContent className="p-12">
              <div className="flex flex-col items-center space-y-6">
                {/* Success Icon */}
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>

                {/* Success Message */}
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold text-gray-900">Setup Complete!</h1>
                  <p className="text-lg text-gray-600">Your workspace is ready.</p>
                </div>

                {/* Calendly CTA */}
                <div className="space-y-4 w-full">
                  <Button
                    onClick={() => window.open("https://calendly.com/myj0/30min", "_blank")}
                    className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Meet Jo from {companyName}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-xs text-gray-500">Click on the button above.</p>
                </div>

                {/* Social Media Icons at Bottom */}
                <div className="border-t pt-6 w-full">
                  <div className="flex justify-center gap-4">
                    {/* Updated Instagram link */}
                    <Button
                      variant="ghost"
                      onClick={() => window.open("https://www.instagram.com/jofrom.io/", "_blank")}
                      className="w-12 h-12 rounded-full p-0 hover:bg-pink-50"
                    >
                      <Instagram className="w-6 h-6 text-pink-500" />
                    </Button>

                    <Button
                      variant="ghost"
                      onClick={() => window.open("https://x.com/J0from", "_blank")}
                      className="w-12 h-12 rounded-full p-0 hover:bg-blue-50"
                    >
                      <Twitter className="w-6 h-6 text-blue-400" />
                    </Button>

                    {/* Updated LinkedIn link */}
                    <Button
                      variant="ghost"
                      onClick={() => window.open("https://www.linkedin.com/company/jofrom", "_blank")}
                      className="w-12 h-12 rounded-full p-0 hover:bg-blue-50"
                    >
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Message */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Welcome to the future of work. We're excited to have you on board! 🚀
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
