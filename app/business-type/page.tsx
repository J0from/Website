"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import BackWarningModal from "@/components/back-warning-modal"
import { Footer } from "@/components/footer"
import { BUSINESS_TYPES } from "@/lib/constants"
import { Logo } from "@/components/logo"

export default function BusinessTypePage() {
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null)
  const [showBackWarning, setShowBackWarning] = useState(false)
  const router = useRouter()

  const businessTypes = [
    {
      ...BUSINESS_TYPES.find((bt) => bt.id === "startup"),
      id: "solopreneur",
      title: "Solopreneur",
      subtitle: "Just you, big dreams",
      perfectFor: ["Freelancers & consultants", "Content creators", "E-commerce owners"],
      topAgents: [
        "Finance: Invoice & expense tracking",
        "Marketing: Social & email automation",
        "Support: Customer inquiries",
      ],
      agentCount: "3-5 typically needed",
      buttonText: "Start Solo Journey",
    },
    {
      ...BUSINESS_TYPES.find((bt) => bt.id === "smb"),
      id: "small-business",
      title: "Small Business",
      subtitle: "2-25 employees",
      perfectFor: ["Local services", "Retail stores", "Growing startups"],
      topAgents: [
        "HR: Onboarding & policies",
        "Sales: Lead management",
        "Operations: Workflow optimization",
        "Finance: Cash flow & budgeting",
      ],
      agentCount: "6-9 typically needed",
      buttonText: "Scale Your Business",
    },
    {
      ...BUSINESS_TYPES.find((bt) => bt.id === "mid-market"),
      id: "medium-business",
      title: "Medium Business",
      subtitle: "25-200 employees",
      perfectFor: ["Established companies", "Multi-location", "SaaS companies"],
      topAgents: [
        "Advanced Features: Custom workflows",
        "Compliance: SOC 2, GDPR",
        "Priority Support: Dedicated manager",
      ],
      agentCount: "Custom features included",
      buttonText: "Enterprise Ready",
    },
    {
      id: "vc-firms",
      title: "VC Firms",
      subtitle: "Portfolio company efficiency",
      perfectFor: ["Scaling portfolio companies", "Reducing overhead", "Standardizing processes"],
      topAgents: [
        "Finance: Reporting & burn rate",
        "Operations: Process standardization",
        "HR: Rapid scaling automation",
        "Sales: Pipeline optimization",
      ],
      agentCount: "Portfolio-wide efficiency pricing",
      buttonText: "Scale Portfolio Companies",
    },
    {
      id: "pe-firms",
      title: "PE Firms",
      subtitle: "Portfolio transformation & efficiency",
      perfectFor: ["Operational transformation", "Cost reduction & margins", "Value creation initiatives"],
      topAgents: [
        "Operations: Process optimization",
        "Finance: Margin analysis",
        "HR: Workforce optimization",
        "Accounting: Financial consolidation",
        "IT: Technology standardization",
      ],
      agentCount: "Value creation & efficiency pricing",
      buttonText: "Transform Portfolio Companies",
    },
    {
      id: "large-business",
      title: "Large Business",
      subtitle: "200+ employees",
      perfectFor: ["Large corporations", "Multi-nationals", "Highly regulated industries"],
      topAgents: [
        "Advanced Security: SOC 2, HIPAA, ISO",
        "Advanced Analytics: Cross-department BI",
        "Dedicated Support: 24/7 team",
      ],
      agentCount: "Unlimited + advanced features",
      buttonText: "Large Business Solution",
    },
  ]

  const handleBackClick = () => {
    setShowBackWarning(true)
  }

  const handleBackConfirm = () => {
    setShowBackWarning(false)
    router.push("/")
  }

  const handlePreviousStep = () => {
    router.push("/signup")
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
          {/* Business Type Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-12">
            {businessTypes.map((business) => (
              <Card
                key={business.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl relative ${
                  selectedBusiness === business.id
                    ? "border-2 border-blue-600 shadow-xl scale-105"
                    : "border-2 border-transparent hover:border-blue-200"
                }`}
                onClick={() => setSelectedBusiness(business.id)}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900">{business.title}</h3>
                      <p className="text-sm text-gray-600">{business.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6 flex-grow">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                      <ul className="text-sm text-gray-700 space-y-0">
                        {business.perfectFor.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <h4 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                        Top Jo:
                      </h4>
                      <div className="space-y-2">
                        {business.topAgents.map((agent, index) => (
                          <div key={index} className="flex items-center justify-center">
                            <span className="text-sm text-gray-900 font-bold">{agent}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6 bg-gradient-to-r from-blue-50 to-purple-50 -mx-6 px-6 -mb-6 pb-6 rounded-b-lg mt-auto">
                    <div className="text-center mb-4">
                      <div className="text-xs text-gray-500">{business.agentCount}</div>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full mx-auto transition-all duration-200 ${
                        selectedBusiness === business.id ? "bg-blue-600" : "border-2 border-slate-300"
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <Link href="/agent-selection">
              <Button
                disabled={!selectedBusiness}
                className={`h-12 px-8 transition-all duration-200 ${
                  selectedBusiness
                    ? "bg-slate-900 hover:bg-slate-800 text-white"
                    : "bg-slate-300 text-slate-500 cursor-not-allowed pointer-events-none"
                }`}
              >
                Continue Setup
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Back to Previous Step Option */}
          <div className="mt-8 text-center">
            <Button
              variant="ghost"
              onClick={handlePreviousStep}
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <ArrowLeft className="w-3 h-3 mr-1" />
              Back to Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Back Warning Modal */}
      <BackWarningModal
        isOpen={showBackWarning}
        onClose={() => setShowBackWarning(false)}
        onConfirm={handleBackConfirm}
        currentStep={2}
      />

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
