import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { TimeSlot } from "@/types"

interface TimeStepProps {
  formattedDate: string
  timeSlots: TimeSlot[]
  selectedTime: string
  onSelectTime: (time: string) => void
  onBack: () => void
}

/**
 * Step 2: Time selection for booking
 */
export function TimeStep({
  formattedDate,
  timeSlots,
  selectedTime,
  onSelectTime,
  onBack,
}: TimeStepProps) {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold">Select a Time</h3>
        <p className="text-purple-300">{formattedDate}</p>
      </div>

      <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
        {timeSlots.map((time) => (
          <Button
            key={time}
            variant="outline"
            className={cn(
              "bg-white/5 border-purple-500/30 text-purple-200",
              "hover:bg-purple-600 hover:text-white",
              selectedTime === time && "bg-purple-600 text-white"
            )}
            onClick={() => onSelectTime(time)}
          >
            {time}
          </Button>
        ))}
      </div>

      <Button
        variant="ghost"
        className="text-purple-300 hover:text-white"
        onClick={onBack}
      >
        ← Back to Date Selection
      </Button>
    </div>
  )
}
