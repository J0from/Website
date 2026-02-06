"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Info } from "lucide-react"

export default function PricingTable() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "",
      description: "Perfect for trying Jo",
      credits: "1,000 tasks per month",
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false,
      features: [
        "2 Department Agents",
        "Basic Finance Dashboard",
        "Simple HR Job Descriptions",
        "Basic Accounting Categories",
        "Email Support Only",
        "Standard Integrations",
      ],
    },
    {
      name: "Professional",
      price: "$49",
      period: "Per user, per month",
      billing: "Billed annually",
      description: "For growing teams",
      credits: "25,000 tasks per user/month",
      buttonText: "Buy Now",
      buttonVariant: "default" as const,
      popular: false,
      features: [
        "5 Department Agents",
        "Advanced Finance Scenarios",
        "HR Pulse Surveys & Analytics",
        "Auto Bank Reconciliation",
        "AI Help Desk Triage",
        "Omni-channel Support Inbox",
        "Basic Marketing Campaigns",
        "Workflow Mapping",
        "Lead Enrichment",
      ],
    },
    {
      name: "Business",
      price: "$99",
      period: "Per user, per month",
      billing: "Billed annually",
      description: "For scaling businesses",
      credits: "75,000 tasks per user/month",
      buttonText: "Buy Now",
      buttonVariant: "default" as const,
      popular: true,
      features: [
        "All 9 Department Agents",
        "Real-time Cash Flow + Runway",
        "Complete HR Onboarding Suite",
        "Full Accounting Automation",
        "Advanced IT Security Policies",
        "Multi-language Support (30+)",
        "Advanced Marketing Attribution",
        "OKR Dashboard Integration",
        "AI Sales Forecasting",
        "Priority Support",
      ],
    },
    {
      name: "Business",
      price: "$199",
      period: "Per user, per month (min 10 users)",
      billing: "Billed annually",
      description: "For large organizations",
      credits: "Unlimited tasks",
      buttonText: "Talk to Sales",
      buttonVariant: "outline" as const,
      popular: false,
      features: [
        "Unlimited Department Agents",
        "Custom Financial Modeling",
        "Advanced HR Compliance Tools",
        "CPA Review Portal Access",
        "Advanced IT Asset Management",
        "24/7 Premium Support",
        "Custom Marketing Integrations",
        "Advanced Operations Analytics",
        "Dedicated Sales Success Manager",
        "Custom Integrations",
        "SSO & Advanced Security",
        "Dedicated Account Manager",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Jo Plan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to enterprises, Jo scales with your business needs across all departments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-6 ${
                plan.popular
                  ? "border-2 border-yellow-400 shadow-xl scale-105"
                  : "border border-gray-200 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  {plan.period && <p className="text-sm text-gray-600 mb-1">{plan.period}</p>}
                  {plan.billing && <p className="text-sm text-gray-600">{plan.billing}</p>}
                </div>

                <div className="mb-6 text-center">
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-2">
                    <span>{plan.credits}</span>
                    <Info className="w-4 h-4" />
                  </div>
                </div>

                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                      : plan.buttonVariant === "outline"
                        ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                  variant={plan.popular ? "default" : plan.buttonVariant}
                >
                  {plan.buttonText}
                </Button>

                {(plan.name === "Professional" || plan.name === "Business") && (
                  <Button
                    variant="outline"
                    className="w-full mb-6 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Learn about add-on credits
                  </Button>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">All plans include secure integrations with 50+ popular business tools</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>QuickBooks</span>
            <span>•</span>
            <span>Salesforce</span>
            <span>•</span>
            <span>HubSpot</span>
            <span>•</span>
            <span>Slack</span>
            <span>•</span>
            <span>Gmail</span>
            <span>•</span>
            <span>Xero</span>
            <span>•</span>
            <span>Asana</span>
          </div>
        </div>
      </div>
    </section>
  )
}
