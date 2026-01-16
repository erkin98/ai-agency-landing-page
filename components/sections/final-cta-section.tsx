import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
import { SectionWrapper } from "@/components/shared"
import { SECTION_CONTENT } from "@/lib/constants"

/**
 * Final call-to-action section before footer
 */
export function FinalCTASection() {
  return (
    <SectionWrapper narrow withOverlay>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {SECTION_CONTENT.finalCta.title}
        </h2>
        <p className="text-xl text-purple-200 mb-8">
          {SECTION_CONTENT.finalCta.description}
        </p>
        
        <BookingModal>
          <Button
            size="lg"
            className="bg-gradient-to-r from-white to-purple-100 text-purple-900 hover:from-purple-100 hover:to-white text-lg px-8 py-3 shadow-2xl shadow-purple-500/30 border border-purple-400/20"
          >
            <Calendar className="h-5 w-5 mr-2" />
            {SECTION_CONTENT.finalCta.button}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </BookingModal>
        
        <p className="text-purple-300 mt-4 text-sm">
          {SECTION_CONTENT.finalCta.trustIndicators}
        </p>
      </div>
    </SectionWrapper>
  )
}
