"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { EnterpriseHeroSection } from "@/components/enterprise/hero-section"
import { DivisionOfLaborSection } from "@/components/enterprise/division-of-labor"
import { FrameworkSection } from "@/components/enterprise/framework-section"
import { SecuritySection } from "@/components/enterprise/security-section"
import { RegulatedIndustriesSection } from "@/components/enterprise/regulated-industries"
import { IntegrationsSection } from "@/components/enterprise/integrations-section"
import { BenefitsSection } from "@/components/enterprise/benefits-section"
import { Footer } from "@/components/footer"
import { IndustryWorkflowsSection } from "@/components/enterprise/industry-workflows"
import { Logo } from "@/components/logo"
import { EnergyCards } from "@/components/enterprise/energy-cards"
import { FoodCards } from "@/components/enterprise/food-cards"
import { useEffect } from "react"

export default function EnterpriseClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-7xl mx-auto border-b border-slate-100">
        <Link href="/" className="text-xl sm:text-2xl font-bold">
          <span className="md:hidden">Jo from</span>
          <span className="hidden md:inline">
            <Logo width={20} height={20} />
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/">
            <Button variant="ghost" className="gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4">
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              Home
            </Button>
          </Link>
          <Button variant="gradient" size="default" asChild>
            <Link href="/solutions/smb/purchase">
              Get Jo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </nav>

      <EnterpriseHeroSection />

      <section className="py-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-slate-500 mb-8 font-medium tracking-wide uppercase">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
            <Image src="/logos/microsoft.svg" alt="Microsoft" width={140} height={48} className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <Image src="/logos/aws.svg" alt="AWS" width={140} height={48} className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <Image src="/logos/google-cloud.svg" alt="Google Cloud" width={140} height={48} className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <Image src="/logos/salesforce.svg" alt="Salesforce" width={140} height={48} className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <Image src="/logos/stripe.svg" alt="Stripe" width={140} height={48} className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <Image src="/logos/snowflake.svg" alt="Snowflake" width={140} height={48} className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          </div>
        </div>
      </section>

      <DivisionOfLaborSection />
      <FrameworkSection />

      <div className="relative w-full h-80 md:h-[32rem] overflow-hidden mt-20">
        <Image
          src="/images/img-services-emergency-department-banner.avif"
          alt="Healthcare facilities"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-indigo-900/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">Healthcare Excellence</h3>
            <p className="text-lg md:text-xl text-blue-100 font-light">HIPAA Compliant • FDA Ready • HL7 Integration</p>
          </div>
        </div>
      </div>

      <RegulatedIndustriesSection />

      <div className="relative w-full h-80 md:h-[32rem] overflow-hidden mt-20">
        <Image
          src="/images/energy-20and-20infastructure.webp"
          alt="Energy infrastructure"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-indigo-900/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">Energy & Infrastructure</h3>
            <p className="text-lg md:text-xl text-blue-100 font-light">NERC CIP • FERC • Critical Infrastructure</p>
          </div>
        </div>
      </div>

      <EnergyCards />

      <IndustryWorkflowsSection />

      <div className="relative w-full h-80 md:h-[32rem] overflow-hidden mt-20">
        <Image src="/images/food.jpg" alt="Food processing facility" fill className="object-cover" priority={false} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-indigo-900/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">Food & Agriculture</h3>
            <p className="text-lg md:text-xl text-blue-100 font-light">FDA • HACCP • FSMA Certified</p>
          </div>
        </div>
      </div>

      <FoodCards />

      <IntegrationsSection />
      <SecuritySection />
      <BenefitsSection />

      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Ready to Transform?</h2>
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-200">
              Enterprise Solutions
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gradient"
              size="hero"
              onClick={() => window.open("https://calendly.com/myj0/30min", "_blank")}
            >
              Schedule a Demo
            </Button>
            <Button
              size="hero"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900"
              onClick={() => window.open("https://calendly.com/myj0/30min", "_blank")}
            >
              Contact Business Sales
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-slate-700">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-slate-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-slate-400">Enterprise Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">SOC 2</div>
                <div className="text-sm text-slate-400">Type II Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
