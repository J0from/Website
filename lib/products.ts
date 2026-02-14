export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  features: string[]
  agents: number
  billingCycle: "monthly" | "annual"
  stripePriceId: string
}

// Stripe price IDs (test mode) — maps each plan to its Stripe price
export const STRIPE_PRICE_IDS: Record<string, string> = {
  "starter-monthly": "price_1T0jwaL7UZaS7zcDpOctz8nR",
  "starter-annual": "price_1T0jw4L7UZaS7zcDfaPIRhVt",
  "growth-monthly": "price_1T0jwAL7UZaS7zcD9IHuZqw4",
  "growth-annual": "price_1T0jwFL7UZaS7zcD4MoC1KRo",
  "professional-monthly": "price_1T0jwbL7UZaS7zcDKRGbH99m",
  "professional-annual": "price_1T0jwdL7UZaS7zcD5TayzeAf",
  "enterprise-monthly": "price_1T0jwfL7UZaS7zcDDhZpQQ6q",
  "enterprise-annual": "price_1T0jwhL7UZaS7zcDjFY5Kq1N",
}

// Source of truth for all pricing plans
export const PRODUCTS: Product[] = [
  // Monthly Plans
  {
    id: "starter-monthly",
    name: "Starter Plan",
    description: "All-in-one back office",
    priceInCents: 2500, // $25
    features: ["1 Jo", "Email support", "Basic analytics", "Standard integrations"],
    agents: 1,
    billingCycle: "monthly",
    stripePriceId: STRIPE_PRICE_IDS["starter-monthly"],
  },
  {
    id: "growth-monthly",
    name: "Growth Plan",
    description: "All-in-one back office",
    priceInCents: 7500, // $75
    features: ["3 Jos", "Priority email support", "Advanced analytics", "Custom workflows"],
    agents: 3,
    billingCycle: "monthly",
    stripePriceId: STRIPE_PRICE_IDS["growth-monthly"],
  },
  {
    id: "professional-monthly",
    name: "Professional Plan",
    description: "All-in-one back office",
    priceInCents: 10000, // $100
    features: ["Everything in Growth Plan", "5 Jos", "API access", "24/7 priority support"],
    agents: 5,
    billingCycle: "monthly",
    stripePriceId: STRIPE_PRICE_IDS["professional-monthly"],
  },
  {
    id: "enterprise-monthly",
    name: "Enterprise Plan",
    description: "Advanced automation",
    priceInCents: 15000, // $150
    features: ["Everything in Professional Plan", "8 Jos", "Account manager", "Custom training", "SLA guarantee"],
    agents: 8,
    billingCycle: "monthly",
    stripePriceId: STRIPE_PRICE_IDS["enterprise-monthly"],
  },
  // Annual Plans
  {
    id: "starter-annual",
    name: "Starter Plan",
    description: "All-in-one back office",
    priceInCents: 1900, // $19/month
    features: ["1 Jo", "Email support", "Basic analytics", "Standard integrations"],
    agents: 1,
    billingCycle: "annual",
    stripePriceId: STRIPE_PRICE_IDS["starter-annual"],
  },
  {
    id: "growth-annual",
    name: "Growth Plan",
    description: "All-in-one back office",
    priceInCents: 5700, // $57/month (billed $684 annually)
    features: ["3 Jos", "Priority email support", "Advanced analytics", "Custom workflows"],
    agents: 3,
    billingCycle: "annual",
    stripePriceId: STRIPE_PRICE_IDS["growth-annual"],
  },
  {
    id: "professional-annual",
    name: "Professional Plan",
    description: "All-in-one back office",
    priceInCents: 7500, // $75/month (billed $900 annually)
    features: ["Everything in Growth Plan", "5 Jos", "API access", "24/7 priority support"],
    agents: 5,
    billingCycle: "annual",
    stripePriceId: STRIPE_PRICE_IDS["professional-annual"],
  },
  {
    id: "enterprise-annual",
    name: "Enterprise Plan",
    description: "Advanced automation",
    priceInCents: 11200, // $112/month (billed $1344 annually)
    features: ["Everything in Professional Plan", "8 Jos", "Account manager", "Custom training", "SLA guarantee"],
    agents: 8,
    billingCycle: "annual",
    stripePriceId: STRIPE_PRICE_IDS["enterprise-annual"],
  },
]
