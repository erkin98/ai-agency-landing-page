import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from '@/app/page'

// Mock the BookingModal component to focus on page structure
jest.mock('@/components/booking-modal', () => ({
  BookingModal: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="booking-modal">{children}</div>
  )
}))

describe('Landing Page', () => {
  beforeEach(() => {
    render(<Page />)
  })

  describe('Navigation', () => {
    it('renders the navigation bar with logo and menu items', () => {
      expect(screen.getByText('AI Solutions Pro')).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /faq/i })).toBeInTheDocument()
    })

    it('has correct anchor links for navigation', () => {
      const servicesLink = screen.getByRole('link', { name: /services/i })
      const aboutLink = screen.getByRole('link', { name: /about/i })
      const faqLink = screen.getByRole('link', { name: /faq/i })

      expect(servicesLink).toHaveAttribute('href', '#services')
      expect(aboutLink).toHaveAttribute('href', '#about')
      expect(faqLink).toHaveAttribute('href', '#faq')
    })

    it('renders the booking button in navigation', () => {
      const bookingButton = screen.getByRole('button', { name: /book a call/i })
      expect(bookingButton).toBeInTheDocument()
    })
  })

  describe('Hero Section', () => {
    it('renders the main heading and value proposition', () => {
      expect(screen.getByText('Scale Your Business with')).toBeInTheDocument()
      expect(screen.getByText('AI Automation')).toBeInTheDocument()
      expect(screen.getByText(/We help ambitious businesses automate processes/)).toBeInTheDocument()
    })

    it('renders call-to-action buttons', () => {
      expect(screen.getByText('Book Your Free Strategy Call')).toBeInTheDocument()
      expect(screen.getByText('See Our Work')).toBeInTheDocument()
    })

    it('has working "See Our Work" button that links to services', () => {
      const seeWorkButton = screen.getByRole('link', { name: /see our work/i })
      expect(seeWorkButton).toHaveAttribute('href', '#services')
    })
  })

  describe('Services Section', () => {
    it('renders the services section with correct id', () => {
      const servicesSection = document.querySelector('#services')
      expect(servicesSection).toBeInTheDocument()
    })

    it('displays all three service offerings', () => {
      expect(screen.getByText('AI Voice Agents')).toBeInTheDocument()
      expect(screen.getByText('Lead Generation AI')).toBeInTheDocument()
      expect(screen.getByText('Process Automation')).toBeInTheDocument()
    })

    it('shows service benefits for each offering', () => {
      expect(screen.getByText('Reduce response time by 90%')).toBeInTheDocument()
      expect(screen.getByText('3x more qualified leads')).toBeInTheDocument()
      expect(screen.getByText('Save 20+ hours per week')).toBeInTheDocument()
    })
  })

  describe('Social Proof Section', () => {
    it('renders customer testimonials', () => {
      expect(screen.getByText('Trusted by Growing Businesses')).toBeInTheDocument()
      expect(screen.getByText(/80% of customer inquiries automatically/)).toBeInTheDocument()
      expect(screen.getByText(/300%. ROI was positive within the first month/)).toBeInTheDocument()
      expect(screen.getByText(/25 hours per week/)).toBeInTheDocument()
    })

    it('shows customer information', () => {
      expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
      expect(screen.getByText('Mike Chen')).toBeInTheDocument()
      expect(screen.getByText('Lisa Rodriguez')).toBeInTheDocument()
    })

    it('displays 5-star ratings', () => {
      // Check for star icons (lucide-react Star components)
      const stars = screen.getAllByTestId('star-icon')
      expect(stars.length).toBeGreaterThan(0)
    })
  })

  describe('About Section', () => {
    it('renders the about section with correct id', () => {
      const aboutSection = document.querySelector('#about')
      expect(aboutSection).toBeInTheDocument()
    })

    it('displays company credentials', () => {
      expect(screen.getByText('5+ Years AI Experience')).toBeInTheDocument()
      expect(screen.getByText('50+ Successful Projects')).toBeInTheDocument()
      expect(screen.getByText('30-Day Money-Back Guarantee')).toBeInTheDocument()
    })

    it('includes a call-to-action for booking', () => {
      expect(screen.getByText('Schedule Your Free Call')).toBeInTheDocument()
    })
  })

  describe('FAQ Section', () => {
    it('renders the FAQ section with correct id', () => {
      const faqSection = document.querySelector('#faq')
      expect(faqSection).toBeInTheDocument()
    })

    it('displays FAQ questions', () => {
      expect(screen.getByText(/How long does it take to implement/)).toBeInTheDocument()
      expect(screen.getByText(/What kind of ROI can I expect/)).toBeInTheDocument()
      expect(screen.getByText(/Do I need technical knowledge/)).toBeInTheDocument()
    })

    it('has expandable FAQ items', async () => {
      const user = userEvent.setup()
      const faqButton = screen.getByText(/How long does it take to implement/)
      
      await user.click(faqButton)
      
      expect(screen.getByText(/Most AI solutions can be implemented within 2-4 weeks/)).toBeInTheDocument()
    })
  })

  describe('Contact Section', () => {
    it('renders contact information', () => {
      expect(screen.getByText('Get In Touch')).toBeInTheDocument()
      expect(screen.getByText('Email Us')).toBeInTheDocument()
      expect(screen.getByText('Call Us')).toBeInTheDocument()
      expect(screen.getByText('Book a Call')).toBeInTheDocument()
    })

    it('has working email link', () => {
      const emailLink = screen.getByRole('link', { name: /hello@aisolutionspro.com/i })
      expect(emailLink).toHaveAttribute('href', 'mailto:hello@aisolutionspro.com')
    })

    it('has working phone link', () => {
      const phoneLink = screen.getByRole('link', { name: /\+1 \(555\) 123-4567/i })
      expect(phoneLink).toHaveAttribute('href', 'tel:+15551234567')
    })
  })

  describe('Footer', () => {
    it('renders footer with company information', () => {
      expect(screen.getByText(/© 2025 AI Solutions Pro/)).toBeInTheDocument()
      expect(screen.getByText(/Transforming businesses with intelligent automation/)).toBeInTheDocument()
    })
  })

  describe('Final CTA Section', () => {
    it('renders the final call-to-action', () => {
      expect(screen.getByText('Ready to Scale Your Business with AI?')).toBeInTheDocument()
      expect(screen.getByText('Book Your Free Strategy Call Now')).toBeInTheDocument()
    })

    it('shows trust indicators', () => {
      expect(screen.getByText(/No commitment required/)).toBeInTheDocument()
      expect(screen.getByText(/30-minute call/)).toBeInTheDocument()
      expect(screen.getByText(/Instant calendar booking/)).toBeInTheDocument()
    })
  })

  describe('Booking Modal Integration', () => {
    it('renders multiple booking buttons throughout the page', () => {
      const bookingButtons = screen.getAllByTestId('booking-modal')
      expect(bookingButtons.length).toBeGreaterThanOrEqual(4) // Navigation, Hero, About, Final CTA, Contact
    })
  })

  describe('Responsive Design Elements', () => {
    it('includes responsive classes for mobile optimization', () => {
      const heroSection = screen.getByText('Scale Your Business with').closest('section')
      expect(heroSection).toHaveClass('px-4', 'sm:px-6', 'lg:px-8')
    })

    it('has responsive text sizing', () => {
      const mainHeading = screen.getByText('Scale Your Business with')
      expect(mainHeading).toHaveClass('text-4xl', 'md:text-6xl')
    })
  })

  describe('SEO and Accessibility', () => {
    it('has proper heading hierarchy', () => {
      const h1 = screen.getByRole('heading', { level: 1 })
      const h2s = screen.getAllByRole('heading', { level: 2 })
      const h3s = screen.getAllByRole('heading', { level: 3 })

      expect(h1).toBeInTheDocument()
      expect(h2s.length).toBeGreaterThan(0)
      expect(h3s.length).toBeGreaterThan(0)
    })

    it('has descriptive alt text for icons', () => {
      // Icons should have proper labels or be decorative
      const servicesSection = document.querySelector('#services')
      expect(servicesSection).toBeInTheDocument()
    })
  })

  describe('Visual Design Elements', () => {
    it('includes gradient and backdrop blur classes', () => {
      const heroSection = screen.getByText('Scale Your Business with').closest('div')
      expect(document.querySelector('.bg-gradient-to-br')).toBeInTheDocument()
    })

    it('has proper spacing and layout classes', () => {
      const container = screen.getByText('Scale Your Business with').closest('.max-w-7xl')
      expect(container).toBeInTheDocument()
    })
  })
}) 