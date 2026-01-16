import type { LucideIcon } from "lucide-react"
import type { GradientVariant } from "@/types"
import { cn, getGradientClasses } from "@/lib/utils"

interface GradientIconProps {
  icon: LucideIcon
  variant?: GradientVariant
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const SIZE_CLASSES = {
  sm: { container: "w-8 h-8", icon: "h-4 w-4" },
  md: { container: "w-12 h-12", icon: "h-6 w-6" },
  lg: { container: "w-16 h-16", icon: "h-8 w-8" },
  xl: { container: "w-20 h-20", icon: "h-10 w-10" },
}

/**
 * Reusable gradient icon component with consistent styling
 */
export function GradientIcon({
  icon: Icon,
  variant = "purple-fuchsia",
  size = "md",
  className,
}: GradientIconProps) {
  const gradient = getGradientClasses(variant)
  const sizeClasses = SIZE_CLASSES[size]

  return (
    <div
      className={cn(
        sizeClasses.container,
        "bg-gradient-to-r rounded-lg flex items-center justify-center shadow-lg",
        gradient.background,
        gradient.shadow,
        className
      )}
    >
      <Icon className={cn(sizeClasses.icon, "text-white")} />
    </div>
  )
}
