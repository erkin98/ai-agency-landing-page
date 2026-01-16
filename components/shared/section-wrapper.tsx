import { cn, STYLES } from "@/lib/utils"
import type { SectionProps } from "@/types"

interface SectionWrapperProps extends SectionProps {
  children: React.ReactNode
  narrow?: boolean
  withOverlay?: boolean
}

/**
 * Consistent section wrapper with standard padding and container width
 */
export function SectionWrapper({
  children,
  id,
  className,
  narrow = false,
  withOverlay = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn(STYLES.sectionPadding, "relative", className)}>
      {withOverlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 backdrop-blur-sm" />
      )}
      <div className={cn(narrow ? STYLES.containerNarrow : STYLES.container, "relative")}>
        {children}
      </div>
    </section>
  )
}
