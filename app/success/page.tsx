"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Calendar, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Footer } from "@/components/footer"
import { Logo } from "@/components/logo"

function SuccessContent() {
  const searchParams = useSearchParams()

  const companyName = useMemo(() => {
    return (
      searchParams.get("company") ||
      (typeof window !== "undefined" ? localStorage.getItem("jo-company-name") : null) ||
      "Your Company"
    )
  }, [searchParams])

  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.jofrom.io"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-4xl mx-auto">
        <Link href="/" className="text-xl sm:text-2xl">
          <Logo width={20} height={20} />
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
                  <p className="text-lg text-gray-600">
                    Your workspace for <span className="font-semibold">{companyName}</span> is ready.
                  </p>
                  <p className="text-sm text-gray-500">
                    Jo from Sales is configured and waiting to help you close deals.
                  </p>
                </div>

                {/* Primary CTA: Go to Dashboard */}
                <div className="space-y-3 w-full">
                  <Button
                    asChild
                    className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white"
                  >
                    <a href={`${dashboardUrl}/auth/signin`}>
                      Go to Dashboard
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>

                  {/* Secondary CTA: Meet Jo / Calendly */}
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://calendly.com/myj0/30min", "_blank")}
                    className="w-full h-10"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a walkthrough with our team
                  </Button>
                </div>

                {/* Social */}
                <div className="border-t pt-6 w-full">
                  <div className="flex justify-center gap-4">
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

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" />}>
      <SuccessContent />
    </Suspense>
  )
}
