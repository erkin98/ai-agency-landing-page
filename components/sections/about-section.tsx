import { Bot, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
import { SectionWrapper } from "@/components/shared"
import { COMPANY_CREDENTIALS, SECTION_CONTENT } from "@/lib/constants"
import { cn, STYLES } from "@/lib/utils"
import type { CompanyCredential } from "@/types"

interface CredentialItemProps {
  credential: CompanyCredential
}

/**
 * Individual credential item component
 */
function CredentialItem({ credential }: CredentialItemProps) {
  return (
    <div className="flex items-start">
      <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-white">{credential.title}</h3>
        <p className="text-purple-200">{credential.description}</p>
      </div>
    </div>
  )
}

/**
 * CTA card component
 */
function CTACard() {
  return (
    <div className={cn(
      "bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10",
      "backdrop-blur-xl p-8 rounded-2xl",
      "border border-purple-500/20",
      "shadow-2xl shadow-purple-500/10"
    )}>
      <div className="text-center">
        <div className={cn(
          "w-20 h-20 bg-gradient-to-r from-purple-600 to-fuchsia-600",
          "rounded-full flex items-center justify-center mx-auto mb-4",
          "shadow-2xl shadow-purple-500/30"
        )}>
          <Bot className="h-10 w-10 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">
          {SECTION_CONTENT.about.ctaTitle}
        </h3>
        <p className="text-purple-200 mb-6">
          {SECTION_CONTENT.about.ctaDescription}
        </p>
        
        <BookingModal>
          <Button
            size="lg"
            className={cn(
              "w-full shadow-xl shadow-purple-500/25",
              STYLES.buttonPrimary
            )}
          >
            <Calendar className="h-5 w-5 mr-2" />
            {SECTION_CONTENT.about.ctaButton}
          </Button>
        </BookingModal>
      </div>
    </div>
  )
}

/**
 * About section with company credentials and CTA
 */
export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {SECTION_CONTENT.about.title}
          </h2>
          <p className="text-lg text-purple-200 mb-6">
            {SECTION_CONTENT.about.description}
          </p>

          <div className="space-y-4">
            {COMPANY_CREDENTIALS.map((credential, index) => (
              <CredentialItem key={index} credential={credential} />
            ))}
          </div>
        </div>

        {/* Right Column - CTA Card */}
        <CTACard />
      </div>
    </SectionWrapper>
  )
}
