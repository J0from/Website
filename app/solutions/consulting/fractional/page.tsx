"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Check,
  ArrowRight,
  LifeBuoy,
  Shuffle,
  CloudFog,
  DollarSign,
  Users,
  Cpu,
  TrendingUp,
  Calculator,
  BarChart,
  FileText,
  LinkIcon,
  Kanban,
  Handshake,
  Settings,
  Briefcase,
  Palette,
  Building,
  Monitor,
  Wrench,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Linkedin,
  Instagram,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { sendFractionalFormEmail } from "@/app/actions/email"
import { Button } from "@/components/ui/button"

export default function FractionalOperationsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    revenue: "",
    teamSize: "",
    interestedIn: "",
    biggestChallenge: "",
    ready: false, // Added 'ready' field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle sticky header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      {/* 1. NAVIGATION BAR */}
      <nav
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? "shadow-md border-b border-slate-200" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back</span>
            </Button>

            {/* Desktop Nav */}
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
                variant="gradient"
                className="text-lg px-8 py-4 rounded-lg font-bold shadow-lg transition-all"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Your Session
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-600"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100">
            <div className="px-4 py-4 space-y-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 rounded"
              >
                How It Works
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 rounded"
              >
                Services
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("who-for")}
                className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 rounded"
              >
                Who It's For
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 rounded"
              >
                FAQ
              </Button>
              <Button
                variant="gradient"
                className="w-full mt-4"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Your Session
              </Button>
            </div>
          </div>
        )}
      </nav>
      {/* 2. HERO SECTION */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Stop Drowning in Operations. <span className="text-blue-600">Start Scaling.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                Get dedicated operations support managing your backend—augmented by Jo—so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="gradient"
                  className="text-lg px-8 py-4 rounded-lg font-bold shadow-lg transition-all"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("how-it-works")}
                  className="border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 text-lg px-8 py-4 rounded-lg font-bold shadow-sm transition-all"
                >
                  See How It Works
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative lg:ml-auto w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white rounded-xl shadow-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Clock className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Reclaim 20+ Hours</h3>
                    <p className="text-slate-500 text-sm font-medium">PER WEEK</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {["Expert operations team", "Jo powered augmentation", "Financial clarity"].map((item, i) => (
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
      {/* 3. PROBLEM STATEMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The Problem</h2>
            <p className="text-xl text-slate-600">Backend chaos is killing your growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <LifeBuoy className="text-red-500" size={32} />,
                title: "Drowning in Admin",
                desc: "More time on paperwork than client work",
              },
              {
                icon: <Shuffle className="text-orange-500" size={32} />,
                title: "No Systems",
                desc: "Every client adds complexity",
              },
              {
                icon: <CloudFog className="text-slate-500" size={32} />,
                title: "Financial Fog",
                desc: "No visibility into real profitability",
              },
              {
                icon: <DollarSign className="text-emerald-600" size={32} />,
                title: "Can't Afford Full-Time",
                desc: "Need help but can't justify $80K+ hire",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm border border-slate-100">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. SOLUTION OVERVIEW */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your Operations Team</h2>
            <p className="text-lg text-blue-50 leading-relaxed">
              Expert operators managing your backend, augmented by Jo for maximum efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={40} className="text-blue-200" />,
                title: "Expert Operators",
                desc: "Experienced professionals who know service businesses",
              },
              {
                icon: <Cpu size={40} className="text-purple-200" />,
                title: "Smart Augmentation",
                desc: "Jo handles repetitive tasks automatically",
              },
              {
                icon: <TrendingUp size={40} className="text-purple-200" />,
                title: "Scalable Systems",
                desc: "Processes that grow with you",
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
      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">From Chaos to Clarity in 4 Steps</h2>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  title: "Operations Assessment",
                  desc: "We audit your current systems, identify bottlenecks, and map your ideal operational state.",
                  time: "Week 1",
                },
                {
                  title: "System Setup & Augmentation",
                  desc: "Implement scalable processes, integrate Jo from, and clean up your backend.",
                  time: "Weeks 2-3",
                },
                {
                  title: "Ongoing Management",
                  desc: "Your fractional ops team handles daily operations: finance, reporting, process execution.",
                  time: "Week 4+",
                },
                {
                  title: "Continuous Optimization",
                  desc: "Refine systems, add augmentation, and scale processes as you grow.",
                  time: "Ongoing",
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
      {/* 6. SERVICES BREAKDOWN */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What's Included</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Calculator />,
                title: "Finance & Accounting",
                desc: "Bookkeeping, invoicing, financial reporting",
              },
              {
                icon: <BarChart />,
                title: "Financial Reporting",
                desc: "Dashboards, P&L, cash flow forecasting",
              },
              {
                icon: <FileText />,
                title: "Process Design",
                desc: "SOPs and repeatable systems",
              },
              {
                icon: <LinkIcon />,
                title: "System Augmentation",
                desc: "Connect tools, automate workflows",
              },
              {
                icon: <Kanban />,
                title: "Project Management",
                desc: "Track projects and optimize resources",
              },
              {
                icon: <Handshake />,
                title: "Vendor Management",
                desc: "Manage relationships and contracts",
              },
              {
                icon: <Users />,
                title: "HR & Team Ops",
                desc: "Onboarding, payroll, compliance",
              },
              {
                icon: <Settings />,
                title: "Tool Optimization",
                desc: "Optimize your software stack",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 7. TRANSFORMATION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The Transformation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center gap-2">
                <AlertTriangle className="text-red-500" /> Before
              </h3>
              <ul className="space-y-4">
                {[
                  "Buried in admin work",
                  "No scalable processes",
                  "Financial confusion",
                  "You're the bottleneck",
                  "Growth feels impossible",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-700 mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-blue-600" /> After
              </h3>
              <ul className="space-y-4">
                {[
                  "Focus on client work",
                  "Automated processes",
                  "Clear financial picture",
                  "Team handling operations",
                  "Ready to scale",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 8. WHO THIS IS FOR */}
      <section id="who-for" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Is This Right for Your Business?</h2>
            <p className="text-xl text-slate-400">Perfect for service businesses ready to scale systematically</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {[
              {
                icon: <Briefcase className="text-blue-600" size={32} />,
                title: "Consulting Firms",
                desc: "Management, operations, and technology execution",
              },
              { icon: <Palette />, title: "Agency Owners", desc: "Marketing, creative, digital" },
              { icon: <Building />, title: "Professional Services", desc: "Legal, accounting, HR, recruiting" },
              { icon: <Monitor />, title: "White Collar Services", desc: "IT services, logistics, B2B services" },
              { icon: <Wrench />, title: "Blue Collar Services", desc: "Contractors, HVAC, manufacturing" },
            ].map((profile, i) => (
              <div
                key={i}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <div className="text-emerald-400 mb-4">{profile.icon}</div>
                <h3 className="font-bold mb-2">{profile.title}</h3>
                <p className="text-sm text-slate-400">{profile.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-slate-300 max-w-3xl mx-auto bg-slate-800/50 p-4 rounded-lg">
            <p className="text-sm">
              Works best if you have: <span className="text-white font-semibold">$250K+ annual revenue</span>, multiple
              team members or contractors, repeatable service delivery, and growth ambitions held back by operational
              chaos.
            </p>
          </div>
        </div>
      </section>
      {/* 9. RESULTS */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real Results from Businesses Like Yours</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-400/30">
            {[
              { label: "Hours Saved / Week", value: "20+" },
              { label: "Financial Clarity", value: "30 Days" },
              { label: "ROI through efficiency", value: "10x" },
              { label: "Time to Improvement", value: "2-4 Wks" },
            ].map((stat, i) => (
              <div key={i} className="pt-8 md:pt-0 px-4">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <blockquote className="text-xl italic font-medium text-blue-50">
              "I went from working 70-hour weeks buried in admin to focusing on clients and growth execution. Best
              business decision I've made."
            </blockquote>
            <cite className="block mt-4 not-italic font-bold opacity-80">— Service Business Owner</cite>
          </div>
        </div>
      </section>
      {/* 10. COMPARISON TABLE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Fractional Operations vs. Your Current Approach
            </h2>
            <p className="text-xl text-slate-600">See why DIY operations don't scale</p>
          </div>

          <div className="overflow-x-auto shadow-xl rounded-2xl border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 font-bold text-slate-900 w-1/4">Aspect</th>
                  <th className="p-6 font-bold text-blue-700 w-1/4 bg-blue-50">Fractional Operations</th>
                  <th className="p-6 font-bold text-slate-900 w-1/4">DIY / Founder</th>
                  <th className="p-6 font-bold text-slate-900 w-1/4">Full-Time COO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { aspect: "Cost", frac: "$1.5-3K/month", diy: "Expensive 'Free'", ft: "$80-150K+" },
                  { aspect: "Expertise", frac: "Immediate Expert", diy: "Learning curve", ft: "Ramp-up needed" },
                  { aspect: "Scalability", frac: "Grows with you", diy: "Founder Bottleneck", ft: "Fixed Cost" },
                  { aspect: "Systems & Tech", frac: "Included (Jo from)", diy: "Manual work", ft: "Add-on cost" },
                  { aspect: "Time to Value", frac: "2-4 Weeks", diy: "Never solved", ft: "3-6 Months" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <td className="p-6 font-medium text-slate-900">{row.aspect}</td>
                    <td className="p-6 text-blue-700 font-bold bg-blue-50/30">{row.frac}</td>
                    <td className="p-6 text-slate-600">{row.diy}</td>
                    <td className="p-6 text-slate-600">{row.ft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* 11. ENGAGEMENT MODELS & BREAKDOWN */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Choose Your Operations Support Level</h2>
            <p className="text-xl text-slate-600">
              Start where you need the most help.{" "}
              <span className="text-blue-600 font-semibold">Minimum 3-month commitment for stabilization.</span>
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Foundation */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
              <div className="p-8 border-b border-slate-100 bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-900">Foundation</h3>
                <p className="text-blue-600 font-bold text-lg mt-1">15 Hours / Week</p>
                <p className="text-sm text-slate-500 mt-2">For $500K-$3M businesses starting to formalize operations</p>
              </div>
              <div className="p-8 flex-1">
                <ul className="space-y-4 mb-8">
                  {[
                    "Monthly financial close & reporting",
                    "Augmented bookkeeping & invoicing",
                    "1-2 process projects per month",
                    "Basic HR/payroll coordination",
                    "Quarterly financial analysis",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => scrollToSection("contact")} variant="secondary" className="w-full">
                  Let's Grow
                </Button>
              </div>
            </div>

            {/* Complete */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-600 overflow-hidden flex flex-col transform md:-translate-y-4">
              <div className="bg-blue-600 text-white text-center py-2 text-sm font-bold tracking-wide uppercase">
                Most Popular
              </div>
              <div className="p-8 border-b border-slate-100 bg-blue-50/50">
                <h3 className="text-2xl font-bold text-slate-900">Complete</h3>
                <p className="text-blue-600 font-bold text-lg mt-1">30 Hours / Week</p>
                <p className="text-sm text-slate-500 mt-2">For $2M-$10M+ businesses scaling rapidly</p>
              </div>
              <div className="p-8 flex-1">
                <ul className="space-y-4 mb-8">
                  {[
                    "Everything in Foundation",
                    "Bi-weekly financial reporting",
                    "3-4 process optimizations per month",
                    "Full project & resource management",
                    "Vendor & contract management",
                    "HR & Team Ops",
                    "Tech stack optimization",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => scrollToSection("contact")} variant="gradient" className="w-full">
                  Let's Grow
                </Button>
              </div>
            </div>
          </div>

          {/* Activity Breakdown */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-center mb-8">What 15 vs 30 Hours Actually Looks Like</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">15 Hours/Week Breakdown</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>
                    <strong className="text-slate-800">Finance (6h):</strong> Bookkeeping, invoicing, close
                  </li>
                  <li>
                    <strong className="text-slate-800">Reporting (2h):</strong> Dashboards, P&L
                  </li>
                  <li>
                    <strong className="text-slate-800">Docs (3h):</strong> SOPs, system setup
                  </li>
                  <li>
                    <strong className="text-slate-800">Augmentation (2h):</strong> Jo from integration
                  </li>
                  <li>
                    <strong className="text-slate-800">Planning/Team (2h):</strong> Planning, HR basics
                  </li>
                  <li className="mt-4 pt-4 border-t border-slate-100 text-blue-600 font-semibold">
                    Impact: Core operations managed, clear financials.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">30 Hours/Week Breakdown</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>
                    <strong className="text-slate-800">Finance (10h):</strong> Full accounting, AP/AR
                  </li>
                  <li>
                    <strong className="text-slate-800">Optimization (6h):</strong> Process improvements
                  </li>
                  <li>
                    <strong className="text-slate-800">Reporting (4h):</strong> Deep analysis
                  </li>
                  <li>
                    <strong className="text-slate-800">Augmentation (4h):</strong> Advanced workflows
                  </li>
                  <li>
                    <strong className="text-slate-800">Projects (3h):</strong> Resource tracking
                  </li>
                  <li>
                    <strong className="text-slate-800">Planning/Team (3h):</strong> Vendor mgmt, HR
                  </li>
                  <li className="mt-4 pt-4 border-t border-slate-100 text-emerald-600 font-semibold">
                    Impact: Complete management, operational scaling.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 12. JO FROM */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Jo from: Your Operations Augmentation Partner</h2>
            <p className="text-xl text-slate-300">Human expertise enhanced by intelligent technology</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Augmented Bookkeeping",
                desc: "Reduces manual data entry by 80% via bank connections and categorization.",
              },
              { title: "Smart Invoicing", desc: "Technology-augmented generation, sending, and follow-up reminders." },
              {
                title: "Real-Time Dashboards",
                desc: "Live P&L and cash flow metrics updated with technology augmentation.",
              },
              {
                title: "Process Augmentation",
                desc: "Augments repetitive tasks: data entry, reporting, notifications.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center mb-4">
                  <Cpu size={24} />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-blue-900/40 p-6 rounded-xl border border-blue-500/30 max-w-3xl mx-auto">
            <p className="text-blue-100 font-medium">
              "Jo from doesn't replace people—it supports them. Our expert operators use Jo from to eliminate grunt work
              so they can focus on strategic operations."
            </p>
          </div>
        </div>
      </section>
      {/* 13. FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "We're too small for a full operations team. Is this overkill?",
                a: "If you're over $250K in revenue and spending 10+ hours per week on backend tasks, you're not too small. We right-size operations support to your stage.",
              },
              {
                q: "Should I start with 15 or 30 hours?",
                a: "Start with 15 if you need financial clarity and basic processes. Go with 30 if you have multiple pain points or are scaling rapidly.",
              },
              {
                q: "How is this different from a bookkeeper?",
                a: "Bookkeepers record transactions. We provide full operations management: operational finance, process design, HR coordination, and system optimization.",
              },
              {
                q: "Can you work with our existing tools?",
                a: "Yes. We integrate with QuickBooks, Xero, Gusto, Asana, and virtually any tool you use. We can also recommend better solutions.",
              },
              {
                q: "How quickly will we see results?",
                a: "Financial reporting results in 2-4 weeks. Process documentation takes 30-60 days. Long-term improvements compound over 3-6 months.",
              },
              {
                q: "Do we need to commit long-term?",
                a: "3-month minimum to assess and stabilize. Then month-to-month. Most clients stay long-term as operations is ongoing.",
              },
              {
                q: "How do you handle confidential financial information?",
                a: "We follow strict security protocols and sign NDAs. All data is encrypted, access is role-based, and we follow accounting best practices.",
              },
              {
                q: "What if we need help with something not on your services list?",
                a: "If it's operational (not sales or marketing), we can likely help: compliance, insurance coordination, legal operations, etc.",
              },
              {
                q: "What if our operations are a total disaster right now?",
                a: "Perfect—that's our specialty. We meet you where you are, triage the urgent issues first, then systematically build proper operations.",
              },
              {
                q: "Can you help us prepare for a sale or investor due diligence?",
                a: "Absolutely. Clean financials, documented processes, and systematic operations dramatically increase business value.",
              },
              {
                q: "What happens if we want to hire full-time operations staff later?",
                a: "We can help you hire, create job descriptions, and transition to internal staff when the time is right.",
              },
              {
                q: "How is this different from a fractional CFO?",
                a: "Fractional CFOs focus on operational finance. We handle operational finance plus all other backend operations: processes, systems, HR, project management.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800">{item.q}</span>
                  {openFaqIndex === i ? (
                    <ChevronUp size={20} className="text-blue-600" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400" />
                  )}
                </button>
                {openFaqIndex === i && (
                  <div className="p-5 bg-slate-50 text-slate-600 border-t border-slate-100 text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 14. OBJECTIONS & MATURITY */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Objections */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
              We Get It—Delegating Operations Feels Scary
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  obj: "Nobody can do this as well as I can",
                  resp: "You're right—but you're the bottleneck. We document your knowledge and execute with your oversight.",
                },
                {
                  obj: "Our operations are too unique",
                  resp: "We've worked across dozens of service businesses. What feels unique is often a common challenge we've solved before.",
                },
                {
                  obj: "We can't afford it right now",
                  resp: "DIY operations costs you more in missed revenue and your time. We pay for ourselves by freeing you to generate revenue.",
                },
              ].map((card, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <p className="font-bold text-slate-900 mb-3">"{card.obj}"</p>
                  <p className="text-sm text-slate-600">{card.resp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Maturity Scale */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Where Are You on the Operations Maturity Scale?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="font-bold text-red-700 mb-2">Level 1: Chaos</h3>
                <p className="text-xs text-red-600">Founder does everything, no processes, reactive firefighting.</p>
                <div className="mt-4 text-sm font-semibold text-red-800">Needs: 30 Hours (Triage)</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                <h3 className="font-bold text-yellow-700 mb-2">Level 2: Scrappy</h3>
                <p className="text-xs text-yellow-600">Basic bookkeeping, informal processes, scaling strain.</p>
                <div className="mt-4 text-sm font-semibold text-yellow-800">Needs: 15 Hours (Systemize)</div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <h3 className="font-bold text-emerald-700 mb-2">Level 3: Systematic</h3>
                <p className="text-xs text-emerald-600">Clean financials, documented processes, ready to scale.</p>
                <div className="mt-4 text-sm font-semibold text-emerald-800">Goal State</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 15. CONTACT / FINAL CTA */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Scale Your Operations?</h2>
            <p className="text-xl text-slate-600">Let's build systems that scale—book your session.</p>
          </div>

          <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="mb-6">
                  <Check size={64} className="text-emerald-500 mx-auto" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">We'll Chat Soon!</h3>
                <p className="text-lg text-slate-600 mb-2">
                  Thank you for your interest in our Fractional Operations services.
                </p>
                <p className="text-slate-500">
                  We've received your information and will be in touch shortly to schedule your consultation.
                </p>
              </div>
            ) : (
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={async (e) => {
                  e.preventDefault()
                  setIsSubmitting(true)
                  try {
                    const result = await sendFractionalFormEmail(formData)
                    if (result.success) {
                      setIsSubmitted(true)
                      // Reset form
                      setFormData({
                        fullName: "",
                        email: "",
                        company: "",
                        phone: "",
                        industry: "",
                        revenue: "",
                        teamSize: "",
                        interestedIn: "",
                        biggestChallenge: "",
                        ready: false,
                      })
                    } else {
                      alert("There was an error submitting your inquiry. Please try again.")
                    }
                  } catch (error) {
                    console.error("[v0] Form submission error:", error)
                    alert("There was an error submitting your inquiry. Please try again.")
                  } finally {
                    setIsSubmitting(false)
                  }
                }}
              >
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Jane Doe"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="jane@company.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Acme Inc."
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="(555) 123-4567"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Industry</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  >
                    <option value="">Select industry</option>
                    <option value="consulting">Consulting</option>
                    <option value="agency">Agency</option>
                    <option value="professional-services">Professional Services</option>
                    <option value="white-collar">White Collar Services</option>
                    <option value="blue-collar">Blue Collar Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Annual Revenue</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900"
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                  >
                    <option value="">Select revenue</option>
                    <option value="under-250k">Under $250K</option>
                    <option value="250k-1m">$250K - $1M</option>
                    <option value="1m-3m">$1M - $3M</option>
                    <option value="3m-5m">$3M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="10m+">$10M+</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Team Size</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  >
                    <option value="">Select team size</option>
                    <option value="just-me">Just me</option>
                    <option value="2-5">2-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11-20">11-20 people</option>
                    <option value="20+">20+ people</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Interested In</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900"
                    value={formData.interestedIn}
                    onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                  >
                    <option value="">Select service</option>
                    <option value="15hrs">15 hours/week - Foundation</option>
                    <option value="30hrs">30 hours/week - Complete</option>
                    <option value="not-sure">Not sure - need recommendation</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Biggest Operational Challenge</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900"
                    value={formData.biggestChallenge}
                    onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })}
                  >
                    <option value="">Select challenge</option>
                    <option value="financial-chaos">Financial chaos / no visibility</option>
                    <option value="no-processes">No scalable processes</option>
                    <option value="manual-work">Too much manual work</option>
                    <option value="bottleneck">Founder is the bottleneck</option>
                    <option value="all">All of the above</option>
                  </select>
                </div>

                <div className="md:col-span-2 mt-4">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                      id="ready"
                      checked={formData.ready}
                      onChange={(e) => setFormData({ ...formData, ready: e.target.checked })}
                    />
                    <label htmlFor="ready" className="ml-2 text-sm text-slate-600">
                      I'm ready to get back to doing what I love
                    </label>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="gradient"
                    className="w-full text-lg py-4 rounded-lg font-bold shadow-lg transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Book Your Session"}
                  </Button>
                  <p className="text-center text-sm text-slate-500 mt-4 flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    <span className="flex items-center gap-1">
                      <Check size={14} className="text-emerald-500" /> No commitment
                    </span>
                    <span className="flex items-center gap-1">
                      <Check size={14} className="text-emerald-500" /> 30-min assessment
                    </span>
                    <span className="flex items-center gap-1">
                      <Check size={14} className="text-emerald-500" /> Custom roadmap
                    </span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      {/* 16. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-white tracking-tight flex items-center gap-2 mb-4">
                  <div className="relative w-6 h-6">
                    <Image src="/qubit.png" alt="Qubit" width={24} height={24} className="brightness-0" />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-normal opacity-100"
                      style={{
                        maskImage: `url('/qubit.png')`,
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: `url('/qubit.png')`,
                        WebkitMaskSize: "contain",
                      }}
                    ></div>
                  </div>
                  <span>
                    It's <span className="text-blue-500">Grow</span> Time
                  </span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed max-w-xs">
                Helping service businesses eliminate operational chaos and scale systematically with real People &
                Technology Augmentation.
              </p>
              {/* Social media links update */}
              <div className="flex gap-4 mt-6">
                <Link
                  href="https://www.linkedin.com/company/jofrom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </Link>
                <Link
                  href="https://x.com/J0from"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Follow us on X"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.244H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/jofrom.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-pink-600 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection("how-it-works")}
                    className="hover:text-blue-400 transition-colors p-0"
                  >
                    How It Works
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection("services")}
                    className="hover:text-blue-400 transition-colors p-0"
                  >
                    Services
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection("who-for")}
                    className="hover:text-blue-400 transition-colors p-0"
                  >
                    Who It's For
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection("faq")}
                    className="hover:text-blue-400 transition-colors p-0"
                  >
                    FAQ
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Get Started</h4>
              {/* Updated button to link to Calendly */}
              <Link
                href="https://calendly.com/myj0/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors mb-4 inline-block"
              >
                Book Strategy Session
              </Link>
              <a href="mailto:hello@jofrom.io" className="text-sm hover:text-white transition-colors block">
                hello@jofrom.io
              </a>
              <p className="text-xs mt-2">Serving service businesses nationwide</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between text-xs">
            <p>&copy; 2024 It's Grow Time. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* STICKY FOOTER CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-40 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-slate-900">Ready to offload backend operations?</p>
            <p className="text-sm text-slate-600">Let Jo from Operations handle the backend</p>
          </div>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="gradient"
            className="px-8 py-4 rounded-full font-bold shadow-2xl text-lg transition-all"
          >
            Book Your Session
          </Button>
        </div>
      </div>
    </div>
  )
}
