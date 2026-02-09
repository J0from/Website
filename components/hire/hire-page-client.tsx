"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Cpu,
  Stethoscope,
  Factory,
  Zap,
  MapPin,
  Clock,
  Shield,
  ChevronRight,
  Send,
  ArrowLeft,
  Wrench,
  HardHat,
  Cog,
  Fuel,
  Server,
  CircuitBoard,
  Activity as ActivityIcon,
  Thermometer,
  Hammer,
  Gauge,
  Bolt,
  Cable,
} from "lucide-react"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const jobCategories = [
  {
    id: "engineering",
    title: "Engineering & Tech",
    subtitle: "Sector 01",
    description:
      "Deploy skilled engineers and technical specialists for infrastructure, software systems, and advanced technology projects.",
    image: "/images/enrgey-20.jpg",
    icon: Cpu,
    roles: [
      "Systems Engineers",
      "Field Technicians",
      "Network Architects",
      "DevOps Engineers",
      "Electrical Engineers",
      "QA Specialists",
    ],
    stat: "200+",
    statLabel: "Active Engineers",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Sector 02",
    description:
      "Certified healthcare professionals for hospitals, clinics, and field medical operations across all specialties.",
    image: "/images/img-services-emergency-department-banner.avif",
    icon: Stethoscope,
    roles: [
      "Travel Nurses",
      "Medical Technologists",
      "Radiology Techs",
      "Respiratory Therapists",
      "Lab Technicians",
      "Clinical Specialists",
    ],
    stat: "500+",
    statLabel: "HC Professionals",
  },
  {
    id: "production",
    title: "Production & Manufacturing",
    subtitle: "Sector 03",
    description:
      "Experienced production operators and manufacturing specialists for high-output, compliance-driven environments.",
    image: "/images/food.jpg",
    icon: Factory,
    roles: [
      "Production Supervisors",
      "CNC Operators",
      "Quality Inspectors",
      "Assembly Technicians",
      "Process Engineers",
      "Maintenance Techs",
    ],
    stat: "350+",
    statLabel: "Production Crew",
  },
  {
    id: "energy",
    title: "Energy & Field Ops",
    subtitle: "Sector 04",
    description:
      "Certified field workers for energy infrastructure, utilities, and large-scale field deployment projects.",
    image: "/images/energy-20and-20infastructure.webp",
    icon: Zap,
    roles: [
      "Lineworkers",
      "Solar Technicians",
      "Wind Turbine Techs",
      "Pipeline Engineers",
      "Safety Officers",
      "Field Coordinators",
    ],
    stat: "150+",
    statLabel: "Field Operators",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Rapid Deployment",
    description:
      "Contract workers onboarded and field-ready within 48 hours of assignment confirmation.",
  },
  {
    icon: Shield,
    title: "Compliance Verified",
    description:
      "All personnel pre-screened for industry certifications, background checks, and regulatory requirements.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description:
      "Operational reach across all 50 states with local field teams and regional coordination centers.",
  },
  {
    icon: Cog,
    title: "Augmented by Jo",
    description:
      "Our AI platform handles scheduling, compliance tracking, and workforce optimization in real-time.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Initiate",
    description:
      "Submit your workforce requirements through our mission briefing portal.",
  },
  {
    step: "02",
    title: "Match",
    description:
      "Our AI-augmented system identifies and vets the ideal contract specialists.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "Workers are mobilized to your site with all credentials and clearances verified.",
  },
  {
    step: "04",
    title: "Monitor",
    description:
      "Real-time performance tracking and workforce optimization through our platform.",
  },
]

const industries = [
  { icon: Wrench, label: "Maintenance" },
  { icon: HardHat, label: "Construction" },
  { icon: CircuitBoard, label: "Electronics" },
  { icon: ActivityIcon, label: "Clinical" },
  { icon: Fuel, label: "Oil & Gas" },
  { icon: Server, label: "Data Centers" },
  { icon: Thermometer, label: "HVAC" },
  { icon: Hammer, label: "Fabrication" },
  { icon: Gauge, label: "Utilities" },
  { icon: Bolt, label: "Electrical" },
  { icon: Cable, label: "Telecom" },
  { icon: Factory, label: "Processing" },
]

