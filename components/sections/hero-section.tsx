import { ArrowRight, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookingModal } from "@/components/booking-modal"
import { HERO_CONTENT } from "@/lib/constants"
import { cn, STYLES } from "@/lib/utils"

/**
 * Hero section with main value proposition and CTAs
 */
export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className={STYLES.container}>
        <div className="text-center">
          {/* Badge */}
          <Badge className="mb-4 bg-purple-500/20 text-purple-300 border border-purple-400/30 backdrop-blur-sm hover:bg-purple-500/30">
            🚀 {HERO_CONTENT.badge}
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {HERO_CONTENT.titlePrefix}
            <span className={cn(
              "text-transparent bg-clip-text",
              "bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600",
              "drop-shadow-lg"
            )}>
              {" "}{HERO_CONTENT.titleHighlight}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            {HERO_CONTENT.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingModal>
              <Button
                size="lg"
                className={cn(
                  "text-lg px-8 py-3 shadow-2xl shadow-purple-500/30",
                  STYLES.buttonPrimary
                )}
              >
                <Calendar className="h-5 w-5 mr-2" />
                {HERO_CONTENT.primaryCta}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </BookingModal>

            <Button
              variant="outline"
              size="lg"
              className={cn(
                "text-lg px-8 py-3",
                "bg-white/5 backdrop-blur-sm border-purple-400/30",
                "text-purple-200 hover:bg-white/10 hover:text-white"
              )}
              asChild
            >
              <a href={HERO_CONTENT.secondaryCtaHref}>
                <MessageSquare className="h-5 w-5 mr-2" />
                {HERO_CONTENT.secondaryCta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
