import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { GradientVariant } from "@/types"

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Gradient mappings for consistent styling across components
 */
export const GRADIENT_CLASSES: Record<GradientVariant, {
  background: string
  shadow: string
}> = {
  "purple-fuchsia": {
    background: "from-purple-500 to-fuchsia-500",
    shadow: "shadow-purple-500/25",
  },
  "fuchsia-pink": {
    background: "from-fuchsia-500 to-pink-500",
    shadow: "shadow-fuchsia-500/25",
  },
  "violet-purple": {
    background: "from-violet-500 to-purple-500",
    shadow: "shadow-violet-500/25",
  },
  "green-emerald": {
    background: "from-green-500 to-emerald-500",
    shadow: "shadow-green-500/30",
  },
}

/**
 * Get gradient classes for a specific variant
 */
export function getGradientClasses(variant: GradientVariant) {
  return GRADIENT_CLASSES[variant]
}

/**
 * Common style constants for reuse
 */
export const STYLES = {
  // Glass morphism effects
  glass: "bg-white/5 backdrop-blur-xl",
  glassDark: "bg-black/20 backdrop-blur-xl",
  glassCard: "bg-white/5 backdrop-blur-xl border border-purple-500/20",
  
  // Borders
  borderPurple: "border border-purple-500/20",
  borderPurpleHover: "hover:border-purple-400/40",
  
  // Container widths
  container: "max-w-7xl mx-auto",
  containerNarrow: "max-w-4xl mx-auto",
  
  // Section padding
  sectionPadding: "py-16 px-4 sm:px-6 lg:px-8",
  
  // Text gradients
  textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400",
  
  // Primary button gradient
  buttonPrimary: "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 shadow-lg shadow-purple-500/25 border border-purple-400/20",
  
  // Card hover effects
  cardHover: "transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-white/10",
} as const

/**
 * Format a date for display
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

/**
 * Check if a date is a weekday (not Saturday or Sunday)
 */
export function isWeekday(date: Date): boolean {
  const day = date.getDay()
  return day !== 0 && day !== 6
}

/**
 * Check if a date is in the future
 */
export function isFutureDate(date: Date): boolean {
  return date >= new Date(new Date().setHours(0, 0, 0, 0))
}
