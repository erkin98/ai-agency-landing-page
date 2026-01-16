import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper, SectionHeader, GradientIcon } from "@/components/shared"
import { SERVICES, SECTION_CONTENT } from "@/lib/constants"
import { cn, STYLES } from "@/lib/utils"
import type { Service } from "@/types"

interface ServiceCardProps {
  service: Service
}

/**
 * Individual service card component
 */
function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className={cn(
      STYLES.glassCard,
      STYLES.borderPurpleHover,
      STYLES.cardHover
    )}>
      <CardHeader>
        <GradientIcon
          icon={service.icon}
          variant={service.gradient}
          className="mb-4"
        />
        <CardTitle className="text-xl text-white">{service.title}</CardTitle>
        <CardDescription className="text-purple-200">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-purple-300">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
              {benefit.text}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

/**
 * Services section showcasing the three core AI services
 */
export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        title={SECTION_CONTENT.services.title}
        description={SECTION_CONTENT.services.description}
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  )
}
