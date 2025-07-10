"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react"
import { useState } from "react"

interface BookingModalProps {
  children: React.ReactNode
  className?: string
}

export function BookingModal({ children, className }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [step, setStep] = useState<1 | 2 | 3 | 'success'>(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ]

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) {
      setStep(2)
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep(3)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", {
      date: selectedDate,
      time: selectedTime,
      ...formData
    })
    // You could integrate with Calendly API, Google Calendar, or your own booking system
    setStep('success')
  }

  const resetModal = () => {
    setStep(1)
    setSelectedDate(undefined)
    setSelectedTime("")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }

  return (
    <Dialog onOpenChange={() => resetModal()}>
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
          {/* Progress Steps */}
          {step !== 'success' && (
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-purple-300' : 'text-purple-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-purple-600' : 'bg-purple-800'}`}>
                  <CalendarIcon className="h-4 w-4" />
                </div>
                <span className="text-sm">Date</span>
              </div>
              <div className="w-8 h-0.5 bg-purple-700"></div>
              <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-purple-300' : 'text-purple-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-purple-600' : 'bg-purple-800'}`}>
                  <Clock className="h-4 w-4" />
                </div>
                <span className="text-sm">Time</span>
              </div>
              <div className="w-8 h-0.5 bg-purple-700"></div>
              <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-purple-300' : 'text-purple-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-purple-600' : 'bg-purple-800'}`}>
                  <User className="h-4 w-4" />
                </div>
                <span className="text-sm">Details</span>
              </div>
            </div>
          )}

          {/* Step 1: Date Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center">Select a Date</h3>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  className="rounded-md border border-purple-500/30 bg-white/5 backdrop-blur-sm"
                />
              </div>
              <p className="text-sm text-purple-300 text-center">
                Available Monday - Friday. Weekend appointments by special request.
              </p>
            </div>
          )}

          {/* Step 2: Time Selection */}
          {step === 2 && selectedDate && (
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold">Select a Time</h3>
                <p className="text-purple-300">{formatDate(selectedDate)}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant="outline"
                    className={`bg-white/5 border-purple-500/30 text-purple-200 hover:bg-purple-600 hover:text-white ${
                      selectedTime === time ? 'bg-purple-600 text-white' : ''
                    }`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
              <Button
                variant="ghost"
                className="text-purple-300 hover:text-white"
                onClick={() => setStep(1)}
              >
                ← Back to Date Selection
              </Button>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && selectedDate && selectedTime && (
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">Confirm Your Details</h3>
                <Badge className="bg-purple-600 text-white">
                  {formatDate(selectedDate)} at {selectedTime}
                </Badge>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-purple-300">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-white/5 border-purple-500/30 text-white placeholder:text-purple-400"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-purple-300">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-white/5 border-purple-500/30 text-white placeholder:text-purple-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-purple-300">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-white/5 border-purple-500/30 text-white placeholder:text-purple-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-purple-300">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-white/5 border-purple-500/30 text-white placeholder:text-purple-400"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-purple-300">What challenges are you facing? (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-white/5 border-purple-500/30 text-white placeholder:text-purple-400"
                    placeholder="Tell us about your business goals and challenges..."
                    rows={3}
                  />
                </div>

                <div className="flex space-x-3">
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-purple-300 hover:text-white"
                    onClick={() => setStep(2)}
                  >
                    ← Back to Time
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700"
                    disabled={!formData.name || !formData.email}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Confirm Booking
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Success Modal */}
          {step === 'success' && (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">Booking Request Submitted!</h3>
                <p className="text-purple-200 text-lg">
                  Thank you, {formData.name}! We've received your request for a strategy call.
                </p>
              </div>

              {selectedDate && selectedTime && (
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                  <h4 className="font-semibold text-white mb-2">Requested Appointment</h4>
                  <div className="space-y-1 text-purple-200">
                    <p>📅 {formatDate(selectedDate)}</p>
                    <p>🕐 {selectedTime}</p>
                    <p>📧 {formData.email}</p>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <div className="text-sm text-purple-300">
                  <p className="font-semibold">What happens next?</p>
                  <ul className="mt-2 space-y-1 text-left max-w-md mx-auto">
                    <li>✅ We'll review your request within 24 hours</li>
                    <li>✅ You'll receive a calendar confirmation via email</li>
                    <li>✅ We'll send you a preparation guide</li>
                    <li>✅ Join the call to discover your AI opportunities</li>
                  </ul>
                </div>
                
                <Button
                  onClick={resetModal}
                  className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700"
                >
                  Book Another Call
                </Button>
              </div>
            </div>
          )}
        </div>

        {step !== 'success' && (
          <div className="text-xs text-purple-400 text-center mt-4">
            <p>🔒 Your information is secure and will never be shared</p>
            <p>💬 Free consultation • No commitment required</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
} 