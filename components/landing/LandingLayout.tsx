"use client"

import type { ReactNode } from "react"

interface LandingLayoutProps {
  children: ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-900">
      {children}
    </div>
  )
}
