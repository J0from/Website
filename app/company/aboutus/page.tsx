import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Users,
  Zap,
  Target,
  TrendingUp,
  Sparkles,
  Layers,
  Workflow,
  Eye,
  Globe,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Jo | The Future of Human + Machine Collaboration",
  description:
    "Learn about Jo's mission to redefine the future of work by creating a balance between human creativity and machine efficiency through our suite of intelligent digital coworkers.",
}

export default function AboutUsPage() {
  const frameworkSteps = [
    {
      number: 1,
      title: "Discover",
      description:
        "We first map how work is actually getting done in your organization to identify bottlenecks and inefficiencies.",
      icon: Target,
    },
    {
      number: 2,
      title: "Design",
      description:
        "Next, we optimize your workflows and strategically distribute tasks between your team and Jo's digital specialists for maximum efficiency.",
      icon: Users,
    },
    {
      number: 3,
      title: "Deploy",
      description:
        "Finally, we deploy Jo as an intelligent collaborator, continuously monitoring performance and feeding insights back into the system to ensure ongoing improvement.",
      icon: TrendingUp,
    },
  ]

  const coreValues = [
    {
      number: 1,
      title: "Augmentation Over Automation",
      description:
        "We build tools that amplify human potential, not diminish it. Our digital specialists work alongside employees as trusted teammates, handling repetitive tasks so people can focus on what humans do best.",
      icon: Sparkles,
    },
    {
      number: 2,
      title: "Specialization Through Depth",
      description:
        "We reject one-size-fits-all solutions. Every digital coworker we create possesses deep domain expertise for specific roles and industries, delivering an experience that feels custom-built without the custom price tag.",
      icon: Layers,
    },
    {
      number: 3,
      title: "Process Before Technology",
      description:
        "We automate good processes, not broken ones. Through our Discover → Design → Deploy framework, we ensure every implementation improves workflows first, then scales them with precision.",
      icon: Workflow,
    },
    {
      number: 4,
      title: "Trust Through Transparency",
      description:
        "We earn confidence by showing our work. From measurable ROI tracking to clear role definitions, we make our impact visible and our operations understandable.",
      icon: Eye,
    },
    {
      number: 5,
      title: "Democratized Excellence",
      description:
        "Powerful operational capabilities shouldn't be reserved for enterprises alone. We make sophisticated business intelligence accessible to organizations of every size, from solopreneurs to global corporations.",
      icon: Globe,
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Human + Machine</h1>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            A Blueprint for Optimized Augmentation
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our proprietary framework ensures your organization achieves the perfect balance between human expertise and
            machine efficiency
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frameworkSteps.map((step) => (
              <Card
                key={step.number}
                className="relative overflow-hidden border-2 hover:border-blue-200 transition-all hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                    {step.number}
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To empower businesses by building specialized digital coworkers that handle routine operational work,
            freeing human employees to focus on creativity, judgment, and strategic thinking.
          </p>
        </div>
      </section>

      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 text-center">Our Vision</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            To become the global standard for intelligent business operations—recognized worldwide as the platform that
            fundamentally transforms how work gets done by seamlessly blending human expertise with machine capability.
          </p>
        </div>
      </section>

      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900">Our Core Values</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            The principles that guide every decision we make and every solution we build
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {coreValues.slice(0, 3).map((value) => (
              <Card
                key={value.number}
                className="relative overflow-hidden border-2 hover:border-blue-200 transition-all hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                    {value.number}
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreValues.slice(3).map((value) => (
              <Card
                key={value.number}
                className="relative overflow-hidden border-2 hover:border-blue-200 transition-all hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                    {value.number}
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Our Strategy Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">Dual Approach</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We serve businesses of all sizes with tailored solutions that meet their unique needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Enterprise Card */}
            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We target highly regulated enterprises to secure high-value contracts and build a robust, defensible
                  position of security and compliance features.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">SOC 2, HIPAA, and industry-specific compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dedicated success managers and priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Custom integrations and advanced security features</span>
                  </li>
                </ul>
                <Button variant="secondary" size="default" asChild>
                  <Link href="/enterprise">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* SMB Card */}
            <Card className="border-2 hover:border-purple-200 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Small & Medium-Sized Businesses</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We cultivate a broad base of SMBs with a low-friction onboarding process at scale, gather invaluable
                  data, and validate product-market fit.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Simple, transparent pricing starting at $25/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Self-service onboarding in minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No long-term contracts or hidden fees</span>
                  </li>
                </ul>
                <Button variant="secondary" size="default" asChild>
                  <Link href="/solutions/smb/purchase">
                    See Pricing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Join Us on the Journey</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
            We help businesses of all sizes unlock a new era of productivity and innovation.
          </p>
          <Button variant="secondary" size="hero" asChild>
            <Link href="/solutions/smb/purchase">
              Get Jo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
