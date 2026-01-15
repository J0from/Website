import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function IntegrationsSection() {
  const industries = [
    {
      name: "Food & Beverage",
      emoji: "🍏",
      description: "Traceability, recipe management, and food safety (HACCP)",
      integrations: [
        {
          name: "Infor CloudSuite F&B",
          description: "Specialized ERP for process manufacturing, managing shelf-life and catch-weights",
          popular: true,
        },
        {
          name: "Aptean Food & Beverage",
          description: "Built on Microsoft Dynamics 365, focusing on lot tracing and allergen management",
        },
        {
          name: "NetSuite (Food Edition)",
          description: "Unified platform for inventory, quality, and multi-channel order management",
        },
        { name: "BatchMaster", description: "Formula-based manufacturing and regulatory compliance" },
        {
          name: "Cority / Enablon",
          description: "EHS (Environment, Health, and Safety) and quality standards (ISO-9001)",
        },
      ],
    },
    {
      name: "Healthcare & Life Sciences",
      emoji: "🏥",
      description: "Interoperability and patient data security (HIPAA/GDPR)",
      integrations: [
        {
          name: "Epic / Cerner",
          description: "Leading Electronic Health Record (EHR) systems for patient data integration",
          popular: true,
        },
        {
          name: "Infor Cloverleaf",
          description: "Critical integration engine for clinical data exchange (HL7, FHIR standards)",
        },
        {
          name: "Veeva Systems",
          description: "Industry standard CRM and content management for Life Sciences and Pharma",
        },
        {
          name: "Workday Healthcare",
          description: "Specialized HR and supply chain for hospitals (managing surgical supplies)",
        },
        { name: "ServiceNow Healthcare", description: "Streamlines clinical workflows and medical device maintenance" },
      ],
    },
    {
      name: "Energy & Utilities",
      emoji: "⚡",
      description: "Asset performance, grid management, and sustainability reporting",
      integrations: [
        {
          name: "Oracle Utilities",
          description: "Meter data management, customer billing, and network operations",
          popular: true,
        },
        {
          name: "IFS Cloud",
          description: "Enterprise Asset Management (EAM) for oil rigs, wind farms, and power plants",
        },
        {
          name: "SAP S/4HANA for Energy",
          description: "Specialized modules for upstream/downstream oil and gas operations",
        },
        {
          name: "Enablon",
          description: "ESG (Environmental, Social, and Governance) reporting and carbon footprint tracking",
        },
        { name: "GE Vernova", description: "Grid orchestration and managing renewable energy assets" },
      ],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-sm px-4 py-1">
            Industry-Specific Integrations
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">Built for Your Stack</h2>
          <p className="text-lg text-gray-600 mx-auto max-w-2xl">
            Jo integrates seamlessly with the mission-critical systems in your industry
          </p>
        </div>

        <div className="space-y-16">
          {industries.map((industry) => (
            <div key={industry.name} className="space-y-6">
              {/* Industry Header */}
              <div className="flex items-start gap-4">
                <span className="text-4xl">{industry.emoji}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>

              {/* Integration Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {industry.integrations.map((integration) => (
                  <Card
                    key={integration.name}
                    className="border-2 hover:shadow-lg transition-all hover:border-blue-200 relative group"
                  >
                    <CardContent className="p-5">
                      {integration.popular && (
                        <Badge className="absolute -top-3 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-xs px-3 py-1">
                          MOST POPULAR
                        </Badge>
                      )}
                      <h4 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors">
                        {integration.name}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{integration.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your system? We build custom integrations for enterprise customers.
          </p>
          <a
            href="/company/contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Contact our integration team →
          </a>
        </div>
      </div>
    </section>
  )
}
