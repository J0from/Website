"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Check, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { sendStrategyDocumentLeadEmail } from "@/app/actions/email"

export default function StrategyDocumentPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.company.trim() !== "" &&
    formData.jobTitle.trim() !== ""

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return

    setIsSubmitting(true)
    setError("")

    try {
      const result = await sendStrategyDocumentLeadEmail(formData)
      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDownload = () => {
    window.open("/documents/jo-gtm-strategy-document.pdf", "_blank")
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Dashboard Preview Image */}
      <div className="lg:w-1/2 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Logo */}
        <div className="absolute top-6 left-6 z-10">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white flex items-center">
            J
            <div className="relative mx-1 w-4 h-4 sm:w-5 sm:h-5">
              <Image src="/qubit.png" alt="Qubit" fill sizes="20px" className="brightness-0 invert object-contain" />
            </div>
          </Link>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-12">
          <div className="max-w-lg">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-6">
              Strategy Resource
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Strategy Session
              </span>
            </h1>
            <p className="text-slate-300 text-lg mb-8">
              A comprehensive framework to align your go-to-market strategy with Human + Machine collaboration.
            </p>

            {/* Dashboard Preview */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 scale-110 origin-top-left">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 pointer-events-none" />
              <Image
                src="/images/jo-dashboard-preview.png"
                alt="Jo Platform Dashboard"
                width={1200}
                height={750}
                className="w-full h-auto"
              />
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">94%</div>
                <div className="text-sm text-slate-400">Avg Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">6,115</div>
                <div className="text-sm text-slate-400">Tasks Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">Optimal</div>
                <div className="text-sm text-slate-400">System Health</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-1/2 bg-white flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Back Link */}
          <Link 
            href="https://get.jofrom.io/solutions/smb/purchase" 
            className="inline-flex items-center text-slate-600 hover:text-slate-900 text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Get Jo
          </Link>

          <Card className="shadow-xl border-0">
            <CardHeader className="pb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {isSubmitted ? "Your Document is Ready!" : "Get Your Copy"}
              </h2>
              <p className="text-slate-600 mt-2">
                {isSubmitted
                  ? "Click below to download your GTM Strategy Document."
                  : "Enter your details to unlock the download."}
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You, {formData.firstName}!</h3>
                    <p className="text-green-700 text-sm">Your download is ready.</p>
                  </div>

                  <Button
                    onClick={handleDownload}
                    variant="gradient"
                    className="w-full font-semibold py-6 text-lg rounded-xl"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Strategy Document
                  </Button>

                  <div className="text-center pt-4 border-t border-slate-100">
                    <p className="text-sm text-slate-500 mb-3">Ready to implement your strategy?</p>
                    <a
                      href="https://calendly.com/myj0/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Book a Strategy Call
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-700">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-700">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">Work Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-slate-700">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="jobTitle" className="text-slate-700">Job Title *</Label>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      type="text"
                      placeholder="VP of Operations"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="rounded-lg"
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    variant="gradient"
                    className="w-full font-semibold py-6 text-lg rounded-xl disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5 mr-2" />
                        Get Download
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-slate-500 mt-4">
                    By downloading, you agree to receive communications from Jo. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="mt-8 flex items-center justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Spam</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
