import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import type { BookingFormData } from "@/types"

interface FormFieldProps {
  id: string
  label: string
  type?: string
  value: string
  placeholder: string
  required?: boolean
  onChange: (value: string) => void
}

function FormField({
  id,
  label,
  type = "text",
  value,
  placeholder,
  required,
  onChange,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-purple-300">
        {label}{required && " *"}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white/5 border-purple-500/30 text-white placeholder:text-purple-400"
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

interface DetailsStepProps {
  formattedDate: string
  selectedTime: string
  formData: BookingFormData
  isFormValid: boolean
  onUpdateField: (field: keyof BookingFormData, value: string) => void
  onSubmit: (e: React.FormEvent) => void
  onBack: () => void
}

/**
 * Step 3: Contact details for booking
 */
export function DetailsStep({
  formattedDate,
  selectedTime,
  formData,
  isFormValid,
  onUpdateField,
  onSubmit,
  onBack,
}: DetailsStepProps) {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold">Confirm Your Details</h3>
        <Badge className="bg-purple-600 text-white">
          {formattedDate} at {selectedTime}
        </Badge>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            id="name"
            label="Name"
            value={formData.name}
            placeholder="Your full name"
            required
            onChange={(value) => onUpdateField("name", value)}
          />
          <FormField
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            placeholder="your@email.com"
            required
            onChange={(value) => onUpdateField("email", value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            id="phone"
            label="Phone"
            value={formData.phone}
            placeholder="+1 (555) 123-4567"
            onChange={(value) => onUpdateField("phone", value)}
          />
          <FormField
            id="company"
            label="Company"
            value={formData.company}
            placeholder="Your company name"
            onChange={(value) => onUpdateField("company", value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-purple-300">
            What challenges are you facing? (Optional)
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => onUpdateField("message", e.target.value)}
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
            onClick={onBack}
          >
            ← Back to Time
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700"
            disabled={!isFormValid}
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Confirm Booking
          </Button>
        </div>
      </form>
    </div>
  )
}
