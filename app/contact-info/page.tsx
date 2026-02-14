"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import BackWarningModal from "@/components/back-warning-modal"
import { Footer } from "@/components/footer"
import { Logo } from "@/components/logo"
import { useOnboarding } from "@/lib/onboarding-context"

export default function ContactInfoPage() {
  const { state, update } = useOnboarding()
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: state.firstName || "",
    lastName: state.lastName || "",
    email: state.email || "",
    role: state.role || "",
    company: state.company || "",
    industry: state.industry || "",
  })

  const [isProvisioning, setIsProvisioning] = useState(false)
  const [provisionError, setProvisionError] = useState("")
  const [showBackWarning, setShowBackWarning] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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

  const isFormValid = () => {
    return formData.firstName.trim() && formData.lastName.trim() && formData.email.trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid()) return

    setIsProvisioning(true)
    setProvisionError("")

    // Save final contact info to context
    update({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      role: formData.role,
      company: formData.company,
      industry: formData.industry,
    })

    try {
      // Call the dashboard provisioning API
      const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.jofrom.io"
      const res = await fetch(`${dashboardUrl}/api/onboarding/provision`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          role: formData.role,
          industry: formData.industry,
          tier: state.tier,
          billing: state.billing,
          businessType: state.businessType,
          selectedAgents: state.selectedAgents,
          selectedIntegrations: state.selectedIntegrations,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Provisioning failed")
      }

      // Navigate to success
      router.push(`/success?company=${encodeURIComponent(formData.company || "Your Company")}`)
    } catch (err) {
      setProvisionError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsProvisioning(false)
    }
  }

  const roles = [
    "Founder / CEO",
    "CTO / Technical Lead",
    "VP of Sales",
    "Head of Marketing",
    "Operations Manager",
    "HR Director",
    "Finance Manager",
    "Other",
  ]

  const industries = [
    "Technology / SaaS",
    "E-commerce / Retail",
    "Healthcare",
    "Finance / Banking",
    "Real Estate",
    "Manufacturing",
    "Consulting / Agency",
    "Education",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl">
          <Logo width={20} height={20} />
        </Link>
        <Button variant="ghost" className="gap-2" onClick={handleBackClick}>
          <ArrowLeft className="w-4 h-4" />
          Exit
        </Button>
      </nav>

      {/* Main Content */}
      <div className="py-8 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Almost There!</h1>
            <p className="text-gray-600">Confirm your details and we'll set up your workspace</p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              {provisionError && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                  {provisionError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
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
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>

                {/* Role & Industry */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <select
                      id="role"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                    >
                      <option value="">Select role</option>
                      {roles.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <select
                      id="industry"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      value={formData.industry}
                      onChange={(e) => handleInputChange("industry", e.target.value)}
                    >
                      <option value="">Select industry</option>
                      {industries.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={!isFormValid() || isProvisioning}
                  className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white"
                >
                  {isProvisioning ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Setting up your workspace...
                    </>
                  ) : (
                    <>
                      Complete Setup
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Back to Previous Step */}
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
        </div>
      </div>

      <BackWarningModal
        isOpen={showBackWarning}
        onClose={() => setShowBackWarning(false)}
        onConfirm={handleBackConfirm}
        currentStep={5}
      />

      <Footer />
    </div>
  )
}
