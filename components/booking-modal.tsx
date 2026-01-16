"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useBookingForm } from "@/hooks/use-booking-form"
import {
  BookingProgress,
  DateStep,
  TimeStep,
  DetailsStep,
  SuccessStep,
} from "@/components/booking"

interface BookingModalProps {
  children: React.ReactNode
  className?: string
}

/**
 * Booking modal component for scheduling strategy calls
 * 
 * Refactored to use:
 * - Custom useBookingForm hook for state management
 * - Separate step components for each stage of the booking flow
 * - Proper separation of concerns between UI and business logic
 */
export function BookingModal({ children, className }: BookingModalProps) {
  const booking = useBookingForm()

  return (
    <Dialog onOpenChange={booking.reset}>
      <DialogTrigger asChild className={className}>
        {children}
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-purple-900 border border-purple-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Book Your Free Strategy Call
          </DialogTitle>
          <DialogDescription className="text-purple-200">
            Schedule a 30-minute consultation to discover how AI can transform your business
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Indicator */}
          <BookingProgress step={booking.step} />

          {/* Step 1: Date Selection */}
          {booking.step === 1 && (
            <DateStep
              selectedDate={booking.selectedDate}
              onSelectDate={booking.setSelectedDate}
            />
          )}

          {/* Step 2: Time Selection */}
          {booking.step === 2 && booking.selectedDate && (
            <TimeStep
              formattedDate={booking.formattedDate}
              timeSlots={booking.timeSlots}
              selectedTime={booking.selectedTime}
              onSelectTime={booking.setSelectedTime}
              onBack={booking.goBack}
            />
          )}

          {/* Step 3: Contact Details */}
          {booking.step === 3 && booking.selectedDate && booking.selectedTime && (
            <DetailsStep
              formattedDate={booking.formattedDate}
              selectedTime={booking.selectedTime}
              formData={booking.formData}
              isFormValid={booking.isFormValid}
              onUpdateField={booking.updateFormData}
              onSubmit={booking.handleSubmit}
              onBack={booking.goBack}
            />
          )}

          {/* Success State */}
          {booking.step === "success" && (
            <SuccessStep
              name={booking.formData.name}
              formattedDate={booking.formattedDate}
              selectedTime={booking.selectedTime}
              email={booking.formData.email}
              onReset={booking.reset}
            />
          )}
        </div>

        {/* Trust Indicators */}
        {booking.step !== "success" && (
          <div className="text-xs text-purple-400 text-center mt-4">
            <p>🔒 Your information is secure and will never be shared</p>
            <p>💬 Free consultation • No commitment required</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