export function HirePageClient() {
  const [activeCategory, setActiveCategory] = useState("engineering")

  const activeCat =
    jobCategories.find((c) => c.id === activeCategory) || jobCategories[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex justify-between items-center py-4 sm:py-6 px-6 md:px-12 lg:px-24 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft
              size={18}
              className="text-slate-600 group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-xl sm:text-2xl">
              <Logo size="lg" />
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="https://app.jofrom.io/auth">
            <Button
              variant="ghost"
              className="text-slate-900 hover:text-slate-700 text-sm sm:text-base px-3 sm:px-4"
            >
              Login
            </Button>
          </Link>
          <Link href="/company/contact">
            <Button variant="gradient" className="text-sm sm:text-base px-3 sm:px-6">
              Request Talent
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/img-services-emergency-department-banner.avif"
            alt="Healthcare professionals on site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-4">
              Contract Workforce Solutions
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
              Hire{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contract Workers
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
              We deploy skilled contract workers for engineering, healthcare,
              production, and energy operations -- field-ready,
              compliance-verified, and augmented by our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/company/contact">
                <Button
                  variant="gradient"
                  size="hero"
                  className="gap-2"
                >
                  Request Workers
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="hero"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
                onClick={() =>
                  document
                    .getElementById("sectors")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Browse Sectors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1,200+", label: "Active Workers" },
              { value: "48hr", label: "Deployment Time" },
              { value: "50", label: "States Covered" },
              { value: "99.2%", label: "Compliance Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-100 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">
              Specialized{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Workforce Categories
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
              Select a sector to explore available contract roles and deployment
              capabilities.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {jobCategories.map((cat) => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative p-5 rounded-lg border-2 transition-all text-left ${
                    isActive
                      ? "bg-white border-blue-300 shadow-md"
                      : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                      isActive
                        ? "bg-gradient-to-br from-blue-600 to-purple-600"
                        : "bg-slate-100 group-hover:bg-blue-50"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={
                        isActive
                          ? "text-white"
                          : "text-slate-500 group-hover:text-blue-600"
                      }
                    />
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    {cat.subtitle}
                  </div>
                  <div
                    className={`text-sm font-semibold ${
                      isActive ? "text-slate-900" : "text-slate-700"
                    }`}
                  >
                    {cat.title}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Category Detail */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={activeCat.image}
                alt={activeCat.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-xs text-blue-300 uppercase tracking-wider mb-1">
                    {activeCat.subtitle}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {activeCat.title}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {activeCat.stat}
                  </div>
                  <div className="text-xs text-slate-300">
                    {activeCat.statLabel}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {activeCat.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                    Available Roles
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {activeCat.roles.map((role) => (
                      <div
                        key={role}
                        className="flex items-center gap-2 text-sm text-slate-700 p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-200 transition-colors"
                      >
                        <ChevronRight
                          size={14}
                          className="text-blue-600 flex-shrink-0"
                        />
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/company/contact" className="w-full">
                <Button
                  variant="gradient"
                  className="w-full gap-2 h-12 text-base font-semibold"
                >
                  Request {activeCat.title} Workers
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">
              From Request to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Deployment
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
              Our streamlined process gets workers on-site fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <Card
                key={step.step}
                className="border-2 hover:border-blue-200 transition-all group"
              >
                <CardContent className="p-6">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform origin-left">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">
              Why Companies{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Deploy With Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={benefit.title}
                  className="border-2 hover:border-blue-200 transition-all"
                >
                  <CardContent className="p-8 flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">
              Built for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Regulated Industries
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto text-pretty">
              Thin margins, high stakes, essential work. We operate where
              compliance is non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center p-5 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all group"
                >
                  <Icon
                    size={24}
                    className="text-slate-400 group-hover:text-blue-600 transition-colors mb-3"
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-slate-700 transition-colors">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            Deploy Your Workforce{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed text-pretty">
            Submit your requirements and we will match you with pre-vetted
            contract workers ready for immediate deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/company/contact">
              <Button
                size="hero"
                className="bg-white text-blue-600 hover:bg-slate-50 gap-2 font-bold"
              >
                <Send size={18} />
                Submit Request
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/solutions/consulting">
              <Button
                variant="outline"
                size="hero"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                Learn About Staffing
              </Button>
            </Link>
          </div>

          {/* Quick specs */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Response Time", value: "< 24 hours" },
              { label: "Min. Deployment", value: "1 worker" },
              { label: "Contract Types", value: "All lengths" },
              { label: "Coverage", value: "50 states" },
            ].map((spec) => (
              <div key={spec.label}>
                <div className="text-lg font-bold text-white">{spec.value}</div>
                <div className="text-xs text-blue-200">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
