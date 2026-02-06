import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Zap,
  Calculator,
  Users,
  Megaphone,
  FileText,
  ShoppingCart,
  Settings,
  Shield,
  TrendingUp,
  User,
  CheckCircle2,
  MessageSquareQuote,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export const metadata: Metadata = {
  title: "Jo | Small Business Solutions - Your Office Dream Team",
  description:
    "Meet Jo - The 'Machine Dream Team' for small businesses. 5x faster, save 60 hours monthly, zero code required.",
}

export default function SmallBusinessPage() {
  // Department features - selecting 8 key departments for SMB
  const departmentFeatures = [
    {
      icon: Calculator,
      title: "Finance",
      capabilities: [
        "Automated bookkeeping",
        "Invoice generation & tracking",
        "Expense management",
        "Financial forecasting",
        "Budget planning",
      ],
    },
    {
      icon: Users,
      title: "HR",
      capabilities: [
        "Employee onboarding",
        "Time-off management",
        "Benefits administration",
        "Performance reviews",
        "Payroll coordination",
      ],
    },
    {
      icon: Megaphone,
      title: "Marketing",
      capabilities: [
        "Email campaigns",
        "Social media scheduling",
        "Content calendar",
        "Analytics & reporting",
        "Lead generation",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Sales",
      capabilities: [
        "Lead tracking & scoring",
        "Pipeline management",
        "Proposal automation",
        "Follow-up reminders",
        "Revenue forecasting",
      ],
    },
    {
      icon: FileText,
      title: "Legal",
      capabilities: [
        "Contract generation",
        "Compliance tracking",
        "Document management",
        "Risk assessment",
        "Policy updates",
      ],
    },
    {
      icon: Settings,
      title: "Operations",
      capabilities: [
        "Process automation",
        "Workflow optimization",
        "Inventory tracking",
        "Vendor management",
        "Task coordination",
      ],
    },
    {
      icon: Shield,
      title: "IT",
      capabilities: [
        "System monitoring",
        "Security management",
        "Access control",
        "Backup automation",
        "Tech support triage",
      ],
    },
    {
      icon: Users,
      title: "Support",
      capabilities: [
        "Customer ticket routing",
        "Response automation",
        "Knowledge base updates",
        "Satisfaction tracking",
        "Issue escalation",
      ],
    },
  ]

  // Business sizes
  const businessSizes = [
    {
      title: "Solopreneur",
      description: "Just you, building your vision",
      features: ["1-2 Jo's", "Core operations", "Email support"],
      price: "$25/mo",
      highlighted: false,
    },
    {
      title: "Small Team",
      description: "Growing with 5-20 employees",
      features: ["Up to 5 Jo's", "Advanced automation", "Priority support", "Custom workflows"],
      price: "$125/mo",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      title: "Growing Business",
      description: "Scaling to 50+ employees",
      features: ["Unlimited Jo's", "Enterprise features", "Dedicated success manager", "API access"],
      price: "Custom",
      highlighted: false,
    },
  ]

  // How it works steps
  const howItWorksSteps = [
    {
      number: "01",
      title: "Connect",
      description: "Link your existing tools (Slack, Gmail, QuickBooks) in minutes",
      icon: Zap,
    },
    {
      number: "02",
      title: "Activate",
      description: "Choose which Jo agents you need and set your preferences",
      icon: CheckCircle2,
    },
    {
      number: "03",
      title: "Review",
      description: "Jo handles tasks autonomously and asks for approval when needed",
      icon: MessageSquareQuote,
    },
    {
      number: "04",
      title: "Growth",
      description: "Focus on scaling your business while Jo manages the back office",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Dark Hero Section with Particles */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white overflow-hidden">
        <ParticleBackground particleCount={80} particleColor="rgba(255, 255, 255, 0.4)" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
              For Small & Medium Businesses
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Meet Jo - Your Office Dream Team</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto text-pretty">
              Stop juggling apps and wearing all the hats. Jo gives you an entire back office team that works 24/7.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold shadow-xl"
            >
              <Link href="/signup">
                Get Jo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Value Snapshot - Floating Card */}
      <section className="relative -mt-16 px-6 z-20">
        <Card className="max-w-5xl mx-auto shadow-2xl border-2">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  5x
                </div>
                <p className="text-lg font-semibold text-foreground">Faster</p>
                <p className="text-sm text-muted-foreground mt-1">Task completion speed</p>
              </div>
              <div className="text-center border-x border-border px-4">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  60hrs
                </div>
                <p className="text-lg font-semibold text-foreground">Saved</p>
                <p className="text-sm text-muted-foreground mt-1">Per month average</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  Zero
                </div>
                <p className="text-lg font-semibold text-foreground">Code</p>
                <p className="text-sm text-muted-foreground mt-1">Setup in minutes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Department Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Your Complete Back Office</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Every Jo agent is an expert in their domain, working together seamlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentFeatures.map((dept) => {
              const Icon = dept.icon
              return (
                <Card
                  key={dept.title}
                  className="border-2 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{dept.title}</h3>
                    </div>

                    <ul className="space-y-2 mb-6 flex-grow">
                      {dept.capabilities.map((capability) => (
                        <li key={capability} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-semibold text-foreground">
                        Simple Pricing: <span className="text-blue-600">$25/mo</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business Sizes */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Choose Your Starting Point</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Scale as you grow - add or remove Jo's anytime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessSizes.map((size) => (
              <Card
                key={size.title}
                className={`relative ${
                  size.highlighted ? "border-blue-600 border-2 shadow-xl scale-105" : "border-2 hover:border-blue-300"
                } transition-all duration-300`}
              >
                {size.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    {/* ALLOWED: decorative gradient */}
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 px-4 py-1">
                      {size.badge}
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{size.title}</h3>
                    <p className="text-muted-foreground">{size.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-foreground">{size.price}</div>
                    {size.price !== "Custom" && <p className="text-sm text-muted-foreground mt-1">per Jo</p>}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {size.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={size.highlighted ? "gradient" : "outline"}
                    className="w-full"
                  >
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get started in minutes, see results in hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  <Card className="border-2 hover:border-blue-300 transition-all h-full">
                    <CardContent className="p-6">
                      <div className="text-6xl font-bold text-blue-600/20 mb-4">{step.number}</div>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < howItWorksSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 text-blue-600/30" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <MessageSquareQuote className="w-16 h-16 mx-auto mb-8 opacity-80" />
          <blockquote className="text-2xl md:text-3xl font-medium mb-8 italic text-balance">
            "Jo has been like hiring an entire operations team overnight. We went from drowning in admin work to
            focusing on what we do best - building great products."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-blue-200 text-sm">Founder, TechStart Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to be among the first?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto text-pretty">
            Join the waitlist today and get exclusive early access pricing when we launch
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="gradient"
              className="text-lg px-8 py-6 h-auto font-semibold shadow-xl"
            >
              <Link href="/signup">
                Get Jo Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6 h-auto"
            >
              <Link href="/company/aboutus">Learn More About Jo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
