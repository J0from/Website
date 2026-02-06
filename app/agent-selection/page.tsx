"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import BackWarningModal from "@/components/back-warning-modal"
import { Footer } from "@/components/footer"

export default function AgentSelectionPage() {
  const [selectedAgents, setSelectedAgents] = useState<string[]>([])
  const [showBackWarning, setShowBackWarning] = useState(false)
  const router = useRouter()

  const agents = [
    {
      id: "finance",
      title: "Finance",
      icon: "💰",
      features: [
        "Real-time cash-flow dashboard with runway countdown",
        '"What-if" scenario builder for hires, loans, or price changes',
        "Vendor-spend benchmarks and discount suggestions",
        "Budget-vs-actual alerts sent to Slack/Teams",
        "Auto-generated investor or board decks (charts + talking points)",
        "Funding-readiness PDF with ARR, burn multiple, KPIs",
        "Secure bank feeds via Plaid/Teller (read-only)",
      ],
    },
    {
      id: "hr",
      title: "HR",
      icon: "👥",
      features: [
        "Inclusive AI job-description writer with salary bands",
        "Résumé short-listing and interview-question suggestions",
        "One-click onboarding checklist (accounts, docs, training)",
        "Pulse-survey bot with sentiment analytics & attrition flags",
        "Policy concierge (drafts & updates handbooks by jurisdiction)",
        "Self-serve PTO / time-off bot for Slack/MS Teams",
      ],
    },
    {
      id: "accounting",
      title: "Accounting",
      icon: "📊",
      features: [
        "Auto-categorization of bank & card transactions (≈98% accuracy)",
        "OCR bill / receipt capture straight to QuickBooks or Xero",
        "Nightly bank reconciliation with exception alerts",
        "Dual cash & accrual ledgers for GAAP vs. management views",
        "One-click month-end close pack (P&L, balance sheet, commentary)",
        "Sales-tax nexus tracker + ready-to-file reports",
        "CPA review portal with tamper-proof audit trail",
      ],
    },
    {
      id: "it",
      title: "IT",
      icon: "💻",
      features: [
        "AI triage of help-desk tickets (priority, routing, draft replies)",
        "Auto-provision / de-provision SaaS accounts via Okta or Google Workspace",
        "CVE feed monitoring with patch-schedule suggestions",
        "Auto-generated security policies (AUP, BYOD, incident response)",
        "Live hardware / software asset ledger with life-cycle status",
        'Self-service chatbot for common "how-to" questions',
        "Cloud-cost watchdog for spend spikes and rightsizing tips",
      ],
    },
    {
      id: "legal",
      title: "Legal",
      icon: "⚖️",
      features: [
        "Contract review and red-flag identification with risk scoring",
        "Auto-generated NDAs, service agreements, and employment contracts",
        "Compliance monitoring for GDPR, CCPA, and industry regulations",
        "Legal research assistant with case law and statute summaries",
        "IP portfolio tracking with renewal and filing reminders",
        "Litigation hold and e-discovery document management",
        "Vendor agreement comparison and negotiation talking points",
      ],
    },
    {
      id: "admin",
      title: "Admin",
      icon: "📋",
      features: [
        "Meeting scheduler with automatic agenda creation and follow-ups",
        "Travel booking and expense report automation",
        "Office supply inventory tracking with auto-reorder triggers",
        "Visitor management system with badge printing and notifications",
        "Document template library with version control",
        "Event planning assistant with vendor coordination",
        "Facilities maintenance scheduling and work order management",
      ],
    },
    {
      id: "support",
      title: "Support",
      icon: "🎧",
      features: [
        "Omni-channel inbox (email, chat, socials) with AI-draft replies",
        "Auto-build knowledge-base articles from solved tickets",
        "Sentiment radar that flags frustration and auto-escalates",
        "Voice-of-customer theme clustering and product-feedback tags",
        "SLA tracker with staffing recommendations",
        "Real-time translation in 30+ languages",
        "Full CRM sync to HubSpot / Salesforce timelines",
      ],
    },
    {
      id: "marketing",
      title: "Marketing",
      icon: "📈",
      features: [
        "Campaign composer: multi-touch email, ads, and landing pages",
        "SEO gap finder & keyword-brief generator",
        "Social-media scheduler with royalty-free image suggestions",
        "A/B variant factory and auto-iteration on winners",
        "Brand-voice memory to keep copy on-tone",
        "Lead-magnet generator (PDFs, checklists, slide decks)",
        "Cross-channel attribution dashboard (ads, email, web)",
      ],
    },
    {
      id: "operations",
      title: "Operations",
      icon: "⚙️",
      features: [
        "Visual workflow mapper with bottleneck heat-map",
        "Auto-drafted SOP documents as tasks are completed",
        "Inventory & order sync (Shopify, Amazon) with re-order forecasts",
        "Cross-team hand-offs that open tasks in Asana/Trello automatically",
        "OKR dashboard rolling task data into quarterly objectives",
        "Vendor scorecards (cost, quality, on-time delivery)",
        "Compliance checklists for ISO, SOC 2, FDA, etc.",
      ],
    },
    {
      id: "sales",
      title: "Sales",
      icon: "💼",
      features: [
        "Lead enrichment (firmographics, tech stack, intent) on import",
        "Smart sequencer for email + LinkedIn cadences by persona",
        "Meeting-prep one-pager (news, objections, social insights)",
        "Deal-health signals predicting slip risk & next-best action",
        "Quote & proposal drafter with dynamic pricing blocks",
        "Pipeline hygiene bot nudging reps to update stages",
        "AI-assisted forecast with explain-why deltas",
      ],
    },
  ]

  const toggleAgent = (agentId: string) => {
    setSelectedAgents((prev) => (prev.includes(agentId) ? prev.filter((id) => id !== agentId) : [...prev, agentId]))
  }

  const handleBackClick = () => {
    setShowBackWarning(true)
  }

  const handleBackConfirm = () => {
    setShowBackWarning(false)
    router.push("/")
  }

  const handlePreviousStep = () => {
    router.push("/business-type")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
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
        <Button variant="ghost" className="gap-2" onClick={handleBackClick}>
          <ArrowLeft className="w-4 h-4" />
          Exit
        </Button>
      </nav>

      {/* Main Content */}
      <div className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Pick Priority Solutions</h1>
            <p className="text-gray-600">Select the departments you want to enhance first</p>
          </div>

          {/* Agent Cards - 2x5 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {agents.map((agent) => (
              <Card
                key={agent.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl relative ${
                  selectedAgents.includes(agent.id)
                    ? "border-2 border-blue-600 shadow-xl scale-105"
                    : "border-2 border-transparent hover:border-blue-200"
                }`}
                onClick={() => toggleAgent(agent.id)}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{agent.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{agent.title}</h3>
                  </div>

                  <div className="space-y-2 mb-6 flex-grow">
                    {agent.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 text-center">
                    <div
                      className={`w-4 h-4 rounded-full mx-auto transition-all duration-200 ${
                        selectedAgents.includes(agent.id) ? "bg-blue-600" : "border-2 border-slate-300"
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <Link href="/integrations">
              <Button
                disabled={selectedAgents.length === 0}
                className={`h-12 px-8 transition-all duration-200 ${
                  selectedAgents.length > 0
                    ? "bg-slate-900 hover:bg-slate-800 text-white"
                    : "bg-slate-300 text-slate-500 cursor-not-allowed pointer-events-none"
                }`}
              >
                Continue Setup ({selectedAgents.length} selected)
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
              Back to Business Type
            </Button>
          </div>
        </div>
      </div>

      {/* Back Warning Modal */}
      <BackWarningModal
        isOpen={showBackWarning}
        onClose={() => setShowBackWarning(false)}
        onConfirm={handleBackConfirm}
        currentStep={3}
      />

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
