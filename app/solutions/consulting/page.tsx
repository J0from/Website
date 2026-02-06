"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, TrendingUp, DollarSign, Mail, Calendar, PieChart, UserCheck, Scale, Server } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"

export default function ConsultingGetMeetingsPage() {
  const [activeTab, setActiveTab] = useState<"growth" | "operations">("growth")

  useEffect(() => {
    // Scroll immediately
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })

    // Also scroll after a brief delay in case content is still loading
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto w-full">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center">
          <span className="md:hidden">Jo from</span>
          <span className="hidden md:inline">J</span>
          <div className="relative mx-1">
            <Image src="/qubit.png" alt="Qubit" width={20} height={20} className="brightness-0" />
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
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/solutions">
            <Button variant="ghost" className="text-slate-900 hover:text-blue-600">
              Solutions
            </Button>
          </Link>
          <Link href="/solutions/smb">
            <Button
              variant="gradient"
              className="hover:text-white"
            >
              <span className="hidden sm:inline">Meet Jo</span>
              <span className="sm:hidden">Jo</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                {activeTab === "growth" ? (
                  <>
                    It's <span className="text-7xl md:text-8xl text-blue-600">Grow</span> Time
                  </>
                ) : (
                  <>
                    It's Time to <span className="text-7xl md:text-8xl text-orange-500">Scale</span>
                  </>
                )}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {activeTab === "growth"
                  ? "Helping businesses scale with real People & Tech Augmentation"
                  : "Streamline your backend operations with Human & Tech Augmentation"}
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/design-mode/Screenshot%202025-10-20%20at%2011.58.12%E2%80%AFPM.png"
                alt="Business Growth and Analytics Illustration"
                width={500}
                height={500}
                className="w-full max-w-md border-4 border-gray-200 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg border-2 border-gray-200 p-1 bg-gray-50">
              <Button
                variant={activeTab === "growth" ? "gradient" : "ghost"}
                size="default"
                onClick={() => setActiveTab("growth")}
                className="px-8 py-3"
              >
                Growth
              </Button>
              <Button
                variant={activeTab === "operations" ? "gradient" : "ghost"}
                size="default"
                onClick={() => setActiveTab("operations")}
                className="px-8 py-3"
              >
                Operations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {activeTab === "growth" && (
            <div>
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Grow Your Business Faster</h2>
                <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
                  Our fractional Growth team manages your business development, augmented by Jo's tech, so you can lead
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="border-2 hover:border-blue-200 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Research</h3>
                      <p className="text-sm text-gray-600">Automated research and qualification of potential leads</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-blue-200 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Prospecting</h3>
                      <p className="text-sm text-gray-600">Email, Cold Calling, LinkedIn campaigns that convert</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-blue-200 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Proposals</h3>
                      <p className="text-sm text-gray-600">AI-assisted preparation and proposal drafting</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-blue-200 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                        <PieChart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Pipeline Management</h3>
                      <p className="text-sm text-gray-600">Automated reporting and pipeline tracking</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-12 text-center">
                  <Button variant="gradient" size="hero" asChild>
                    <Link href="/solutions/consulting/growth">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "operations" && (
            <div>
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
                  <span className="text-5xl text-orange-500">Scale</span> Your Business Faster
                </h2>
                <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
                  Our fractional Operations team manages your backend, augmented by Jo's tech, so you can lead
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  <Card className="border-2 hover:border-purple-200 transition-all">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                        <Server className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-3 text-lg">Expert Professionals</h3>
                      <p className="text-gray-600 text-sm">Get a dedicated fractional Operations team.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-purple-200 transition-all">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                        <Scale className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-3 text-lg">Scalable Systems</h3>
                      <p className="text-gray-600 text-sm">We design and implement operations augmentation.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-purple-200 transition-all">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                        <UserCheck className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-3 text-lg">Delegate Operations</h3>
                      <p className="text-gray-600 text-sm">Hands off the day-to-day so you can lead.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-purple-200 transition-all">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-3 text-lg">Finance & Accounting</h3>
                      <p className="text-gray-600 text-sm">
                        Automated bookkeeping, reporting, and financial management
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-12 text-center">
                  <Button variant="gradient" size="hero" asChild>
                    <Link href="/solutions/consulting/fractional">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {activeTab === "growth" ? "Start Closing More Deals This Month" : "Eliminate Operations Bottlenecks Today"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {activeTab === "growth"
              ? "Are you ready for new clients?"
              : "Are you ready to get back to doing the fun stuff?"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              size="hero"
              onClick={() => window.open("https://calendly.com/myj0/30min", "_blank")}
            >
              {activeTab === "growth" ? "Book Your Strategy Session" : "Get Your Operations Audit"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link href="/resources/strategy-document">
              <Button
                variant="outline"
                size="hero"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Download Strategy Document
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
