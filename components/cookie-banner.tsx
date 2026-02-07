"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg border border-slate-200 rounded-lg shadow-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">Cookie Preferences</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                <br />
                By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                <Link href="/cookies" className="text-blue-600 hover:text-blue-700 underline">
                  Cookie Policy
                </Link>{" "}
                to learn more.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={declineCookies}
                className="flex-1 sm:flex-none text-sm border-slate-300 hover:bg-slate-100 bg-transparent"
              >
                Decline
              </Button>
              <Button
                onClick={acceptCookies}
                className="flex-1 sm:flex-none text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
              >
                Accept All
              </Button>
            </div>
          </div>
          <button
            onClick={declineCookies}
            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
