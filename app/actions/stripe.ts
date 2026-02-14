"use server"

import { stripe } from "@/lib/stripe"
import { PRODUCTS } from "@/lib/products"

export async function startCheckoutSession(productId: string): Promise<string> {
  if (!stripe) {
    throw new Error("Stripe is not configured. Please set the STRIPE_SECRET_KEY environment variable.")
  }

  const product = PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    throw new Error(`Product with id "${productId}" not found`)
  }

  // Extract tier and billing from productId (e.g. "growth-annual")
  const [tier, billing] = productId.split("-")
  const onboardingUrl = process.env.NEXT_PUBLIC_ONBOARDING_URL || "http://localhost:3000"
  const returnUrl = `${onboardingUrl}/onboarding?tier=${tier}&billing=${billing}&paid=true&session_id={CHECKOUT_SESSION_ID}`

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "always",
    return_url: returnUrl,
    payment_method_types: ["card"],
    line_items: [
      {
        price: product.stripePriceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
  })

  if (!session.client_secret) {
    throw new Error("Failed to create checkout session: client_secret is null")
  }

  return session.client_secret
}
