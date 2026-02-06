import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Network, BarChart3, Settings, Headphones } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Mid-Market Solutions | Jo",
  description: "Scale your operations with intelligent automation built for growing companies",
}

export default function MidMarketPage() {
  const capabilities = [
    {
      icon: Network,
      title: "Cross-Department Workflows",
      description: "Connect Finance, HR, Operations, and Sales with automated handoffs and shared data flows",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time dashboards and predictive insights across all your business functions",
    },
    {
      icon: Settings,
      title: "Custom Agent Configuration",
      description: "Tailor each agent's behavior to match your unique processes and compliance requirements",
    },
    {
      icon: Headphones,
      title: "Priority Support",
      description: "Dedicated success manager and 24/7 priority support for your growing team",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-slate-900 flex items-center">
          J
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
        <div className="flex items-center gap-4">
          <Link href="/enterprise" className="text-slate-900 hover:text-blue-600 transition-colors">
            Enterprise
          </Link>
          <Link href="/company/aboutus">
            <Button
              variant="gradient"
              className="px-4 py-2 h-auto hover:text-white"
            >
              Meet Jo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Scale Operations, Not Headcount</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Automate cross-departmental workflows and eliminate bottlenecks as you grow from 50 to 500 employees
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/myj0/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="gradient" className="px-8 py-6 text-lg h-auto">
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">Trusted by 200+ scaling companies</p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Built for Growing Complexity</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            As your team grows, Jo grows with you—handling the workflows that would otherwise require multiple new hires
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability) => {
              const Icon = capability.icon
              return (
                <Card key={capability.title} className="border-2 hover:border-blue-200 transition-all">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                    <p className="text-gray-600">{capability.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
