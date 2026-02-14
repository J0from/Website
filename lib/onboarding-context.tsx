"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

export interface OnboardingState {
    // From Stripe checkout
    tier: string
    billing: string
    stripeSessionId: string

    // From signup
    email: string
    firstName: string
    lastName: string
    company: string

    // From business-type
    businessType: string

    // From agent-selection
    selectedAgents: string[]

    // From integrations
    selectedIntegrations: string[]

    // From contact-info
    role: string
    industry: string
}

const STORAGE_KEY = "jo-onboarding"

const defaultState: OnboardingState = {
    tier: "",
    billing: "",
    stripeSessionId: "",
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    businessType: "",
    selectedAgents: [],
    selectedIntegrations: [],
    role: "",
    industry: "",
}

interface OnboardingContextType {
    state: OnboardingState
    update: (partial: Partial<OnboardingState>) => void
    reset: () => void
}

const OnboardingContext = createContext<OnboardingContextType | null>(null)

function loadFromStorage(): OnboardingState {
    if (typeof window === "undefined") return defaultState
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) return { ...defaultState, ...JSON.parse(raw) }
    } catch {
        // ignore parse errors
    }
    return defaultState
}

function saveToStorage(state: OnboardingState) {
    if (typeof window === "undefined") return
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
        // ignore storage errors
    }
}

export function OnboardingProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<OnboardingState>(defaultState)
    const [hydrated, setHydrated] = useState(false)

    // Hydrate from localStorage on mount
    useEffect(() => {
        setState(loadFromStorage())
        setHydrated(true)
    }, [])

    // Persist to localStorage on every change (after hydration)
    useEffect(() => {
        if (hydrated) {
            saveToStorage(state)
        }
    }, [state, hydrated])

    const update = useCallback((partial: Partial<OnboardingState>) => {
        setState((prev) => ({ ...prev, ...partial }))
    }, [])

    const reset = useCallback(() => {
        setState(defaultState)
        if (typeof window !== "undefined") {
            localStorage.removeItem(STORAGE_KEY)
        }
    }, [])

    return <OnboardingContext.Provider value={{ state, update, reset }}>{children}</OnboardingContext.Provider>
}

export function useOnboarding() {
    const ctx = useContext(OnboardingContext)
    if (!ctx) {
        throw new Error("useOnboarding must be used within an OnboardingProvider")
    }
    return ctx
}
