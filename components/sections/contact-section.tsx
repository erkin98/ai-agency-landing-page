import { SectionWrapper, SectionHeader, GradientIcon } from "@/components/shared"
import { BookingModal } from "@/components/booking-modal"
import { CONTACT_METHODS, SECTION_CONTENT } from "@/lib/constants"
import { cn } from "@/lib/utils"
import type { ContactMethod } from "@/types"

interface ContactCardProps {
  method: ContactMethod
}

/**
 * Individual contact method card
 */
function ContactCard({ method }: ContactCardProps) {
  const isBooking = method.id === "booking"

  const content = (
    <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20">
      <GradientIcon
        icon={method.icon}
        variant={method.gradient}
        className="mx-auto mb-4"
      />
      <h3 className="font-semibold text-white mb-2">{method.title}</h3>
      
      {isBooking ? (
        <BookingModal>
          <button className="text-purple-200 hover:text-purple-100 transition-colors cursor-pointer">
            {method.value}
          </button>
        </BookingModal>
      ) : (
        <a
          href={method.href}
          className="text-purple-200 hover:text-purple-100 transition-colors"
        >
          {method.value}
        </a>
      )}
    </div>
  )

  return content
}

/**
 * Contact section with multiple contact methods
 */
export function ContactSection() {
  return (
    <SectionWrapper narrow>
      <SectionHeader
        title={SECTION_CONTENT.contact.title}
        description={SECTION_CONTENT.contact.description}
      />

      <div className="grid md:grid-cols-3 gap-8 text-center">
        {CONTACT_METHODS.map((method) => (
          <ContactCard key={method.id} method={method} />
        ))}
      </div>
    </SectionWrapper>
  )
}
