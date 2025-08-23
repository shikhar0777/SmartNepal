"use client"

import type { ReactNode } from "react"

interface GradientOverlayProps {
  children: ReactNode
  opacity?: number
  className?: string
}

export function GradientOverlay({ children, opacity = 0.2, className = "" }: GradientOverlayProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black rounded-inherit" style={{ opacity }}></div>

      {/* Content with proper z-index */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
