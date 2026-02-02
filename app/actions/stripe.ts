"use server"

import { stripe } from "@/lib/stripe"
import { PRODUCTS } from "@/lib/products"

export async function startCheckoutSession(productId: string) {
  if (!stripe) {
    throw new Error("Stripe is not configured. Please set the STRIPE_SECRET_KEY environment variable.")
  }

  const product = PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    throw new Error(`Product with id "${productId}" not found`)
  }

  // For annual plans, calculate the yearly amount
  const amount = product.billingCycle === "annual" ? product.priceInCents * 12 : product.priceInCents

  // Create Checkout Sessions
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: amount,
          recurring: product.billingCycle === "monthly" ? { interval: "month" } : { interval: "year" },
        },
        quantity: 1,
      },
    ],
    mode: "subscription",
  })

  return session.client_secret
}
