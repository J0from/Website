"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  Users,
  BarChart3,
  Lock,
  FileCheck,
  Layers,
  Target,
  Zap,
  Search,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export function MethodologyPageClient() {
  const principles = [
    {
      icon: Layers,
      title: "Structure Precedes Execution",
      description: "Labor cannot be optimized until it is structurally defined.",
    },
    {
      icon: Lock,
      title: "Accountability is Not Transferable",
      description: "Execution can move; ownership does not.",
    },
    {
      icon: Shield,
      title: "Constraints are First-Class Inputs",
      description: "Regulation, safety, audit, and risk define the feasible solution space.",
    },
    {
      icon: FileCheck,
      title: "Explainability is Mandatory",
      description: "Every allocation decision must be traceable and auditable.",
    },
  ]

  const phases = ["Initiate", "Acquire", "Configure", "Validate", "Process", "Observe", "Adjust", "Complete"]

  const outputs = [
    { icon: BarChart3, text: "End-to-end labor execution map" }, { icon: Users, text: "Human + machine capacity plan" }, { icon: Shield, text: "Compliance-safe augmentation roadmap" }, { icon: FileCheck, text: "Audit-ready evidence trail" }, { icon: Zap, text: "Cost savings and risk mitigation analysis" }, { icon: Target, text: "Cross-functional impact analysis" },
  ]

  const layers = [
    {
      num: 1,
      title: "Organization",
      subtitle: "What the company does",
      description: "Defines operating boundaries, scale classification, regulatory constraints, and risk thresholds.",
      badge: "Logic",
      badgeColor: "bg-slate-900",
      borderColor: "border-blue-600",
      bgGradient: "from-blue-50 to-purple-50",
      numBg: "bg-blue-600",
    },
    {
      num: 2,
      title: "Strata",
      subtitle: "3D labor framework",
      description:
        "Maps authority (vertical), function (horizontal), and breadth/depth (scalar) to structural positions.",
      badge: "Logic",
      badgeColor: "bg-slate-900",
      borderColor: "border-purple-600",
      bgGradient: "from-purple-50 to-blue-50",
      numBg: "bg-purple-600",
    },
    {
      num: 3,
      title: "Role",
      subtitle: "Outcomes to deliver",
      description: "Establishes ownership, accountability boundaries, human requirements, and non-transferable duties.",
      badge: "STAYS HUMAN",
      badgeColor: "bg-gradient-to-r from-blue-600 to-purple-600",
      borderColor: "border-blue-600",
      bgGradient: "from-blue-50 to-purple-50",
      numBg: "bg-gradient-to-r from-blue-600 to-purple-600",
    },
    {
      num: 4,
      title: "Task",
      subtitle: "How work gets done",
      description:
        "Contains execution units with role decomposition, enabling human/Jo allocation and hybrid workflows.",
      badge: "Jo",
      badgeColor: "bg-green-600",
      borderColor: "border-green-600",
      bgGradient: "from-green-50 to-blue-50",
      numBg: "bg-green-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 animate-pulse opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            LABOR MAP<sup className="text-2xl">™</sup>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-4">Precision Labor Engineering for Regulated Operations</p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A systematic framework for allocating work between people and machines—without breaking compliance, control,
            or accountability.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Built for Regulated Industries
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Where constrained labor supply meets high stakes and regulatory oversight
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Constrained Labor Supply</h3>
                <p className="text-gray-600">Not enough people to do all the work that needs to be done.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">High Cost of Failure</h3>
                <p className="text-gray-600">Mistakes create significant financial, legal, or safety consequences.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Regulatory Oversight</h3>
                <p className="text-gray-600">Operations must satisfy external compliance requirements and audits.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Design Principles */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">Design Principles</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The system is governed by invariants that ensure compliance, accountability, and explainability
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                      <p className="text-gray-600">{principle.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Four Layers - Hierarchical Structure */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">Hierarchical Structure</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Each layer constrains the layer below — ensuring compliance flows from top to bottom
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {layers.map((layer) => (
              <Card
                key={layer.num}
                className={`border-2 ${layer.borderColor} bg-gradient-to-br ${layer.bgGradient} hover:shadow-lg transition-shadow`}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 ${layer.numBg} rounded-full flex items-center justify-center text-white font-bold`}
                    >
                      {layer.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{layer.title}</h3>
                      <p className="text-sm text-gray-700">{layer.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{layer.description}</p>
                  <span
                    className={`inline-block px-3 py-1 ${layer.badgeColor} text-white text-sm font-medium rounded-full`}
                  >
                    {layer.badge}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Insight */}
          <Card className="mt-8 border-2 border-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 max-w-4xl mx-auto">
            <CardContent className="p-6 text-center text-white">
              <p className="text-xl font-bold mb-2">The Key to Compliance</p>
              <p className="text-lg">
                Constraints flow downward. Accountability stays at Role. Execution flexibility exists only at Task.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Our Framework Section - BEFORE Decompisition*/}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">Our Framework</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Fast Insight, Practical Plans, Real Operational Change
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Discovery */}
            <Card className="border-2 hover:border-blue-600 transition-all hover:shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">Step 1</span>
                    <h3 className="text-xl font-bold text-gray-900">Discovery</h3>
                  </div>
                </div>
                <p className="text-blue-700 font-semibold mb-3">Discover the problem</p>
                <p className="text-gray-600 leading-relaxed">
                  We map your organization's structure, identify who owns each outcome, and pinpoint where work is
                  breaking down or creating bottlenecks.
                </p>
              </CardContent>
            </Card>

            {/* Design */}
            <Card className="border-2 hover:border-purple-600 transition-all hover:shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">Step 2</span>
                    <h3 className="text-xl font-bold text-gray-900">Design</h3>
                  </div>
                </div>
                <p className="text-purple-700 font-semibold mb-3">Design the fix</p>
                <p className="text-gray-600 leading-relaxed">
                  We figure out which tasks people must do and which machines can handle, creating a detailed plan that
                  shows cost savings, reduces risk, and maintains compliance.
                </p>
              </CardContent>
            </Card>

            {/* Deploy */}
            <Card className="border-2 hover:border-green-600 transition-all hover:shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-green-600 uppercase tracking-wide">Step 3</span>
                    <h3 className="text-xl font-bold text-gray-900">Deploy</h3>
                  </div>
                </div>
                <p className="text-green-700 font-semibold mb-3">Deploy the solution</p>
                <p className="text-gray-600 leading-relaxed">
                  We put the solution into action with clear controls, live monitoring, and audit trails that prove
                  everything is working correctly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Role Decomposition */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">Role Decomposition</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Every outcome follows a universal execution pattern that enables precise task allocation
          </p>

          <Card className="mb-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-4 sm:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {phases.map((phase, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-3 sm:p-4 text-center"
                  >
                    <div className="text-sm font-bold text-blue-600 mb-1">{index + 1}</div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900">{phase}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  H
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Human</h4>
                <p className="text-gray-600">Requires judgment, dexterity, or regulatory mandate</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  M
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Machine</h4>
                <p className="text-gray-600">Deterministic, high-volume, verifiable</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                  H+M
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Hybrid</h4>
                <p className="text-gray-600">Shared execution with defined handoff points</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* System Outputs / Deliverables */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">What You Get</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Labor Map produces a complete blueprint for human-machine collaboration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {outputs.map((output, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <output.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-base font-medium text-gray-900">{output.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Engineer Your Labor System?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join regulated companies using Labor Map to scale operations without breaking compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-red-500 hover:bg-red-600 text-white h-12 px-8 text-base font-semibold">
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 h-12 px-8 text-base font-semibold bg-transparent"
            >
              Download Whitepaper
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
