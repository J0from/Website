"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import BackWarningModal from "@/components/back-warning-modal"
import { Footer } from "@/components/footer"
import { INTEGRATIONS } from "@/lib/constants"
import { Logo } from "@/components/logo"

export default function IntegrationsPage() {
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([])
  const [showBackWarning, setShowBackWarning] = useState(false)
  const router = useRouter()

  const integrations = INTEGRATIONS

  const toggleIntegration = (integrationId: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(integrationId) ? prev.filter((id) => id !== integrationId) : [...prev, integrationId],
    )
  }

  const selectAllPopular = () => {
    const popularIntegrations = integrations
      .filter((integration) => integration.popular)
      .map((integration) => integration.id)
    setSelectedIntegrations(popularIntegrations)
  }

  const clearAll = () => {
    setSelectedIntegrations([])
  }

  const handleBackClick = () => {
    setShowBackWarning(true)
  }

  const handleBackConfirm = () => {
    setShowBackWarning(false)
    router.push("/")
  }

  const handlePreviousStep = () => {
    router.push("/agent-selection")
  }

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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Connect Your Tools</h1>
            <p className="text-gray-600 mb-6">Select the integrations you'd like Jo to connect with</p>

            {/* Quick Actions */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="outline"
                onClick={selectAllPopular}
                className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
              >
                Select Popular
              </Button>
              <Button
                variant="outline"
                onClick={clearAll}
                className="bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
              >
                Clear All
              </Button>
            </div>
          </div>

          {/* Integration Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
            {integrations.map((integration) => (
              <Card
                key={integration.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg relative ${
                  selectedIntegrations.includes(integration.id)
                    ? "border-2 border-blue-600 shadow-lg scale-105"
                    : "border-2 border-transparent hover:border-blue-200"
                }`}
                onClick={() => toggleIntegration(integration.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{integration.name}</h3>
                  <p className="text-xs text-gray-600 mb-3">{integration.description}</p>

                  <div
                    className={`w-4 h-4 rounded-full mx-auto transition-all duration-200 ${
                      selectedIntegrations.includes(integration.id) ? "bg-blue-600" : "border-2 border-slate-300"
                    }`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <Link href="/contact-info">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                Continue Setup ({selectedIntegrations.length} selected)
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Back to Previous Step */}
          <div className="mt-8 text-center">
            <Button
              variant="ghost"
              onClick={handlePreviousStep}
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <ArrowLeft className="w-3 h-3 mr-1" />
              Back to Agent Selection
            </Button>
          </div>
        </div>
      </div>

      <BackWarningModal
        isOpen={showBackWarning}
        onClose={() => setShowBackWarning(false)}
        onConfirm={handleBackConfirm}
        currentStep={4}
      />

      <Footer />
    </div>
  )
}
