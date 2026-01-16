import { Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper, SectionHeader, StarRating } from "@/components/shared"
import { TESTIMONIALS, SECTION_CONTENT } from "@/lib/constants"
import { cn, getGradientClasses } from "@/lib/utils"
import type { Testimonial } from "@/types"

interface TestimonialCardProps {
  testimonial: Testimonial
}

/**
 * Individual testimonial card component
 */
function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const gradient = getGradientClasses(testimonial.gradient)

  return (
    <Card className="bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
      <CardContent className="p-6">
        <StarRating rating={testimonial.rating} className="mb-4" />
        
        <p className="text-purple-200 mb-4">
          "{testimonial.quote}"
        </p>
        
        <div className="flex items-center">
          <div className={cn(
            "w-10 h-10 bg-gradient-to-r rounded-full",
            "flex items-center justify-center mr-3",
            gradient.background
          )}>
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-white">{testimonial.author.name}</p>
            <p className="text-sm text-purple-300">
              {testimonial.author.role}, {testimonial.author.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * Social proof section with customer testimonials
 */
export function TestimonialsSection() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={SECTION_CONTENT.testimonials.title}
        description={SECTION_CONTENT.testimonials.description}
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </SectionWrapper>
  )
}
