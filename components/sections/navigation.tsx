"use client"

import { Bot, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
import { NAV_LINKS, COMPANY } from "@/lib/constants"
import { cn, STYLES } from "@/lib/utils"

/**
 * Fixed navigation bar with logo, nav links, and booking CTA
 */
export function Navigation() {
  return (
    <nav className={cn(
      "fixed top-0 w-full z-50",
      STYLES.glassDark,
      STYLES.borderPurple
    )}>
      <div className={cn(STYLES.container, "px-4 sm:px-6 lg:px-8")}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={cn(
              "p-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg",
              "shadow-lg shadow-purple-500/25"
            )}>
              <Bot className="h-6 w-6 text-white" />
            </div>
            <span className={cn(
              "text-xl font-bold",
              STYLES.textGradient
            )}>
              {COMPANY.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-purple-200 hover:text-purple-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <BookingModal>
              <Button className={STYLES.buttonPrimary}>
                <Calendar className="h-4 w-4 mr-2" />
                Book a Call
              </Button>
            </BookingModal>
          </div>
        </div>
      </div>
    </nav>
  )
}
