"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function EnterpriseHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white py-20 sm:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight text-balance">
            Human + Machine
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto font-light text-pretty">
            Transform your business operations with intelligent automation that amplifies human capabilities across
            every department.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => window.open("https://calendly.com/myj0/30min", "_blank")}
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold shadow-xl"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={() => window.open("https://calendly.com/myj0/30min", "_blank")}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 h-auto"
            >
              Download Whitepaper
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
