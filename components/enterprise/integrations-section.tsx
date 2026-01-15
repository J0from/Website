import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function IntegrationsSection() {
  const integrations = [
    // Food & Beverage
    { name: "Infor CloudSuite F&B", industry: "Food & Beverage", popular: true },
    { name: "Aptean Food & Beverage", industry: "Food & Beverage" },
    { name: "NetSuite (Food Edition)", industry: "Food & Beverage" },
    { name: "BatchMaster", industry: "Food & Beverage" },
    { name: "Cority / Enablon", industry: "Food & Beverage" },
    // Healthcare & Life Sciences
    { name: "Epic / Cerner", industry: "Healthcare & Life Sciences", popular: true },
    { name: "Infor Cloverleaf", industry: "Healthcare & Life Sciences" },
    { name: "Veeva Systems", industry: "Healthcare & Life Sciences" },
    { name: "Workday Healthcare", industry: "Healthcare & Life Sciences" },
    { name: "ServiceNow Healthcare", industry: "Healthcare & Life Sciences" },
    // Energy & Utilities
    { name: "Oracle Utilities", industry: "Energy & Utilities", popular: true },
    { name: "IFS Cloud", industry: "Energy & Utilities" },
    { name: "SAP S/4HANA for Energy", industry: "Energy & Utilities" },
    { name: "Enablon", industry: "Energy & Utilities" },
    { name: "GE Vernova", industry: "Energy & Utilities" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-sm px-4 py-1">
            Industry-Specific Integrations
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">Built for Your Stack</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {integrations.map((integration) => (
            <Card
              key={integration.name}
              className="border-2 hover:shadow-lg transition-all hover:border-blue-200 relative group"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                {integration.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-xs px-3 py-1 whitespace-nowrap">
                    MOST POPULAR
                  </Badge>
                )}
                <div className="w-16 h-16 mb-4 relative rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={`/.jpg?key=ohhmj&height=64&width=64&query=${encodeURIComponent(integration.name + " logo")}`}
                    alt={`${integration.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">
                  {integration.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{integration.industry}</p>
              </CardContent>
            </Card>
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
