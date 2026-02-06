"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, DollarSign, User, Building2, Factory, TrendingUp, Landmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

export default function SMBPageClient() {
  // const departmentSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const departmentFeatures = [
    {
      name: "Finance",
      icon: "💰",
      features: [
        "Real-time cash-flow dashboard with runway countdown",
        "Budget-vs-actual alerts sent to Slack/Teams",
        "Auto-generated investor decks with KPIs",
        "Automated expense tracking and categorization",
        "Revenue forecasting and trend analysis",
        "Multi-currency support and conversion tracking",
      ],
    },
    {
      name: "HR",
      icon: "👥",
      features: [
        "Job-description writer with salary bands",
        "One-click onboarding checklist",
        "Self-serve PTO bot for Slack/Teams",
        "Employee performance review automation",
        "Benefits enrollment and management",
        "Compliance tracking and documentation",
      ],
    },
    {
      name: "Accounting",
      icon: "📊",
      features: [
        "Auto-categorization of transactions (98% accuracy)",
        "Nightly bank reconciliation with alerts",
        "One-click month-end close pack",
        "Automated invoice generation and tracking",
        "Tax preparation and filing assistance",
        "Financial statement generation",
      ],
    },
    {
      name: "IT",
      icon: "💻",
      features: [
        "Intelligent triage of help-desk tickets",
        "Auto-provision/de-provision SaaS accounts",
        "Cloud-cost watchdog for spend spikes",
        "Security monitoring and threat detection",
        "Software license management",
        "Automated backup and recovery systems",
      ],
    },
    {
      name: "Support",
      icon: "🎧",
      features: [
        "Omni-channel inbox with draft replies",
        "Auto-build knowledge-base from tickets",
        "Real-time translation in 30+ languages",
        "Customer satisfaction tracking and surveys",
        "Automated ticket routing and prioritization",
        "SLA monitoring and compliance alerts",
      ],
    },
    {
      name: "Marketing",
      icon: "📈",
      features: [
        "Multi-touch email, ads, and landing pages",
        "SEO gap finder & keyword-brief generator",
        "A/B variant factory with auto-iteration",
        "Social media scheduling and analytics",
        "Content calendar management",
        "Campaign performance tracking and optimization",
      ],
    },
    {
      name: "Operations",
      icon: "⚙️",
      features: [
        "Visual workflow mapper with bottleneck heat-map",
        "Auto-drafted SOP documents",
        "OKR dashboard rolling tasks into objectives",
        "Resource allocation and capacity planning",
        "Quality control and compliance monitoring",
        "Vendor management and procurement tracking",
      ],
    },
    {
      name: "Sales",
      icon: "💼",
      features: [
        "Lead enrichment on import",
        "Smart sequencer for email + LinkedIn",
        "Deal-health signals predicting slip risk",
        "Pipeline forecasting and analytics",
        "Automated follow-up reminders",
        "Proposal generation and tracking",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
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
        <Link href="/">
          <Button variant="ghost" className="gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 animate-pulse opacity-50"></div>
          <div
            className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 opacity-30"
            style={{
              animation: "gradientShift 8s ease-in-out infinite alternate",
            }}
          ></div>

          {/* Particle System - Reduced for mobile */}
          <div className="absolute inset-0 hidden sm:block">
            {/* Large glowing particles */}
            <div
              className="absolute top-10 left-20 w-4 h-4 bg-cyan-400 rounded-full blur-sm opacity-60 animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute top-32 right-16 w-3 h-3 bg-blue-300 rounded-full blur-sm opacity-70 animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "5s" }}
            ></div>
            <div
              className="absolute top-48 left-1/4 w-2 h-2 bg-purple-300 rounded-full blur-sm opacity-80 animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-20 right-1/3 w-3 h-3 bg-indigo-300 rounded-full blur-sm opacity-60 animate-bounce"
              style={{ animationDelay: "0.5s", animationDuration: "6s" }}
            ></div>
            <div
              className="absolute bottom-32 left-16 w-4 h-4 bg-cyan-300 rounded-full blur-sm opacity-70 animate-bounce"
              style={{ animationDelay: "3s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute bottom-48 right-20 w-2 h-2 bg-blue-400 rounded-full blur-sm opacity-80 animate-bounce"
              style={{ animationDelay: "1.5s", animationDuration: "5s" }}
            ></div>
            <div
              className="absolute top-60 left-1/2 w-3 h-3 bg-purple-400 rounded-full blur-sm opacity-60 animate-bounce"
              style={{ animationDelay: "2.5s", animationDuration: "3.5s" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/3 w-2 h-2 bg-indigo-400 rounded-full blur-sm opacity-75 animate-bounce"
              style={{ animationDelay: "4s", animationDuration: "4.5s" }}
            ></div>
          </div>

          {/* Geometric Shapes - Reduced for mobile */}
          <div className="absolute inset-0 hidden md:block">
            {/* Rotating hexagons */}
            <div
              className="absolute top-16 left-12 w-16 h-16 border border-cyan-400/30 rotate-45"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                animation: "spin 20s linear infinite",
              }}
            ></div>
            <div
              className="absolute top-40 right-24 w-12 h-12 border border-purple-400/40 rotate-12"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                animation: "spin 15s linear infinite reverse",
              }}
            ></div>
            <div
              className="absolute bottom-32 left-1/4 w-20 h-20 border border-blue-400/25 rotate-45"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                animation: "spin 25s linear infinite",
              }}
            ></div>

            {/* Floating triangles */}
            <div
              className="absolute top-24 right-1/3 w-8 h-8 border border-indigo-400/40"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                animation: "floatShape 6s ease-in-out infinite",
              }}
            ></div>
            <div
              className="absolute bottom-40 right-16 w-6 h-6 border border-cyan-400/50"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                animation: "floatShape 8s ease-in-out infinite reverse",
              }}
            ></div>
          </div>

          {/* Glowing orbs - Simplified for mobile */}
          <div className="absolute top-20 left-10 w-16 sm:w-32 h-16 sm:h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-12 sm:w-24 h-12 sm:h-24 bg-blue-400/15 rounded-full blur-lg"
            style={{ animation: "pulse 3s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-20 sm:w-40 h-20 sm:h-40 bg-purple-400/10 rounded-full blur-2xl"
            style={{ animation: "pulse 4s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-8 sm:w-16 h-8 sm:h-16 bg-indigo-400/20 rounded-full blur-md"
            style={{ animation: "pulse 2.5s ease-in-out infinite" }}
          ></div>

          {/* Circuit-like connecting lines - Hidden on mobile */}
          <div className="absolute inset-0 hidden lg:block">
            <svg className="w-full h-full opacity-20" viewBox="0 0 800 600">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d="M100,100 Q200,50 300,100 T500,100"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                style={{ animation: "drawLine 8s ease-in-out infinite" }}
              />
              <path
                d="M150,200 Q350,150 550,200 T750,200"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                style={{ animation: "drawLine 10s ease-in-out infinite reverse" }}
              />
              <path
                d="M50,300 Q250,250 450,300 T650,300"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                fill="none"
                style={{ animation: "drawLine 12s ease-in-out infinite" }}
              />
            </svg>
          </div>

          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-transparent to-purple-600/30"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
            Meet Jo
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 opacity-90 drop-shadow-md">
            Your Machine Dream Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed drop-shadow-sm px-4">
            We are a Machine Staffing Firm.
          </p>
          <Button variant="destructive" size="hero" asChild>
            <Link href="/solutions/smb/purchase">
              Get Jo
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Custom CSS animations */}
        <style jsx>{`
          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.08)' strokeWidth='1'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>");
            animation: float 20s ease-in-out infinite;
            z-index: 1;
          }
          
          @keyframes float {
            0%, 100% { 
              transform: translateX(0px) translateY(0px) rotate(0deg); 
              opacity: 0.08;
            }
            25% { 
              transform: translateX(10px) translateY(-5px) rotate(1deg); 
              opacity: 0.12;
            }
            50% { 
              transform: translateX(-5px) translateY(-10px) rotate(-0.5deg); 
              opacity: 0.06;
            }
            75% { 
              transform: translateX(-10px) translateY(5px) rotate(0.5deg); 
              opacity: 0.10;
            }
          }
          
          @keyframes gradientShift {
            0% { transform: translateX(-10px) translateY(-10px) rotate(0deg); }
            100% { transform: translateX(10px) translateY(10px) rotate(2deg); }
          }
          
          @keyframes floatShape {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes drawLine {
            0% { stroke-dasharray: 0 1000; }
            50% { stroke-dasharray: 1000 1000; }
            100% { stroke-dasharray: 0 1000; }
          }
        `}</style>
      </section>

      {/* Value Snapshot */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 -mt-12 sm:-mt-16 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">5×</div>
                <div className="text-sm sm:text-base text-gray-600">Faster task turnaround than manual workflows</div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">60hrs</div>
                <div className="text-sm sm:text-base text-gray-600">Saved per month per employee</div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">Zero</div>
                <div className="text-sm sm:text-base text-gray-600">Code or IT team required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Features */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
            Complete Department Coverage
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            Specialized Jo's for every department
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 auto-rows-fr">
            {departmentFeatures.map((department) => (
              <Card
                key={department.name}
                className="p-4 sm:p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200 flex flex-col h-full"
              >
                <CardContent className="p-0 flex flex-col h-full text-center">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="text-2xl sm:text-3xl">{department.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{department.name}</h3>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
                    {department.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-center">
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Section for each department */}
                  <div className="border-t pt-4 sm:pt-6 bg-gradient-to-r from-blue-50 to-purple-50 -mx-4 sm:-mx-6 px-4 sm:px-6 -mb-4 sm:-mb-6 pb-4 sm:pb-6 rounded-b-lg mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <span className="text-base sm:text-lg font-semibold text-gray-900">Simple Pricing</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-bold text-blue-600">$25</div>
                        <div className="text-xs sm:text-sm text-gray-600">per month</div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Button variant="gradient" size="default" className="w-full" asChild>
                        <Link href="/solutions/smb/purchase">Get Jo</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Size Solutions */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
            Perfect for Every Business Size
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            Jo scales with your business
          </p>

          <div className="space-y-8 sm:space-y-10">
            {/* Top row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 auto-rows-fr">
              {/* Solopreneur */}
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-0 flex flex-col h-full relative z-10 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Solopreneur</h3>
                      <p className="text-sm text-gray-600">Just you, big dreams</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>Freelancers & consultants</li>
                        <li>Content creators</li>
                        <li>Online course creators</li>
                        <li>E-commerce store owners</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Top Jo's:</h4>
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Finance</div>
                          <div className="text-sm text-gray-600">Invoice tracking & expense categorization</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Marketing</div>
                          <div className="text-sm text-gray-600">Social media content & email campaigns</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Support</div>
                          <div className="text-sm text-gray-600">Customer inquiry responses</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Accounting</div>
                          <div className="text-sm text-gray-600">Basic bookkeeping & tax prep</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6 bg-gradient-to-r from-blue-50 to-purple-50 -mx-6 sm:-mx-8 px-6 sm:px-8 -mb-6 sm:-mb-8 pb-6 sm:pb-8 rounded-b-lg mt-auto">
                    <div className="text-center mb-4">
                      <div className="text-xs text-gray-500">3-5 Jo's typically needed</div>
                    </div>
                    <Button variant="gradient" size="default" className="w-full" asChild>
                      <Link href="/solutions/smb/purchase">Start Solo Journey</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Small Business */}
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 border-yellow-300 hover:border-yellow-400 flex flex-col h-full relative overflow-hidden scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30 relative">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-0 flex flex-col h-full relative z-10 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6 mt-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Small Business</h3>
                      <p className="text-sm text-gray-600">2-25 employees</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>Local service businesses</li>
                        <li>Retail stores</li>
                        <li>Professional services</li>
                        <li>Growing startups</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Top Jo's:</h4>
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">HR</div>
                          <div className="text-sm text-gray-600">Employee onboarding & policy management</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Sales</div>
                          <div className="text-sm text-gray-600">Lead management & follow-up automation</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Operations</div>
                          <div className="text-sm text-gray-600">Workflow optimization & SOPs</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Finance</div>
                          <div className="text-sm text-gray-600">Cash flow forecasting & budgeting</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">IT</div>
                          <div className="text-sm text-gray-600">Basic security & asset management</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6 bg-gradient-to-r from-yellow-50 to-orange-50 -mx-6 sm:-mx-8 px-6 sm:px-8 -mb-6 sm:-mb-8 pb-6 sm:pb-8 rounded-b-lg mt-auto">
                    <div className="text-center mb-4">
                      <div className="text-xs text-gray-500">6-9 Jo's typically needed</div>
                    </div>
                    <Button variant="gradient" size="default" className="w-full" asChild>
                      <Link href="/solutions/smb/purchase">Scale Your Business</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Medium Business */}
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-0 flex flex-col h-full relative z-10 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-white">
                      <Factory className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Medium Business</h3>
                      <p className="text-sm text-gray-600">25-200 employees</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>Established companies</li>
                        <li>Multi-location businesses</li>
                        <li>SaaS companies</li>
                        <li>Manufacturing firms</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">All Jo's:</h4>
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Complete Suite</div>
                          <div className="text-sm text-gray-600">All 9 department Jo's</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Advanced Features</div>
                          <div className="text-sm text-gray-600">Custom workflows & integrations</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Compliance</div>
                          <div className="text-sm text-gray-600">SOC 2, GDPR, industry-specific</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Analytics</div>
                          <div className="text-sm text-gray-600">Cross-department insights & reporting</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Priority Support</div>
                          <div className="text-sm text-gray-600">Dedicated success manager</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6 bg-gradient-to-r from-purple-50 to-indigo-50 -mx-6 sm:-mx-8 px-6 sm:px-8 -mb-6 sm:-mb-8 pb-6 sm:pb-8 rounded-b-lg mt-auto">
                    <div className="text-center mb-4">
                      <div className="text-xs text-gray-500">All 9 Jo's + custom features</div>
                    </div>
                    <Button variant="gradient" size="default" className="w-full" asChild>
                      <Link href="/solutions/smb/purchase">Enterprise Ready</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom row - 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto auto-rows-fr">
              {/* VC */}
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-0 flex flex-col h-full relative z-10 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">VC Firms</h3>
                      <p className="text-sm text-gray-600">Portfolio company efficiency</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>Scaling portfolio companies faster</li>
                        <li>Reducing operational overhead</li>
                        <li>Standardizing processes across portfolio</li>
                        <li>Accelerating time-to-profitability</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Portfolio Efficiency Jo's:</h4>
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Finance</div>
                          <div className="text-sm text-gray-600">Automated financial reporting & burn rate optimization</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Operations</div>
                          <div className="text-sm text-gray-600">Process standardization & efficiency metrics</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">HR</div>
                          <div className="text-sm text-gray-600">Rapid scaling & talent acquisition automation</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Sales</div>
                          <div className="text-sm text-gray-600">Revenue acceleration & pipeline optimization</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Marketing</div>
                          <div className="text-sm text-gray-600">Growth marketing & customer acquisition efficiency</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6 bg-gradient-to-r from-green-50 to-emerald-50 -mx-6 sm:-mx-8 px-6 sm:px-8 -mb-6 sm:-mb-8 pb-6 sm:pb-8 rounded-b-lg mt-auto">
                    <div className="text-center mb-4">
                      <div className="text-xs text-gray-500">Portfolio-wide efficiency pricing</div>
                    </div>
                    <Button variant="gradient" size="default" className="w-full" asChild>
                      <Link href="/solutions/smb/purchase">Scale Portfolio Companies</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* PE */}
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-slate-200 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-100 to-gray-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-0 flex flex-col h-full relative z-10 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-600 rounded-lg flex items-center justify-center text-white">
                      <Landmark className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">PE Firms</h3>
                      <p className="text-sm text-gray-600">Portfolio transformation & efficiency</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>Operational transformation at scale</li>
                        <li>Cost reduction & margin improvement</li>
                        <li>Process automation across portfolio</li>
                        <li>Accelerating value creation initiatives</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Transformation Jo's:</h4>
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Operations</div>
                          <div className="text-sm text-gray-600">Process optimization & cost reduction automation</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Finance</div>
                          <div className="text-sm text-gray-600">Margin analysis & profitability improvement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">HR</div>
                          <div className="text-sm text-gray-600">Workforce optimization & productivity enhancement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">Accounting</div>
                          <div className="text-sm text-gray-600">Financial consolidation & reporting automation</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-900">IT</div>
                          <div className="text-sm text-gray-600">Technology standardization & digital transformation</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6 bg-gradient-to-r from-slate-50 to-gray-50 -mx-6 sm:-mx-8 px-6 sm:px-8 -mb-6 sm:-mb-8 pb-6 sm:pb-8 rounded-b-lg mt-auto">
                    <div className="text-center mb-4">
                      <div className="text-xs text-gray-500">Value creation & efficiency pricing</div>
                    </div>
                    <Button variant="gradient" size="default" className="w-full" asChild>
                      <Link href="/solutions/smb/purchase">Transform Portfolio Companies</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Not sure which size fits your business? Let Jo help you decide.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full bg-transparent"
            >
              <Link href="https://calendly.com/myj0/30min" target="_blank">
                Get Personalized Recommendation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-900">
            How Jo Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Connect Your Tools</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  One-click integrations with Gmail, QuickBooks, HubSpot, Slack, and 50+ apps.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Activate a Jo</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Choose a template or describe what you need. Setup takes seconds.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Review & Release</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Jo completes the work; you approve or let human reviewers fine-tune critical outputs.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                  4
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Focus on Growth</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Spend your time on strategy and growth while Jo handles the mundane tasks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-900">
            Why Teams Love Jo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="p-4 sm:p-6 border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl mb-3 sm:mb-4">
                  🎯
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">All-in-One Suite</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Replace multiple apps with one unified platform.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl mb-3 sm:mb-4">
                  ✨
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Human + Jo</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  AI speed with human precision for critical tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl mb-3 sm:mb-4">
                  💰
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">SMB-Friendly Pricing</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Transparent pricing with no long-term contracts.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-2 hover:border-blue-600 transition-colors">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl mb-3 sm:mb-4">
                  🌙
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Always On</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Jo works 24/7. Wake up to completed tasks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="text-lg sm:text-xl md:text-2xl font-medium italic mb-6 sm:mb-8 leading-relaxed whitespace-nowrap">
            "Jo cut the time to respond to RFPs to 20 mins, and 10x my sales pipeline."
          </blockquote>
          <cite className="text-base sm:text-lg opacity-90">— Craig B., NextGen Upffiters</cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Be Among the First?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">{"Join the movement"}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button
              asChild
              className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full"
            >
              <Link href="/solutions/smb/purchase">Get Jo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-transparent"
            >
              <Link href="/solutions/smb/purchase" className="flex items-center justify-center">
                Lets Go
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
