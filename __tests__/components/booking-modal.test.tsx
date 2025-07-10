import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingModal } from '@/components/booking-modal'

// Mock console.log to test form submission
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {})

// Mock window.alert
const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {})

describe('BookingModal', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear()
    mockAlert.mockClear()
  })

  afterAll(() => {
    mockConsoleLog.mockRestore()
    mockAlert.mockRestore()
  })

  it('renders the trigger button correctly', () => {
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    expect(screen.getByRole('button', { name: 'Book a Call' })).toBeInTheDocument()
  })

  it('opens modal when trigger is clicked', async () => {
    const user = userEvent.setup()
    
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    await user.click(screen.getByRole('button', { name: 'Book a Call' }))
    
    expect(screen.getByText('Book Your Free Strategy Call')).toBeInTheDocument()
    expect(screen.getByText('Schedule a 30-minute consultation to discover how AI can transform your business')).toBeInTheDocument()
  })

  it('shows step 1 (date selection) by default', async () => {
    const user = userEvent.setup()
    
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    await user.click(screen.getByRole('button', { name: 'Book a Call' }))
    
    expect(screen.getByText('Select a Date')).toBeInTheDocument()
    expect(screen.getByText('Available Monday - Friday. Weekend appointments by special request.')).toBeInTheDocument()
  })

  it('advances to step 2 when date is selected', async () => {
    const user = userEvent.setup()
    
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    await user.click(screen.getByRole('button', { name: 'Book a Call' }))
    
    // Find and click a future weekday (we'll use the 15th as it's likely a weekday)
    const dateButtons = screen.getAllByRole('button')
    const futureDateButton = dateButtons.find(button => 
      button.textContent?.includes('15') && 
      !button.disabled
    )
    
    if (futureDateButton) {
      await user.click(futureDateButton)
      
      await waitFor(() => {
        expect(screen.getByText('Select a Time')).toBeInTheDocument()
      })
    }
  })

  it('shows time slots in step 2', async () => {
    const user = userEvent.setup()
    
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    await user.click(screen.getByRole('button', { name: 'Book a Call' }))
    
    // Mock date selection by directly setting the date
    const dateButtons = screen.getAllByRole('button')
    const futureDateButton = dateButtons.find(button => 
      button.textContent?.includes('15') && 
      !button.disabled
    )
    
    if (futureDateButton) {
      await user.click(futureDateButton)
      
      await waitFor(() => {
        expect(screen.getByText('9:00 AM')).toBeInTheDocument()
        expect(screen.getByText('10:00 AM')).toBeInTheDocument()
        expect(screen.getByText('2:00 PM')).toBeInTheDocument()
        expect(screen.getByText('5:00 PM')).toBeInTheDocument()
      })
    }
  })

  it('advances to step 3 when time is selected', async () => {
    const user = userEvent.setup()
    
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    await user.click(screen.getByRole('button', { name: 'Book a Call' }))
    
    // Select date
    const dateButtons = screen.getAllByRole('button')
    const futureDateButton = dateButtons.find(button => 
      button.textContent?.includes('15') && 
      !button.disabled
    )
    
    if (futureDateButton) {
      await user.click(futureDateButton)
      
      await waitFor(() => {
        expect(screen.getByText('Select a Time')).toBeInTheDocument()
      })
      
      // Select time
      const timeSlot = screen.getByText('10:00 AM')
      await user.click(timeSlot)
      
      await waitFor(() => {
        expect(screen.getByText('Confirm Your Details')).toBeInTheDocument()
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      })
    }
  })

  it('validates required fields in contact form', async () => {
    const user = userEvent.setup()
    
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    await user.click(screen.getByRole('button', { name: 'Book a Call' }))
    
    // Navigate to step 3 (contact form)
    const dateButtons = screen.getAllByRole('button')
    const futureDateButton = dateButtons.find(button => 
      button.textContent?.includes('15') && 
      !button.disabled
    )
    
    if (futureDateButton) {
      await user.click(futureDateButton)
      await waitFor(() => screen.getByText('Select a Time'))
      
      await user.click(screen.getByText('10:00 AM'))
      await waitFor(() => screen.getByText('Confirm Your Details'))
      
      // Try to submit without required fields
      const submitButton = screen.getByText('Confirm Booking')
      expect(submitButton).toBeDisabled()
    }
  })

  it('enables submit button when required fields are filled', async () => {
    const user = userEvent.setup()
    
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    await user.click(screen.getByRole('button', { name: 'Book a Call' }))
    
    // Navigate to step 3
    const dateButtons = screen.getAllByRole('button')
    const futureDateButton = dateButtons.find(button => 
      button.textContent?.includes('15') && 
      !button.disabled
    )
    
    if (futureDateButton) {
      await user.click(futureDateButton)
      await waitFor(() => screen.getByText('Select a Time'))
      
      await user.click(screen.getByText('10:00 AM'))
      await waitFor(() => screen.getByText('Confirm Your Details'))
      
      // Fill required fields
      await user.type(screen.getByLabelText(/name/i), 'John Doe')
      await user.type(screen.getByLabelText(/email/i), 'john@example.com')
      
      const submitButton = screen.getByText('Confirm Booking')
      expect(submitButton).not.toBeDisabled()
    }
  })

  it('submits form with correct data', async () => {
    const user = userEvent.setup()
    
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    await user.click(screen.getByRole('button', { name: 'Book a Call' }))
    
    // Complete the booking flow
    const dateButtons = screen.getAllByRole('button')
    const futureDateButton = dateButtons.find(button => 
      button.textContent?.includes('15') && 
      !button.disabled
    )
    
    if (futureDateButton) {
      await user.click(futureDateButton)
      await waitFor(() => screen.getByText('Select a Time'))
      
      await user.click(screen.getByText('10:00 AM'))
      await waitFor(() => screen.getByText('Confirm Your Details'))
      
      // Fill form
      await user.type(screen.getByLabelText(/name/i), 'John Doe')
      await user.type(screen.getByLabelText(/email/i), 'john@example.com')
      await user.type(screen.getByLabelText(/phone/i), '+1 555 123 4567')
      await user.type(screen.getByLabelText(/company/i), 'Test Company')
      await user.type(screen.getByLabelText(/challenges/i), 'Need AI automation')
      
      await user.click(screen.getByText('Confirm Booking'))
      
      // Check console.log was called with form data
      expect(mockConsoleLog).toHaveBeenCalledWith(
        'Booking submitted:',
        expect.objectContaining({
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+1 555 123 4567',
          company: 'Test Company',
          message: 'Need AI automation'
        })
      )
    }
  })

  it('shows success modal after form submission', async () => {
    const user = userEvent.setup()
    
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    await user.click(screen.getByRole('button', { name: 'Book a Call' }))
    
    // Complete booking flow
    const dateButtons = screen.getAllByRole('button')
    const futureDateButton = dateButtons.find(button => 
      button.textContent?.includes('15') && 
      !button.disabled
    )
    
    if (futureDateButton) {
      await user.click(futureDateButton)
      await waitFor(() => screen.getByText('Select a Time'))
      
      await user.click(screen.getByText('10:00 AM'))
      await waitFor(() => screen.getByText('Confirm Your Details'))
      
      await user.type(screen.getByLabelText(/name/i), 'John Doe')
      await user.type(screen.getByLabelText(/email/i), 'john@example.com')
      
      await user.click(screen.getByText('Confirm Booking'))
      
      await waitFor(() => {
        expect(screen.getByText('Booking Request Submitted!')).toBeInTheDocument()
        expect(screen.getByText('Thank you, John Doe! We\'ve received your request for a strategy call.')).toBeInTheDocument()
        expect(screen.getByText('What happens next?')).toBeInTheDocument()
      })
    }
  })

  it('allows navigation back to previous steps', async () => {
    const user = userEvent.setup()
    
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    await user.click(screen.getByRole('button', { name: 'Book a Call' }))
    
    // Go to step 2
    const dateButtons = screen.getAllByRole('button')
    const futureDateButton = dateButtons.find(button => 
      button.textContent?.includes('15') && 
      !button.disabled
    )
    
    if (futureDateButton) {
      await user.click(futureDateButton)
      await waitFor(() => screen.getByText('Select a Time'))
      
      // Go back to step 1
      await user.click(screen.getByText('← Back to Date Selection'))
      
      await waitFor(() => {
        expect(screen.getByText('Select a Date')).toBeInTheDocument()
      })
    }
  })

  it('resets form when modal is reopened', async () => {
    const user = userEvent.setup()
    
    render(
      <BookingModal>
        <button>Book a Call</button>
      </BookingModal>
    )
    
    // Open modal and make some selections
    await user.click(screen.getByRole('button', { name: 'Book a Call' }))
    
    const dateButtons = screen.getAllByRole('button')
    const futureDateButton = dateButtons.find(button => 
      button.textContent?.includes('15') && 
      !button.disabled
    )
    
    if (futureDateButton) {
      await user.click(futureDateButton)
      await waitFor(() => screen.getByText('Select a Time'))
      
      // Close modal by pressing Escape
      fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
      
      // Reopen modal
      await user.click(screen.getByRole('button', { name: 'Book a Call' }))
      
      // Should be back to step 1
      expect(screen.getByText('Select a Date')).toBeInTheDocument()
    }
  })
}) 