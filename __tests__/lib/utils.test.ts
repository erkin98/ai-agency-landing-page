import { cn, getGradientClasses, GRADIENT_CLASSES, STYLES, formatDate, isWeekday, isFutureDate } from '@/lib/utils'

describe('Utility Functions', () => {
  describe('cn (class name merger)', () => {
    it('merges class names correctly', () => {
      expect(cn('foo', 'bar')).toBe('foo bar')
    })

    it('handles conditional classes', () => {
      expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz')
    })

    it('merges Tailwind classes without duplicates', () => {
      expect(cn('p-4', 'p-8')).toBe('p-8')
    })

    it('handles array inputs', () => {
      expect(cn(['foo', 'bar'])).toBe('foo bar')
    })

    it('handles object inputs', () => {
      expect(cn({ foo: true, bar: false, baz: true })).toBe('foo baz')
    })
  })

  describe('getGradientClasses', () => {
    it('returns correct classes for purple-fuchsia variant', () => {
      const classes = getGradientClasses('purple-fuchsia')
      expect(classes.background).toBe('from-purple-500 to-fuchsia-500')
      expect(classes.shadow).toBe('shadow-purple-500/25')
    })

    it('returns correct classes for fuchsia-pink variant', () => {
      const classes = getGradientClasses('fuchsia-pink')
      expect(classes.background).toBe('from-fuchsia-500 to-pink-500')
      expect(classes.shadow).toBe('shadow-fuchsia-500/25')
    })

    it('returns correct classes for violet-purple variant', () => {
      const classes = getGradientClasses('violet-purple')
      expect(classes.background).toBe('from-violet-500 to-purple-500')
      expect(classes.shadow).toBe('shadow-violet-500/25')
    })

    it('returns correct classes for green-emerald variant', () => {
      const classes = getGradientClasses('green-emerald')
      expect(classes.background).toBe('from-green-500 to-emerald-500')
      expect(classes.shadow).toBe('shadow-green-500/30')
    })
  })

  describe('GRADIENT_CLASSES', () => {
    it('contains all gradient variants', () => {
      expect(Object.keys(GRADIENT_CLASSES)).toEqual([
        'purple-fuchsia',
        'fuchsia-pink',
        'violet-purple',
        'green-emerald'
      ])
    })
  })

  describe('STYLES', () => {
    it('contains glass morphism styles', () => {
      expect(STYLES.glass).toBe('bg-white/5 backdrop-blur-xl')
      expect(STYLES.glassDark).toBe('bg-black/20 backdrop-blur-xl')
    })

    it('contains border styles', () => {
      expect(STYLES.borderPurple).toBe('border border-purple-500/20')
    })

    it('contains container styles', () => {
      expect(STYLES.container).toBe('max-w-7xl mx-auto')
      expect(STYLES.containerNarrow).toBe('max-w-4xl mx-auto')
    })

    it('contains button styles', () => {
      expect(STYLES.buttonPrimary).toContain('from-purple-600')
      expect(STYLES.buttonPrimary).toContain('to-fuchsia-600')
    })
  })

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2026-01-15')
      const formatted = formatDate(date)
      expect(formatted).toContain('January')
      expect(formatted).toContain('15')
      expect(formatted).toContain('2026')
    })

    it('includes weekday in formatted output', () => {
      const date = new Date('2026-01-15')
      const formatted = formatDate(date)
      expect(formatted).toContain('Thursday')
    })
  })

  describe('isWeekday', () => {
    it('returns true for Monday', () => {
      const monday = new Date('2026-01-12') // Monday
      expect(isWeekday(monday)).toBe(true)
    })

    it('returns true for Friday', () => {
      const friday = new Date('2026-01-16') // Friday
      expect(isWeekday(friday)).toBe(true)
    })

    it('returns false for Saturday', () => {
      const saturday = new Date('2026-01-17') // Saturday
      expect(isWeekday(saturday)).toBe(false)
    })

    it('returns false for Sunday', () => {
      const sunday = new Date('2026-01-18') // Sunday
      expect(isWeekday(sunday)).toBe(false)
    })
  })

  describe('isFutureDate', () => {
    it('returns true for future dates', () => {
      const futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 7)
      expect(isFutureDate(futureDate)).toBe(true)
    })

    it('returns true for today', () => {
      const today = new Date()
      expect(isFutureDate(today)).toBe(true)
    })

    it('returns false for past dates', () => {
      const pastDate = new Date()
      pastDate.setDate(pastDate.getDate() - 7)
      expect(isFutureDate(pastDate)).toBe(false)
    })
  })
})
