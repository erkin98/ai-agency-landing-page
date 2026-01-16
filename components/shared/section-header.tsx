import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
  centered?: boolean
}

/**
 * Consistent section header with title and optional description
 */
export function SectionHeader({
  title,
  description,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {description && (
        <p className={cn(
          "text-xl text-purple-200",
          centered && "max-w-2xl mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
