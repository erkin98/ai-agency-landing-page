"use client"

import { useState, useCallback } from "react"
import type { BookingFormData, BookingState, BookingStep } from "@/types"
import { INITIAL_BOOKING_FORM_DATA, TIME_SLOTS } from "@/lib/constants"
import { formatDate } from "@/lib/utils"

/**
 * Custom hook for managing booking form state and logic
 */
export function useBookingForm() {
  const [state, setState] = useState<BookingState>({
    selectedDate: undefined,
    selectedTime: "",
    step: 1,
    formData: { ...INITIAL_BOOKING_FORM_DATA },
  })

  const setSelectedDate = useCallback((date: Date | undefined) => {
    setState((prev) => ({
      ...prev,
      selectedDate: date,
      step: date ? 2 : prev.step,
    }))
  }, [])

  const setSelectedTime = useCallback((time: string) => {
    setState((prev) => ({
      ...prev,
      selectedTime: time,
      step: 3,
    }))
  }, [])

  const setStep = useCallback((step: BookingStep) => {
    setState((prev) => ({ ...prev, step }))
  }, [])

  const updateFormData = useCallback((field: keyof BookingFormData, value: string) => {
    setState((prev) => ({
      ...prev,
      formData: { ...prev.formData, [field]: value },
    }))
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    
    // Log booking data (in production, send to backend/API)
    console.log("Booking submitted:", {
      date: state.selectedDate,
      time: state.selectedTime,
      ...state.formData,
    })
    
    setState((prev) => ({ ...prev, step: "success" }))
  }, [state.selectedDate, state.selectedTime, state.formData])

  const reset = useCallback(() => {
    setState({
      selectedDate: undefined,
      selectedTime: "",
      step: 1,
      formData: { ...INITIAL_BOOKING_FORM_DATA },
    })
  }, [])

  const goBack = useCallback(() => {
    setState((prev) => {
      const newStep = prev.step === 3 ? 2 : prev.step === 2 ? 1 : prev.step
      return { ...prev, step: newStep as BookingStep }
    })
  }, [])

  const isFormValid = state.formData.name.trim() !== "" && state.formData.email.trim() !== ""

  const formattedDate = state.selectedDate ? formatDate(state.selectedDate) : ""

  return {
    // State
    ...state,
    formattedDate,
    isFormValid,
    timeSlots: TIME_SLOTS,
    
    // Actions
    setSelectedDate,
    setSelectedTime,
    setStep,
    updateFormData,
    handleSubmit,
    reset,
    goBack,
  }
}

export type UseBookingFormReturn = ReturnType<typeof useBookingForm>
