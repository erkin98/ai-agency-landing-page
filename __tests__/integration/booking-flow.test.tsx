import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from '@/app/page'

// Mock console.log for form submission testing
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {})

describe('Complete Booking Flow Integration', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear()
    render(<Page />)
  })

  afterAll(() => {
    mockConsoleLog.mockRestore()
  })

  it('completes the full booking journey from hero section', async () => {
    const user = userEvent.setup()
    
    // Step 1: Click main CTA button
    const heroBookingButton = screen.getByText('Book Your Free Strategy Call')
    await user.click(heroBookingButton)
    
    // Step 2: Verify modal opens and select date
    await waitFor(() => {
      expect(screen.getAllByText('Book Your Free Strategy Call')[0]).toBeInTheDocument()
    })
    
    expect(screen.getByText('Select a Date')).toBeInTheDocument()
    
    // Find and click a future weekday
    const dateButtons = screen.getAllByRole('button')
    const futureDateButton = dateButtons.find(button => 
      button.textContent?.includes('15') && 
      !button.disabled
    )
    
    if (futureDateButton) {
      await user.click(futureDateButton)
      
      // Step 3: Select time slot
      await waitFor(() => {
        expect(screen.getByText('Select a Time')).toBeInTheDocument()
      })
      
      await user.click(screen.getByText('2:00 PM'))
      
      // Step 4: Fill contact form
      await waitFor(() => {
        expect(screen.getByText('Confirm Your Details')).toBeInTheDocument()
      })
      
      await user.type(screen.getByLabelText(/name/i), 'Jane Smith')
      await user.type(screen.getByLabelText(/email/i), 'jane@company.com')
      await user.type(screen.getByLabelText(/phone/i), '+1 555 987 6543')
      await user.type(screen.getByLabelText(/company/i), 'Tech Startup Inc')
      await user.type(screen.getByLabelText(/challenges/i), 'We need to automate our customer service and lead qualification process')
      
      // Step 5: Submit form
      await user.click(screen.getByText('Confirm Booking'))
      
      // Step 6: Verify success screen
      await waitFor(() => {
        expect(screen.getByText('Booking Request Submitted!')).toBeInTheDocument()
        expect(screen.getByText('Thank you, Jane Smith! We\'ve received your request for a strategy call.')).toBeInTheDocument()
      })
      
      // Step 7: Verify form data was submitted correctly
      expect(mockConsoleLog).toHaveBeenCalledWith(
        'Booking submitted:',
        expect.objectContaining({
          name: 'Jane Smith',
          email: 'jane@company.com',
          phone: '+1 555 987 6543',
          company: 'Tech Startup Inc',
          message: 'We need to automate our customer service and lead qualification process'
        })
      )
    }
  })

  it('allows booking from navigation menu', async () => {
    const user = userEvent.setup()
    
    // Click navigation booking button
    const navButtons = screen.getAllByText('Book a Call')
    const navBookingButton = navButtons[0] // First one should be navigation
    
    await user.click(navBookingButton)
    
    await waitFor(() => {
      expect(screen.getByText('Book Your Free Strategy Call')).toBeInTheDocument()
    })
    
    expect(screen.getByText('Select a Date')).toBeInTheDocument()
  })

  it('allows booking from about section', async () => {
    const user = userEvent.setup()
    
    // Navigate to about section first
    const aboutLink = screen.getByRole('link', { name: /about/i })
    await user.click(aboutLink)
    
    // Find and click the booking button in about section
    const scheduleButton = screen.getByText('Schedule Your Free Call')
    await user.click(scheduleButton)
    
    await waitFor(() => {
      expect(screen.getByText('Book Your Free Strategy Call')).toBeInTheDocument()
    })
  })

  it('allows booking from final CTA section', async () => {
    const user = userEvent.setup()
    
    // Scroll to and click final CTA
    const finalCtaButton = screen.getByText('Book Your Free Strategy Call Now')
    await user.click(finalCtaButton)
    
    await waitFor(() => {
      expect(screen.getByText('Book Your Free Strategy Call')).toBeInTheDocument()
    })
  })

  it('handles navigation between sections correctly', async () => {
    const user = userEvent.setup()
    
    // Test "See Our Work" button navigation
    const seeWorkButton = screen.getByRole('link', { name: /see our work/i })
    expect(seeWorkButton).toHaveAttribute('href', '#services')
    
    // Test navigation menu links
    const servicesLink = screen.getByRole('link', { name: /services/i })
    const aboutLink = screen.getByRole('link', { name: /about/i })
    const faqLink = screen.getByRole('link', { name: /faq/i })
    
    expect(servicesLink).toHaveAttribute('href', '#services')
    expect(aboutLink).toHaveAttribute('href', '#about')
    expect(faqLink).toHaveAttribute('href', '#faq')
  })

  it('handles contact links correctly', async () => {
    const user = userEvent.setup()
    
    // Test email link
    const emailLink = screen.getByRole('link', { name: /hello@aisolutionspro.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@aisolutionspro.com')
    
    // Test phone link
    const phoneLink = screen.getByRole('link', { name: /\+1 \(555\) 123-4567/i })
    expect(phoneLink).toHaveAttribute('href', 'tel:+15551234567')
  })

  it('validates the complete page structure for conversion optimization', () => {
    // Verify key conversion elements are present
    expect(screen.getByText('Scale Your Business with')).toBeInTheDocument()
    expect(screen.getByText('AI Automation')).toBeInTheDocument()
    
    // Multiple booking CTAs throughout the page
    const bookingButtons = screen.getAllByText(/book/i)
    expect(bookingButtons.length).toBeGreaterThan(3)
    
    // Social proof elements
    expect(screen.getByText('Trusted by Growing Businesses')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Mike Chen')).toBeInTheDocument()
    expect(screen.getByText('Lisa Rodriguez')).toBeInTheDocument()
    
    // Value propositions
    expect(screen.getByText('AI Voice Agents')).toBeInTheDocument()
    expect(screen.getByText('Lead Generation AI')).toBeInTheDocument()
    expect(screen.getByText('Process Automation')).toBeInTheDocument()
    
    // Trust indicators
    expect(screen.getByText('5+ Years AI Experience')).toBeInTheDocument()
    expect(screen.getByText('50+ Successful Projects')).toBeInTheDocument()
    expect(screen.getByText('30-Day Money-Back Guarantee')).toBeInTheDocument()
    
    // FAQ section for objection handling
    expect(screen.getByText(/How long does it take to implement/)).toBeInTheDocument()
    expect(screen.getByText(/What kind of ROI can I expect/)).toBeInTheDocument()
  })

  it('tests responsive design elements', () => {
    // Check for responsive classes that ensure mobile optimization
    const heroSection = screen.getByText('Scale Your Business with').closest('section')
    expect(heroSection).toHaveClass('px-4', 'sm:px-6', 'lg:px-8')
    
    // Check for responsive typography
    const mainHeading = screen.getByText('Scale Your Business with')
    expect(mainHeading).toHaveClass('text-4xl', 'md:text-6xl')
    
    // Check for responsive grid layouts
    const servicesGrid = document.querySelector('.grid.md\\:grid-cols-3')
    expect(servicesGrid).toBeInTheDocument()
  })
}) 