"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import BackWarningModal from "@/components/back-warning-modal"
import { Footer } from "@/components/footer"

export default function ContactInfoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    company: "",
    industry: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showBackWarning, setShowBackWarning] = useState(false)
  const router = useRouter()

  const roles = [
    "CEO/Founder",
    "CTO/VP Engineering",
    "CFO/VP Finance",
    "COO/VP Operations",
    "VP Sales",
    "VP Marketing",
    "VP HR",
    "Director",
    "Manager",
    "Individual Contributor",
    "Consultant",
    "Other",
  ]

  const industries = [
    "Technology/Software",
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "Retail/E-commerce",
    "Professional Services",
    "Real Estate",
    "Education",
    "Media/Entertainment",
    "Food & Beverage",
    "Transportation/Logistics",
    "Energy/Utilities",
    "Construction",
    "Non-profit",
    "Government",
    "Agriculture",
    "Automotive",
    "Telecommunications",
    "Hospitality/Travel",
    "Pharmaceuticals",
    "Insurance",
    "Legal Services",
    "Marketing/Advertising",
    "Consulting",
    "Other",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.role !== "" &&
      formData.company.trim() !== "" &&
      formData.industry !== ""
    )
  }

  const handleBackClick = () => {
    setShowBackWarning(true)
  }

  const handleBackConfirm = () => {
    setShowBackWarning(false)
    router.push("/")
  }

  const handlePreviousStep = () => {
    router.push("/integrations")
  }

  const handleSubmit = async () => {
    if (isFormValid()) {
      setIsLoading(true)
      console.log("Form submitted:", formData)

      // Store company name for the success page
      localStorage.setItem("jo-company-name", formData.company)

      // Simulate API call - 45 seconds
      await new Promise((resolve) => setTimeout(resolve, 45000))

      // Navigate to success page with company name as URL parameter and immediately open Calendly
      const successUrl = `/success?company=${encodeURIComponent(formData.company)}`

      // Open Calendly link immediately
      window.open("https://calendly.com/myj0/30min", "_blank")

      // Navigate to success page
      setIsLoading(false)
      router.push(successUrl)
    }
  }

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
        <Button variant="ghost" className="gap-2" disabled={isLoading} onClick={handleBackClick}>
          <ArrowLeft className="w-4 h-4" />
          Exit
        </Button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="w-full max-w-md mx-auto">
          {!isLoading ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Almost Done!</h1>
                <p className="text-gray-600">Tell us a bit about yourself to complete your Jo setup</p>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
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
                      />
                    </div>

                    {/* Role */}
                    <div className="space-y-2">
                      <Label htmlFor="role">Role *</Label>
                      <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Company Name */}
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Acme Corp"
                        className="w-full"
                      />
                    </div>

                    {/* Industry */}
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!isFormValid()}
                      className={`w-full h-12 transition-all duration-200 ${
                        isFormValid()
                          ? "bg-slate-900 hover:bg-slate-800 text-white"
                          : "bg-slate-300 text-slate-500 cursor-not-allowed"
                      }`}
                    >
                      Complete Setup
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </>
          ) : (
            /* Loading State */
            <div className="text-center">
              <Card className="shadow-lg">
                <CardContent className="p-12">
                  <div className="flex flex-col items-center space-y-6">
                    {/* Animated Jo Logo */}
                    <div className="relative">
                      <div className="text-6xl font-bold text-slate-900 flex items-center animate-pulse">
                        J
                        <div className="relative mx-2">
                          <Image
                            src="/qubit.png"
                            alt="Qubit"
                            width={48}
                            height={48}
                            className="brightness-0 animate-spin"
                            style={{ animationDuration: "3s" }}
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-normal opacity-100 animate-spin"
                            style={{
                              maskImage: `url('/qubit.png')`,
                              maskSize: "contain",
                              maskRepeat: "no-repeat",
                              maskPosition: "center",
                              WebkitMaskImage: `url('/qubit.png')`,
                              WebkitMaskSize: "contain",
                              WebkitMaskRepeat: "no-repeat",
                              WebkitMaskPosition: "center",
                              animationDuration: "3s",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Loading Text */}
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-gray-900">We're Setting Up Your Jo</h2>
                      <p className="text-gray-600">This will just take a moment...</p>
                    </div>

                    {/* Progress Animation */}
                    <div className="w-full max-w-xs">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-45000 ease-out"
                          style={{ width: "100%", animation: "progressBar 45s ease-out forwards" }}
                        ></div>
                      </div>
                    </div>

                    {/* Setup Steps */}
                    <div className="text-left space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Configuring your agents...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Setting up integrations...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Finalizing your workspace...</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Back to Previous Step Option */}
          {!isLoading && (
            <div className="mt-8 text-center">
              <Button
                variant="ghost"
                onClick={handlePreviousStep}
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              >
                <ArrowLeft className="w-3 h-3 mr-1" />
                Back to Integrations
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Back Warning Modal */}
      <BackWarningModal
        isOpen={showBackWarning}
        onClose={() => setShowBackWarning(false)}
        onConfirm={handleBackConfirm}
        currentStep={5}
      />

      {/* Custom CSS for progress bar animation */}
      <style jsx>{`
        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
