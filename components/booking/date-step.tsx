import { Calendar } from "@/components/ui/calendar"
import { isFutureDate, isWeekday } from "@/lib/utils"

interface DateStepProps {
  selectedDate: Date | undefined
  onSelectDate: (date: Date | undefined) => void
}

/**
 * Step 1: Date selection for booking
 */
export function DateStep({ selectedDate, onSelectDate }: DateStepProps) {
  const isDateDisabled = (date: Date) => {
    return !isFutureDate(date) || !isWeekday(date)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center">Select a Date</h3>
      
      <div className="flex justify-center">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onSelectDate}
          disabled={isDateDisabled}
          className="rounded-md border border-purple-500/30 bg-white/5 backdrop-blur-sm"
        />
      </div>
      
      <p className="text-sm text-purple-300 text-center">
        Available Monday - Friday. Weekend appointments by special request.
      </p>
    </div>
  )
}
