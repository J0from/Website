import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Building2, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Solutions for Every Business | Jo: Human + Machine",
  description:
    "Discover Jo's intelligent automation solutions for SMBs, enterprises, and consultants. Choose the right digital workforce for your business size and industry needs.",
  openGraph: {
    title: "Solutions for Every Business | Jo: Human + Machine",
    description:
      "Discover Jo's intelligent automation solutions for SMBs, enterprises, and consultants. Choose the right digital workforce for your business size and industry needs.",
    url: "https://jofrom.io/solutions",
    siteName: "Jo: Human + Machine",
    type: "website",
  },
}

export default function SolutionsPage() {
  const solutions = [
    {
      href: "/solutions/smb",
      icon: Building2,
      title: "SMB",
      description: "All-in-one back office for growing businesses (2-200 employees)",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      href: "/enterprise",
      icon: Building,
      title: "Enterprise",
      description: "Advanced automation for complex organizations",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      href: "/solutions/consulting",
      icon: Users,
      title: "Consultants",
      description: "Deliver more value, do less admin",
      gradient: "from-orange-500 to-red-500",
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
          <Link href="/solutions/smb">
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
          <h1 className="font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-4xl">
            Every Stage of Growth
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Jo adapts to your business</p>
        </div>
      </section>

      {/* Solution Cards Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon
              return (
                <Link key={solution.href} href={solution.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group cursor-pointer">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{solution.description}</p>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
