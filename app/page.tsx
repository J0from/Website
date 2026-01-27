import type { Metadata } from "next"
import { HomePageClient } from "./HomePageClient"

export const metadata: Metadata = {
  title: "Human + Machine",
  description:
    "Fix labor bottlenecks in highly regulated industries with digital employees. Stay compliant, cut costs, and handle repetitive tasks in healthcare, manufacturing, energy, and food processing.",
  keywords: [
    "human machine balance",
    "labor shortage solutions",
    "compliance solutions",
    "regulated industries",
    "digital employees",
    "healthcare solutions",
    "manufacturing solutions",
    "compliance tools",
    "workforce management",
    "labor cost reduction",
  ],
  openGraph: {
    title: "Jo: Human + Machine for Regulated Industries",
    description: "Fix labor bottlenecks with digital employees. Stay compliant, cut costs, and get the work done.",
    type: "website",
    url: "https://www.jofrom.io",
    siteName: "Jo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jo - Human + Machine Balance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jo: Human + Machine for Regulated Industries",
    description: "Fix labor bottlenecks with digital employees. Stay compliant, cut costs, and get the work done.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.jofrom.io",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
