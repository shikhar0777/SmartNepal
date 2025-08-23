"use client"

import type { ReactNode } from "react"

interface AccessibleTextProps {
  children: ReactNode
  variant?: "primary" | "light" | "accent" | "highlight"
  shadow?: "soft" | "gradient" | "strong" | "none"
  className?: string
}

export function AccessibleText({
  children,
  variant = "primary",
  shadow = "gradient",
  className = "",
}: AccessibleTextProps) {
  const textColors = {
    primary: "text-qsmart-text-primary",
    light: "text-qsmart-text-light",
    accent: "text-qsmart-text-accent",
    highlight: "text-qsmart-text-highlight",
  }

  const textShadows = {
    soft: { textShadow: "1px 1px 1px rgba(0,0,0,0.3)" },
    gradient: { textShadow: "1px 1px 2px rgba(0,0,0,0.5)" },
    strong: { textShadow: "2px 2px 4px rgba(0,0,0,0.7)" },
    none: {},
  }

  return (
    <span className={`${textColors[variant]} ${className}`} style={textShadows[shadow]}>
      {children}
    </span>
  )
}
