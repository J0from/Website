"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function PurchasePage() {
  const searchParams = useSearchParams()
  const billingParam = searchParams.get("billing")
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    billingParam === "monthly" ? "monthly" : "annual",
  )
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const orderSummaryRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (selectedTier && orderSummaryRef.current) {
      orderSummaryRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [selectedTier])

  const pricingTiers = [
    {
      id: "starter",
      name: "Starter",
      agents: 1,
      monthlyPrice: 25,
      annualPrice: 19,
      features: ["1 Jo", "Email support", "Basic analytics", "Standard integrations"],
      popular: false,
    },
    {
      id: "growth",
      name: "Growth",
      agents: 3,
      monthlyPrice: 75,
      annualPrice: 57,
      features: ["3 Jos", "Priority email support", "Advanced analytics", "Custom workflows"],
      popular: false,
    },
    {
      id: "professional",
      name: "Professional",
      agents: 5,
      monthlyPrice: 100,
      annualPrice: 75,
      features: ["Everything in Growth Plan", "5 Jos", "API access", "24/7 priority support"],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      agents: 8,
      monthlyPrice: 150,
      annualPrice: 112,
      features: ["Everything in Professional Plan", "8 Jos", "Account manager", "Custom training", "SLA guarantee"],
      popular: false,
    },
  ]

  const selectedTierData = pricingTiers.find((tier) => tier.id === selectedTier)
  const currentPrice = selectedTierData
    ? billingCycle === "monthly"
      ? selectedTierData.monthlyPrice
      : selectedTierData.annualPrice
    : 0
  const annualTotal = billingCycle === "annual" ? currentPrice * 12 : 0
  const annualSavings =
    selectedTierData && billingCycle === "annual"
      ? (selectedTierData.monthlyPrice - selectedTierData.annualPrice) * 12
      : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto">
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
        <Link href="/solutions/smb">
          <Button variant="ghost" className="gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4 text-slate-900">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Choose Your Plan</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Designed to help businesses automate and scale with the ease of one click
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="inline-flex items-center gap-3 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === "annual" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Yearly
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-semibold">Save 25%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-8 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingTiers.map((tier) => {
              const isSelected = selectedTier === tier.id
              const displayPrice = billingCycle === "monthly" ? tier.monthlyPrice : tier.annualPrice
              const pricePerJo = Math.round(displayPrice / tier.agents)

              return (
                <Card
                  key={tier.id}
                  className={`relative transition-all duration-200 hover:shadow-lg flex flex-col ${
                    isSelected
                      ? "border-2 border-blue-600 shadow-xl scale-105"
                      : tier.popular && !selectedTier
                        ? "border-2 border-blue-600 shadow-xl scale-105"
                        : "border-2 hover:border-blue-200"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{tier.name} Plan</h3>
                    <p className="text-sm text-slate-600">
                      {tier.id === "enterprise" ? "Advanced automation" : "All-in-one back office"}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6 flex-1 flex flex-col">
                    <div className="text-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ${displayPrice.toFixed(0)}
                        </span>
                        <span className="text-slate-600 text-sm">USD</span>
                      </div>
                      <div className="text-sm text-slate-600 mt-1">
                        {billingCycle === "annual" ? `Billed $${(displayPrice * 12).toFixed(0)} yearly` : "per month"}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">${pricePerJo} per Jo</div>
                    </div>

                    <ul className="space-y-3 flex-1">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => setSelectedTier(tier.id)}
                      variant={isSelected ? "gradient" : "secondary"}
                      size="default"
                      className={`w-full ${!isSelected ? "bg-black text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all" : ""}`} /* ALLOWED: decorative gradient */
                    >
                      {isSelected ? "Selected" : "Lets Go"}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Order Summary - Only show when tier is selected */}
      {selectedTier && selectedTierData && (
        <section ref={orderSummaryRef} className="py-12 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-blue-200 shadow-xl">
              <CardHeader>
                <h2 className="text-2xl font-bold text-slate-900">
                  Your new{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {selectedTierData.name}
                  </span>{" "}
                  plan
                </h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600">{selectedTierData.name} Plan</span>
                    <span className="font-semibold text-slate-900">
                      {billingCycle === "monthly" ? "Monthly" : "Yearly"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-slate-200">
                    <span className="text-slate-600">{selectedTierData.agents} Jos</span>
                    <span className="font-semibold text-slate-900">${currentPrice} USD/mo</span>
                  </div>
                  {billingCycle === "annual" && (
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-600">Yearly discount</span>
                      <span className="font-semibold text-green-600">-${annualSavings} USD</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-3 border-t-2 border-slate-200">
                    <span className="text-lg font-semibold text-slate-900">
                      Total
                      <div className="text-xs text-slate-600 font-normal">(excl. tax)</div>
                    </span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${billingCycle === "annual" ? annualTotal.toFixed(0) : currentPrice.toFixed(0)} USD
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <p>
                    Your plan is billed {billingCycle === "annual" ? "yearly" : "monthly"} and will renew for the price
                    and features available at the time of renewal.
                  </p>
                  {billingCycle === "annual" && (
                    <p className="text-green-600 font-medium">You can cancel any time before the renewal date.</p>
                  )}
                </div>

                <Button variant="gradient" size="form" asChild>
                  <Link href={`/checkout?tier=${selectedTier}&billing=${billingCycle}`}>Lets Go</Link>
                </Button>

                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">Cancel anytime, no questions asked</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
    </div>
  )
}
