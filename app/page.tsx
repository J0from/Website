import type { Metadata } from "next"
import { HomePageClient } from "./HomePageClient"

export const metadata: Metadata = {
  title: "Human + Machine | Jo from",
  description:
    "We staff Human + Machines to fix labor bottlenecks in Healthcare, Energy, and Manufacturing - highly regulated, thin margin, and essential jobs.",
  keywords: [
    "human machine balance",
    "staffing firm",
    "labor bottleneck",
    "healthcare staffing",
    "energy staffing",
    "manufacturing staffing",
    "compliance solutions",
    "regulated industries",
    "workforce solutions",
  ],
  openGraph: {
    title: "Jo from | Human + Machine Staffing",
    description: "We staff Human + Machines to fix labor bottlenecks in Healthcare, Energy, and Manufacturing - highly regulated, thin margin, and essential jobs.",
    type: "website",
    url: "https://www.jofrom.io",
    siteName: "Jo from",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jo from - Human + Machine Staffing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jo from | Human + Machine Staffing",
    description: "We staff Human + Machines to fix labor bottlenecks in Healthcare, Energy, and Manufacturing - highly regulated, thin margin, and essential jobs.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.jofrom.io",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
