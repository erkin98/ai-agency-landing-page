import { Calendar as CalendarIcon, Clock, User } from "lucide-react"
import { cn } from "@/lib/utils"
import type { BookingStep } from "@/types"

interface ProgressStepProps {
  icon: React.ElementType
  label: string
  isActive: boolean
}

function ProgressStep({ icon: Icon, label, isActive }: ProgressStepProps) {
  return (
    <div className={cn(
      "flex items-center space-x-2",
      isActive ? "text-purple-300" : "text-purple-600"
    )}>
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center",
        isActive ? "bg-purple-600" : "bg-purple-800"
      )}>
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-sm">{label}</span>
    </div>
  )
}

interface BookingProgressProps {
  step: BookingStep
}

/**
 * Progress indicator for the booking flow
 */
export function BookingProgress({ step }: BookingProgressProps) {
  if (step === "success") return null

  const steps = [
    { icon: CalendarIcon, label: "Date", minStep: 1 },
    { icon: Clock, label: "Time", minStep: 2 },
    { icon: User, label: "Details", minStep: 3 },
  ]

  return (
    <div className="flex items-center justify-center space-x-4">
      {steps.map((s, index) => (
        <div key={s.label} className="flex items-center">
          <ProgressStep
            icon={s.icon}
            label={s.label}
            isActive={typeof step === "number" && step >= s.minStep}
          />
          {index < steps.length - 1 && (
            <div className="w-8 h-0.5 bg-purple-700 ml-4" />
          )}
        </div>
      ))}
    </div>
  )
}
