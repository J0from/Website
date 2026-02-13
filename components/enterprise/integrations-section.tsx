import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function IntegrationsSection() {
  const integrations = [
    // Cloud & Infrastructure
    { name: "AWS", industry: "Cloud & Infrastructure", popular: true, logo: "/logos/aws.svg", url: "https://aws.amazon.com" },
    { name: "Microsoft", industry: "Cloud & Infrastructure", logo: "/logos/microsoft.svg", url: "https://azure.microsoft.com" },
    { name: "Google Cloud", industry: "Cloud & Infrastructure", logo: "/logos/google-cloud.svg", url: "https://cloud.google.com" },
    // Data & Analytics
    { name: "Snowflake", industry: "Data & Analytics", logo: "/logos/snowflake.svg", url: "https://www.snowflake.com" },
    { name: "Databricks", industry: "Data & Analytics", popular: true, logo: "/logos/databricks.svg", url: "https://www.databricks.com" },
    { name: "Salesforce", industry: "CRM & Sales", logo: "/logos/salesforce.svg", url: "https://www.salesforce.com" },
    // Productivity & Collaboration
    { name: "Slack", industry: "Collaboration", logo: "/logos/slack.svg", url: "https://slack.com" },
    { name: "Notion", industry: "Productivity", logo: "/logos/notion.svg", url: "https://www.notion.so" },
    { name: "Atlassian", industry: "Dev Tools", logo: "/logos/atlassian.svg", url: "https://www.atlassian.com" },
    // Commerce & Payments
    { name: "Stripe", industry: "Payments", popular: true, logo: "/logos/stripe.svg", url: "https://stripe.com" },
    { name: "Shopify", industry: "Commerce", logo: "/logos/shopify.svg", url: "https://www.shopify.com" },
    { name: "HubSpot", industry: "Marketing & CRM", logo: "/logos/hubspot.svg", url: "https://www.hubspot.com" },
    // Support & Communication
    { name: "Zendesk", industry: "Customer Support", logo: "/logos/zendesk.svg", url: "https://www.zendesk.com" },
    { name: "Twilio", industry: "Communications", logo: "/logos/twilio.svg", url: "https://www.twilio.com" },
    { name: "Figma", industry: "Design", logo: "/logos/figma.svg", url: "https://www.figma.com" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-sm px-4 py-1">
            Seamless Integrations
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">Built for Your Stack</h2>
          <p className="text-lg text-gray-500">Connect with the tools your team already uses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => {
            const CardWrapper = integration.url ? 'a' : 'div'
            const cardProps = integration.url ? { href: integration.url, target: "_blank", rel: "noopener noreferrer" } : {}

            return (
              <CardWrapper key={integration.name} {...cardProps} className={integration.url ? "block" : ""}>
                <Card
                  className="border hover:shadow-lg transition-all hover:border-blue-300 relative group h-full bg-white"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {integration.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-xs px-3 py-1 whitespace-nowrap">
                        MOST POPULAR
                      </Badge>
                    )}
                    <div className="w-44 h-24 mb-4 relative rounded-xl bg-gradient-to-br from-slate-50 to-white flex items-center justify-center p-4 group-hover:from-blue-50 group-hover:to-indigo-50 transition-all border border-slate-200 group-hover:border-blue-200">
                      <Image
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        width={192}
                        height={128}
                        className="object-contain max-w-full max-h-full"
                        style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-base leading-tight group-hover:text-blue-600 transition-colors mb-1">
                      {integration.name}
                    </h4>
                    <p className="text-sm text-gray-400">{integration.industry}</p>
                  </CardContent>
                </Card>
              </CardWrapper>
            )
          })}
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
