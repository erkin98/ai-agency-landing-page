import {
  Navigation,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
  AboutSection,
  FAQSection,
  FinalCTASection,
  ContactSection,
  Footer,
  BackgroundEffects,
} from "@/components/sections"

/**
 * AI Solutions Pro Landing Page
 * 
 * A modern, conversion-focused landing page for an AI automation agency.
 * 
 * Architecture:
 * - Componentized sections for maintainability
 * - Centralized data/constants for easy content updates
 * - Type-safe interfaces for all data structures
 * - Reusable shared components for consistency
 * - Custom hooks for complex state management
 */
export default function AIAgencyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Background Visual Effects */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Social Proof / Testimonials */}
      <TestimonialsSection />

      {/* About Section */}
      <AboutSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final Call-to-Action */}
      <FinalCTASection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
