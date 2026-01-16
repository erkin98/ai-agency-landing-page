import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { STYLES } from "@/lib/utils"

interface SuccessStepProps {
  name: string
  formattedDate: string
  selectedTime: string
  email: string
  onReset: () => void
}

/**
 * Success confirmation after booking submission
 */
export function SuccessStep({
  name,
  formattedDate,
  selectedTime,
  email,
  onReset,
}: SuccessStepProps) {
  const nextSteps = [
    "We'll review your request within 24 hours",
    "You'll receive a calendar confirmation via email",
    "We'll send you a preparation guide",
    "Join the call to discover your AI opportunities",
  ]

  return (
    <div className="text-center space-y-6">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30">
          <CheckCircle className="h-10 w-10 text-white" />
        </div>
      </div>

      {/* Success Message */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-white">Booking Request Submitted!</h3>
        <p className="text-purple-200 text-lg">
          Thank you, {name}! We've received your request for a strategy call.
        </p>
      </div>

      {/* Appointment Details */}
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
        <h4 className="font-semibold text-white mb-2">Requested Appointment</h4>
        <div className="space-y-1 text-purple-200">
          <p>📅 {formattedDate}</p>
          <p>🕐 {selectedTime}</p>
          <p>📧 {email}</p>
        </div>
      </div>

      {/* Next Steps */}
      <div className="space-y-3">
        <div className="text-sm text-purple-300">
          <p className="font-semibold">What happens next?</p>
          <ul className="mt-2 space-y-1 text-left max-w-md mx-auto">
            {nextSteps.map((step, index) => (
              <li key={index}>✅ {step}</li>
            ))}
          </ul>
        </div>

        <Button
          onClick={onReset}
          className={STYLES.buttonPrimary}
        >
          Book Another Call
        </Button>
      </div>
    </div>
  )
}
