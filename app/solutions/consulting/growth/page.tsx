"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Check,
  ArrowRight,
  TrendingDown,
  FileText,
  Dices,
  Clock,
  Users,
  CheckSquare,
  TrendingUp,
  Phone,
  Mail,
  Search,
  Calendar,
  Database,
  BarChart,
  Settings,
  Briefcase,
  Palette,
  Building,
  Truck,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  ArrowLeft,
  Handshake,
  Zap,
  RefreshCw,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { sendGrowthFormEmail } from "@/app/actions/email"

export default function GrowthPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    revenue: "",
    interest: "",
    challenge: "",
    ready: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendGrowthFormEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        alert("There was an error submitting your inquiry. Please try again or contact hello@jofrom.io")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      alert("There was an error submitting your inquiry. Please try again or contact hello@jofrom.io")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      {/*NAVIGATION BAR */}
      <nav
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? "shadow-md border-b border-slate-200" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back</span>
            </Button>

            <div className="hidden lg:flex items-center space-x-8">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("how-it-works")}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                How It Works
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("who-for")}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                Who It's For
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("faq")}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                FAQ
              </Button>
              <Button
                className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Your Session
              </Button>
            </div>

            <div className="lg:hidden flex items-center">
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-600 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 shadow-lg absolute w-full z-50">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg"
              >
                How It Works
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg"
              >
                Services
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("who-for")}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg"
              >
                Who It's For
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg"
              >
                FAQ
              </Button>
              <Button
                className="block w-full mt-4 bg-blue-600 text-white px-3 py-3 rounded-lg font-semibold text-center"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Your Session
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Stop Waiting for Referrals. <span className="text-blue-600">Start Growing.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                Get dedicated sales professionals building your pipeline with Jo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="gradient"
                  className="text-lg px-8 rounded-lg font-bold shadow-lg transition-all"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book Your Session
                </Button>
                <Button
                  onClick={() => scrollToSection("how-it-works")}
                  variant="outline"
                  className="border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 text-lg px-8 py-4 rounded-lg font-bold transition-colors"
                >
                  See How It Works <ArrowRight size={20} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative lg:ml-auto w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white rounded-xl shadow-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <TrendingUp className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Predictable Pipeline</h3>
                    <p className="text-slate-500 text-sm font-medium">EVERY MONTH</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {["Proactive outbound sales", "Pipeline in 60-90 days", "Fraction of hiring cost"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center">
                        <Check size={14} className="text-blue-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The Problem</h2>
            <p className="text-xl text-slate-600">Reactive sales means unpredictable revenue</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingDown className="text-red-500" size={32} />,
                title: "Feast or Famine",
                desc: "Revenue rollercoaster from referral dependence",
              },
              {
                icon: <FileText className="text-orange-500" size={32} />,
                title: "RFP Treadmill",
                desc: "Competing with no relationship",
              },
              {
                icon: <Dices className="text-purple-500" size={32} />,
                title: "Hope-Based Sales",
                desc: "Waiting for the phone to ring",
              },
              {
                icon: <Clock className="text-slate-500" size={32} />,
                title: "No Time",
                desc: "Billing hours leaves no time to prospect",
              },
            ].map((card, i) => (
              <Card key={i} className="border-2 hover:border-red-200 transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm border border-slate-100">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION OVERVIEW */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your Outbound Sales Team</h2>
            <p className="text-lg text-blue-50 leading-relaxed">
              Dedicated sales professionals building predictable pipeline with Jo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={40} className="text-blue-200" />,
                title: "Expert Team",
                desc: "Sales pros making calls and booking meetings daily",
              },
              {
                icon: <CheckSquare size={40} className="text-purple-200" />,
                title: "Proven Systems",
                desc: "Playbooks built for service businesses",
              },
              {
                icon: <TrendingUp size={40} className="text-purple-200" />,
                title: "Predictable Pipeline",
                desc: "Know where next month's revenue comes from",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-blue-100">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              From Referral Dependence to Pipeline Predictability in 4 Steps
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  title: "ICP & Messaging Workshop",
                  desc: "We define your ideal client, craft messaging that resonates, and build your target list",
                  time: "Week 1",
                },
                {
                  title: "Outbound Campaign Launch",
                  desc: "Your dedicated operator starts multi-channel prospecting: cold calls, email sequences, LinkedIn outreach",
                  time: "Week 2",
                },
                {
                  title: "Qualified Meetings Booked",
                  desc: "Discovery calls scheduled with decision-makers who match your ICP",
                  time: "Weeks 3-4+",
                },
                {
                  title: "Pipeline Optimization",
                  desc: "Refine messaging, targeting, and tactics based on real results and feedback",
                  time: "Ongoing monthly",
                },
              ].map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg shadow-blue-200">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 h-20">{step.desc}</p>
                  <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {step.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES BREAKDOWN */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What's Included</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Phone />,
                title: "Cold Calling",
                desc: "Daily outreach to ideal clients",
              },
              {
                icon: <Mail />,
                title: "Email Campaigns",
                desc: "Multi-touch sequences that convert",
              },
              {
                icon: <Search />,
                title: "Target Research",
                desc: "AI-powered prospect identification",
              },
              {
                icon: <Calendar />,
                title: "Meeting Booking",
                desc: "Qualified calls with decision-makers",
              },
              {
                icon: <Database />,
                title: "CRM Management",
                desc: "Complete pipeline visibility",
              },
              {
                icon: <FileText />,
                title: "Proposal Support",
                desc: "Help closing deals",
              },
              {
                icon: <BarChart />,
                title: "Weekly Reporting",
                desc: "Track all pipeline activity",
              },
              {
                icon: <Settings />,
                title: "Optimization",
                desc: "Continuous improvement",
              },
            ].map((service, i) => (
              <Card key={i} className="border-2 hover:border-blue-200 transition-all">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The Transformation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center gap-2">
                <AlertTriangle className="text-red-500" /> Before
              </h3>
              <ul className="space-y-4">
                {[
                  "Waiting for referrals",
                  "Responding to RFPs blindly",
                  "Unpredictable revenue",
                  "No time to prospect",
                  "Pipeline anxiety",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-700 mb-6 flex items-center gap-2">
                <CheckSquare className="text-blue-600" /> After
              </h3>
              <ul className="space-y-4">
                {[
                  "Proactive outbound daily",
                  "Qualified pipeline building",
                  "Predictable revenue forecast",
                  "Sales team working for you",
                  "Pipeline confidence",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-3 text-slate-900">What's Included</h3>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Everything you need to build a predictable pipeline and accelerate growth
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-slate-200 hover:border-blue-500 transition-all bg-white group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Dedicated SDR</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Expert growth operator managing your entire outbound process from prospecting to booking
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 hover:border-blue-500 transition-all bg-white group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                    <Handshake className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Jo Closes</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Jo from Sales working alongside your team to close qualified opportunities
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 hover:border-blue-500 transition-all bg-white group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Multi-Channel Funnel</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Strategic campaigns across email, LinkedIn, and calls to maximize engagement
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 hover:border-blue-500 transition-all bg-white group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                    <Database className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">CRM Integration</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Full integration tracking every interaction, opportunity, and pipeline stage
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 hover:border-blue-500 transition-all bg-white group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Pipeline Reports</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Weekly performance insights on pipeline health, conversion metrics, and forecasting
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 hover:border-blue-500 transition-all bg-white group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                    <RefreshCw className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Continuous Optimization</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Ongoing testing and refinement to improve results and ROI over time
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* MERGED CODE START */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    <Clock className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Minimum 3-Month Commitment</h3>
                  <p className="text-lg text-slate-600 leading-relaxed flex-grow">
                    Growth campaigns need time to mature and optimize. Our 3-month minimum ensures we can deliver
                    consistent, predictable results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                    <HelpCircle className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Not sure which option is right for you?</h3>
                  <p className="text-lg text-slate-600 leading-relaxed flex-grow">
                    Book a call and we'll recommend the best fit based on your goals, capacity, and market.
                  </p>
                </CardContent>
              </Card>
            </div>
            {/* MERGED CODE END */}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section id="who-for" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Is This Right for Your Service Business?
            </h2>
            <p className="text-xl text-slate-600">Perfect for SMB service businesses ready to take control</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Briefcase className="text-blue-600" size={32} />,
                title: "Consulting Firms",
                pain: "Referrals are great but unpredictable, RFP responses rarely convert",
                solution: "Proactive outreach to ideal clients who need your expertise",
              },
              {
                icon: <Palette className="text-purple-600" size={32} />,
                title: "Agency Owners",
                pain: "Always chasing the next client, can't plan capacity or hiring",
                solution: "Predictable pipeline that lets you scale confidently",
              },
              {
                icon: <Building className="text-emerald-600" size={32} />,
                title: "Professional Services",
                pain: "Dependent on network referrals, hard to break into new markets",
                solution: "Systematic outbound to expand beyond your current network",
              },
              {
                icon: <Truck className="text-orange-600" size={32} />,
                title: "B2B Service Providers",
                pain: "Stuck responding to RFPs against lowest bidder, no margin",
                solution: "Get in front of buyers before procurement, build relationships",
              },
            ].map((profile, i) => (
              <Card key={i} className="border-2 hover:border-blue-200 transition-all">
                <CardContent className="p-6">
                  <div className="mb-4">{profile.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{profile.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    <strong>Pain:</strong> {profile.pain}
                  </p>
                  <p className="text-sm text-blue-700">
                    <strong>Solution:</strong> {profile.solution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Works Best If You Have:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-blue-600 mb-2">Define ICP</h4>
                <p className="text-sm text-slate-600">Defined ideal customer profile</p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-blue-600 mb-2">Clear Solution</h4>
                <p className="text-sm text-slate-600">Services that solve clear pain points</p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-blue-600 mb-2">ACV 10K+</h4>
                <p className="text-sm text-slate-600">Deal sizes of $10K+</p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-blue-600 mb-2">Capacity</h4>
                <p className="text-sm text-slate-600">Ability to handle new client work</p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-blue-600 mb-2">Cashflow</h4>
                <p className="text-sm text-slate-600">Have cashflow runway</p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-blue-600 mb-2">250K+ Annual Revenue</h4>
                <p className="text-sm text-slate-600">Crossed the $250K line</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS/METRICS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Real Results from Service Businesses Like Yours
            </h2>
            <p className="text-xl text-slate-600">What happens when you move from reactive to proactive</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { stat: "3-5", label: "Qualified Meetings", desc: "Average per week after 60 days" },
              { stat: "60%", label: "Less RFP Chasing", desc: "Focus on relationships, not procurement boxing" },
              { stat: "$250K+", label: "Pipeline Built", desc: "Average in first 90 days" },
              { stat: "2-3", label: "Months", desc: "Time to predictable monthly pipeline" },
            ].map((metric, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-xl border border-blue-200 text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.stat}</div>
                <div className="text-lg font-bold text-slate-900 mb-1">{metric.label}</div>
                <div className="text-sm text-slate-600">{metric.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 max-w-2xl mx-auto">
            <blockquote className="text-lg text-slate-700 italic mb-4">
              "We went from hoping for referrals to having face to face meetings with fleet managers"
            </blockquote>
            <cite className="text-slate-600 font-semibold">— Craig</cite>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Choose Your Growth Speed</h2>
            <p className="text-xl text-slate-600">Start at the pace that matches your business stage</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Fractional Fractional</h3>
                  <p className="text-sm text-slate-600 italic">"That's Meta"</p>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-6">15 hours/week</div>
                <div className="space-y-4 mb-8">
                  <p className="font-semibold text-slate-900">What to expect:</p>
                  <ul className="space-y-2">
                    {[
                      "10-15 targeted calls per day",
                      "100-150 personalized emails per week",
                      "25-35 LinkedIn connection requests per week",
                      "6-8 qualified meetings booked per month",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-600 pt-4">
                    <strong>Perfect for:</strong> $500K-$3M businesses starting outbound journey
                  </p>
                </div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Let's Grow
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Full-Time Fractional</h3>
                  <p className="text-sm text-slate-600 italic">"Works 60% of the time, it works every time"</p>
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-6">30 hours/week</div>
                <div className="space-y-4 mb-8">
                  <p className="font-semibold text-slate-900">What to expect:</p>
                  <ul className="space-y-2">
                    {[
                      "25-35 targeted calls per day",
                      "200-300 personalized emails per week",
                      "50-70 LinkedIn connection requests per week",
                      "12-16 qualified meetings booked per month",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <Check className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-600 pt-4">
                    <strong>Perfect for:</strong> $2M-$10M+ businesses serious about scale
                  </p>
                </div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "We've always gotten clients from referrals. Why change?",
                a: "Referrals are great—and we don't want you to stop getting them. But relying only on referrals means you can't control or predict your growth. Outbound gives you a second engine so you're not trapped in feast or famine cycles. Many clients use us to supplement referrals and fill gaps.",
              },
              {
                q: "Should I start with 15 hours or 30 hours per week?",
                a: "Start with 15 hours if you're testing outbound for the first time, have a strong referral base you want to supplement, or have limited capacity to handle new clients right now. Go with 30 hours if you're serious about replacing referral dependence, ready to scale aggressively, or have the capacity to handle 6-10+ new conversations per month. Most clients start at 15 hours and scale to 30 hours once they see results.",
              },
              {
                q: "We tried cold calling years ago and it didn't work. Why would it work now?",
                a: "Cold calling for services is different than cold calling for products. We use warm, relationship-focused messaging that positions you as a peer, not a vendor. Combined with email and LinkedIn pre-warming, we get conversations, not hang-ups. Modern outbound is multi-channel and targeted.",
              },
              {
                q: "How quickly will we see results?",
                a: "Most clients have their first discovery calls booked within 3-4 weeks. It takes 60-90 days to build meaningful pipeline (10-20+ opportunities). With 15 hours/week, expect 2-4 meetings per month after ramp-up. With 30 hours/week, expect 6-10 meetings per month. Remember: you're playing the long game to get off the referral rollercoaster.",
              },
              {
                q: "What's the commitment? Can we scale up or down?",
                a: "We require a 3-month minimum commitment to give campaigns time to mature and optimize. After that, you can scale from 15 to 30 hours, or from 30 to 15 hours with 30 days notice. Many clients start at 15 hours, see results, then scale to 30 hours for aggressive growth.",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  {openFaqIndex === i ? (
                    <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-slate-400 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaqIndex === i && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready for Predictable Pipeline?</h2>
            <p className="text-xl text-blue-50">Let's build your outbound engine—book your session</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {!isSubmitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Company Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Industry/Service Type <span className="text-accent">*</span>
                    </label>
                    <Select
                      value={formData.industry}
                      onValueChange={(value) => setFormData({ ...formData, industry: value })}
                    >
                      <SelectTrigger className="w-full text-slate-900">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="agency">Agency</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="professional-services">Professional Services</SelectItem>
                        <SelectItem value="b2b-services">B2B Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Current Annual Revenue <span className="text-accent">*</span>
                    </label>
                    <Select
                      value={formData.revenue}
                      onValueChange={(value) => setFormData({ ...formData, revenue: value })}
                    >
                      <SelectTrigger className="w-full text-slate-900">
                        <SelectValue placeholder="Select revenue range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500k">Under $500K</SelectItem>
                        <SelectItem value="500k-2m">$500K-$2M</SelectItem>
                        <SelectItem value="2m-5m">$2M-$5M</SelectItem>
                        <SelectItem value="5m-10m">$5M-$10M</SelectItem>
                        <SelectItem value="10m-plus">$10M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Interested In <span className="text-accent">*</span>
                    </label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) => setFormData({ ...formData, interest: value })}
                    >
                      <SelectTrigger className="w-full text-slate-900">
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15hrs">15 hours/week to start</SelectItem>
                        <SelectItem value="30hrs">30 hours/week for aggressive growth</SelectItem>
                        <SelectItem value="not-sure">Not sure - need recommendation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Biggest Challenge <span className="text-accent">*</span>
                    </label>
                    <Select
                      value={formData.challenge}
                      onValueChange={(value) => setFormData({ ...formData, challenge: value })}
                    >
                      <SelectTrigger className="w-full text-slate-900">
                        <SelectValue placeholder="Select your challenge" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="feast-famine">Feast or famine cycles</SelectItem>
                        <SelectItem value="referrals">Too dependent on referrals</SelectItem>
                        <SelectItem value="rfps">RFPs aren't converting</SelectItem>
                        <SelectItem value="scale">Can't scale</SelectItem>
                        <SelectItem value="time">No time to prospect</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="ready"
                    checked={formData.ready}
                    onChange={(e) => setFormData({ ...formData, ready: e.target.checked })}
                    className="w-4 h-4 rounded border-slate-300 text-accent focus:ring-accent"
                  />
                  <label htmlFor="ready" className="text-sm text-slate-600">
                    I'm ready to move from reactive to proactive sales
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="gradient"
                  className="w-full py-4 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Book Your Session"}
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">We'll Chat Soon!</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Thanks for reaching out! We'll review your information and get back to you within 24 hours to discuss
                  how we can help grow your business.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
