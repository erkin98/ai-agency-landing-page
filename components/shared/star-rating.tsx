import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  maxRating?: number
  className?: string
}

/**
 * Reusable star rating component
 */
export function StarRating({ rating, maxRating = 5, className }: StarRatingProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          data-testid="star-icon"
          className={cn(
            "h-4 w-4",
            i < rating ? "text-yellow-400 fill-current" : "text-gray-400"
          )}
        />
      ))}
    </div>
  )
}
