"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft, Check, Shield, Zap, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import StripeCheckout from "@/components/stripe-checkout"
import { PRODUCTS } from "@/lib/products"

function CheckoutContent() {
  const searchParams = useSearchParams()

  const tierId = searchParams.get("tier")
  const billingCycle = (searchParams.get("billing") as "monthly" | "annual") || "monthly"

  // Build the product ID to match lib/products.ts format
  const productId = tierId ? `${tierId}-${billingCycle}` : null
  const selectedProduct = productId ? PRODUCTS.find((p) => p.id === productId) : null

  if (!selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-slate-600 mb-4">No plan selected</p>
            <Link href="/solutions/smb/purchase">
              <Button>Choose a Plan</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const monthlyPrice = selectedProduct.priceInCents / 100
  const totalPrice = billingCycle === "annual" ? monthlyPrice * 12 : monthlyPrice

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-7xl mx-auto">
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
        <Link href="/solutions/smb/purchase">
          <Button variant="ghost" className="gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4 text-slate-900">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Plans
          </Button>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Order Summary - Left Side */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="lg:sticky lg:top-6 space-y-6">
              {/* Plan Summary Card */}
              <Card className="shadow-lg border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h2 className="text-xl font-bold mb-1">Order Summary</h2>
                  <p className="text-blue-100 text-sm">Complete your purchase to get started</p>
                </div>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-slate-900 text-lg">{selectedProduct.name}</h3>
                        <p className="text-sm text-slate-600">{selectedProduct.agents} Jos included</p>
                        <p className="text-sm text-slate-600">
                          {billingCycle === "annual" ? "Billed annually" : "Billed monthly"}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-slate-900">${monthlyPrice}</p>
                        <p className="text-sm text-slate-600">per month</p>
                      </div>
                    </div>

                    {billingCycle === "annual" && (
                      <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-4">
                        <span className="text-sm text-green-700 font-medium">Annual savings</span>
                        <span className="text-sm text-green-700 font-bold">25% off</span>
                      </div>
                    )}

                    <div className="border-t border-slate-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-slate-900">Total Due Today</span>
                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ${totalPrice.toFixed(0)}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        {billingCycle === "annual" ? "Billed annually" : "Billed monthly"}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-slate-200">
                    <p className="text-sm font-semibold text-slate-900">What&apos;s included:</p>
                    {selectedProduct.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust Signals */}
              <Card className="shadow-md border-0">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <Shield className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Secure Payment</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                        <Zap className="w-5 h-5 text-purple-600" />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Instant Access</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Clock className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Cancel Anytime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stripe Checkout - Right Side */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <Card className="shadow-lg border-0">
              <CardHeader className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900">Payment Details</h2>
                <p className="text-sm text-slate-600">Complete your subscription securely with Stripe</p>
              </CardHeader>
              <CardContent className="p-0">
                <StripeCheckout productId={selectedProduct.id} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" />}>
      <CheckoutContent />
    </Suspense>
  )
}
