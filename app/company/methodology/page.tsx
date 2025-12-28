import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Search, Lightbulb, Rocket, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { MethodologyComparisonChart } from "@/components/methodology-comparison-chart"

export const metadata: Metadata = {
  title: "Methodology | Jo Framework",
  description: "Explore Jo: Input -> Throughput -> Output",
}

export default function MethodologyPage() {
  const inputFactors = [
    {
      factor: "Knowledge & Skills",
      definition: "The expertise, training, and competencies required to perform the job effectively.",
      impact: "Augmentation reduces training costs and accelerates onboarding by automating routine knowledge tasks",
    },
    {
      factor: "Regulatory & Compliance",
      definition: "Understanding and adherence to laws, regulations, and organizational policies.",
      impact: "Reduces compliance risk and administrative burden while maintaining human oversight",
    },
    {
      factor: "Communication & Influence",
      definition: "The ability to convey information, persuade stakeholders, and build relationships.",
      impact: "Increases communication efficiency while preserving relationship quality",
    },
    {
      factor: "Problem-Solving Capacity",
      definition: "The cognitive ability to analyze situations, identify solutions, and make decisions.",
      impact: "Expands problem-solving capacity by handling routine analysis, freeing humans for complex challenges",
    },
    {
      factor: "Resources & Tools",
      definition: "The physical, digital, and informational resources needed to complete work.",
      impact: "Optimizes resource utilization and reduces administrative overhead",
    },
  ]

  const throughputFactors = [
    {
      factor: "Decision-Making",
      definition: "The process of evaluating options and choosing courses of action.",
      impact: "Accelerates decision velocity while maintaining quality for critical choices",
    },
    {
      factor: "Information Processing",
      definition: "How data and information are collected, analyzed, and transformed into insights.",
      impact: "Dramatically increases processing capacity and speed while preserving insight quality",
    },
    {
      factor: "Creativity & Innovation",
      definition: "The generation of novel ideas, solutions, and approaches to work.",
      impact: "Expands creative output by automating ideation and iteration",
    },
    {
      factor: "Coordination & Workflow",
      definition: "How tasks are sequenced, dependencies managed, and work orchestrated.",
      impact: "Reduces coordination overhead and improves workflow efficiency",
    },
    {
      factor: "Adaptability & Learning",
      definition: "The ability to adjust to new situations, learn from experience, and improve performance.",
      impact: "Accelerates organizational learning while maintaining strategic flexibility",
    },
  ]

  const outputFactors = [
    {
      factor: "Deliverables",
      definition: "The tangible products, documents, or artifacts produced by the work.",
      impact: "Increases output volume and consistency while maintaining quality for critical deliverables",
    },
    {
      factor: "Service & Support",
      definition: "The assistance, guidance, and problem resolution provided to stakeholders.",
      impact: "Expands service capacity and response speed while improving customer satisfaction",
    },
    {
      factor: "Decisions & Recommendations",
      definition: "The choices made and guidance provided as outcomes of the work.",
      impact: "Increases decision throughput while maintaining quality for high-stakes choices",
    },
    {
      factor: "Performance & Impact",
      definition: "The measurable results and value created by the work.",
      impact: "Multiplies performance by combining human strategic value with machine operational efficiency",
    },
    {
      factor: "Knowledge Transfer",
      definition: "The sharing of expertise, insights, and learning with others.",
      impact: "Scales knowledge transfer while preserving the value of human mentorship",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center">
          <span className="md:hidden">Jo from</span>
          <span className="hidden md:inline">J</span>
          <div className="relative mx-1">
            <Image src="/qubit.png" alt="Qubit" width={16} height={16} className="sm:w-5 sm:h-5 brightness-0" />
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
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 animate-pulse opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 drop-shadow-lg">
            <span className="font-bold">Human + Machine</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
            The framework for optimal division of labor
          </p>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">Input → Throughput → Output</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            We systematically analyze each stage of work to identify the optimal division of labor between humans and
            machines—enhancing performance, reducing costs, and expanding capacity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <Search className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Input</h3>
                <p className="text-gray-700">What's needed to perform the job</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <Lightbulb className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Throughput</h3>
                <p className="text-gray-700">How the work gets done</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <Rocket className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Output</h3>
                <p className="text-gray-700">What the job produces</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Input Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 text-center">Input</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center">
            {" What's Needed to Perform the Job\n"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-fr">
            {inputFactors.map((factor, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all hover:shadow-xl">
                <CardContent className="p-6 flex flex-col h-full text-center items-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <h3 className="text-xl font-bold text-gray-900 text-center">{factor.factor}</h3>
                  </div>
                  <div className="h-28 flex items-center justify-center mb-4">
                    <p className="text-sm text-gray-700 italic leading-relaxed text-center">{factor.definition}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-200 pb-2.5 w-full"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Throughput Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 text-center">Throughput</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center">How the Work Gets Done</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-fr">
            {throughputFactors.map((factor, index) => (
              <Card key={index} className="border-2 hover:border-purple-200 transition-all hover:shadow-xl">
                <CardContent className="p-6 flex flex-col h-full text-center items-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <h3 className="text-xl font-bold text-gray-900 text-center">{factor.factor}</h3>
                  </div>
                  <div className="h-28 flex items-center justify-center mb-4">
                    <p className="text-sm text-gray-700 italic leading-relaxed text-center">{factor.definition}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-200 w-full"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Output Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 text-center">Output</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center">What the Job Produces</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-fr">
            {outputFactors.map((factor, index) => (
              <Card key={index} className="border-2 hover:border-indigo-200 transition-all hover:shadow-xl">
                <CardContent className="p-6 flex flex-col h-full text-center items-center">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <h3 className="text-xl font-bold text-gray-900 text-center">{factor.factor}</h3>
                  </div>
                  <div className="h-28 flex items-center justify-center mb-4">
                    <p className="text-sm text-gray-700 italic leading-relaxed text-center">{factor.definition}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-200 w-full"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Labor Map Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">The Labor Map™</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-base">
            Apply this framework to your organization with detailed job decompositions that identify specific Human +
            Machine collaboration opportunities.
          </p>
        </div>
      </section>

      {/* Methodology Comparison Chart Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <MethodologyComparisonChart />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Ready to Optimize Your Workforce?</h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto text-base">
            Discover how Human + Machine collaboration can transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="hero" asChild>
              <Link href="https://calendly.com/myj0/30min" target="_blank" rel="noopener noreferrer">
                <TrendingUp className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </Link>
            </Button>
            <Button variant="outline" size="hero" asChild>
              <Link href="https://calendly.com/myj0/30min" target="_blank" rel="noopener noreferrer">
                Meet Jo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
