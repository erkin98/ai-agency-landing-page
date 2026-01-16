import { Bot } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { cn, STYLES } from "@/lib/utils"

/**
 * Site footer with company information
 */
export function Footer() {
  return (
    <footer className={cn(
      "bg-black/40 backdrop-blur-xl",
      "border-t border-purple-500/20",
      "text-white py-12 px-4 sm:px-6 lg:px-8"
    )}>
      <div className={STYLES.container}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg shadow-lg shadow-purple-500/25">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <span className={cn("text-xl font-bold", STYLES.textGradient)}>
              {COMPANY.name}
            </span>
          </div>

          {/* Copyright */}
          <div className="text-purple-300 text-center md:text-right">
            <p>&copy; {COMPANY.year} {COMPANY.name}. All rights reserved.</p>
            <p className="text-sm mt-1">{COMPANY.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
