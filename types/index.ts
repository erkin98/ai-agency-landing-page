import type { LucideIcon } from "lucide-react"

/**
 * Core Types for AI Solutions Pro Landing Page
 */

// ============ Service Types ============
export interface ServiceBenefit {
  text: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  benefits: ServiceBenefit[]
  gradient: GradientVariant
}

// ============ Testimonial Types ============
export interface Testimonial {
  id: string
  rating: number
  quote: string
  author: {
    name: string
    role: string
    company: string
  }
  gradient: GradientVariant
}

// ============ FAQ Types ============
export interface FAQItem {
  id: string
  question: string
  answer: string
}

// ============ Contact Types ============
export interface ContactMethod {
  id: string
  title: string
  value: string
  href: string
  icon: LucideIcon
  gradient: GradientVariant
}

// ============ Navigation Types ============
export interface NavLink {
  label: string
  href: string
}

// ============ Company Info Types ============
export interface CompanyCredential {
  title: string
  description: string
}

// ============ Booking Form Types ============
export interface BookingFormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

export type BookingStep = 1 | 2 | 3 | "success"

export interface BookingState {
  selectedDate: Date | undefined
  selectedTime: string
  step: BookingStep
  formData: BookingFormData
}

// ============ Styling Types ============
export type GradientVariant = 
  | "purple-fuchsia"
  | "fuchsia-pink"
  | "violet-purple"
  | "green-emerald"

// ============ Section Props Types ============
export interface SectionProps {
  className?: string
  id?: string
}

// ============ Utility Types ============
export type TimeSlot = string
