import { cn } from '@/lib/utils'

describe('Utils', () => {
  describe('cn (className merge function)', () => {
    it('merges class names correctly', () => {
      const result = cn('px-4', 'py-2', 'bg-blue-500')
      expect(result).toBe('px-4 py-2 bg-blue-500')
    })

    it('handles conditional classes', () => {
      const isActive = true
      const result = cn('px-4', 'py-2', isActive && 'bg-blue-500')
      expect(result).toBe('px-4 py-2 bg-blue-500')
    })

    it('filters out falsy values', () => {
      const result = cn('px-4', false, 'py-2', null, undefined, 'bg-blue-500')
      expect(result).toBe('px-4 py-2 bg-blue-500')
    })

    it('handles empty inputs', () => {
      const result = cn()
      expect(result).toBe('')
    })

    it('handles Tailwind class conflicts correctly', () => {
      // This should prefer the last conflicting class
      const result = cn('px-4', 'px-8')
      expect(result).toBe('px-8')
    })

    it('merges complex class combinations', () => {
      const baseClasses = 'flex items-center justify-center'
      const conditionalClasses = 'bg-blue-500 hover:bg-blue-600'
      const sizeClasses = 'px-4 py-2'
      
      const result = cn(baseClasses, conditionalClasses, sizeClasses)
      expect(result).toContain('flex')
      expect(result).toContain('items-center')
      expect(result).toContain('bg-blue-500')
      expect(result).toContain('px-4')
    })

    it('handles array inputs', () => {
      const result = cn(['px-4', 'py-2'], 'bg-blue-500')
      expect(result).toBe('px-4 py-2 bg-blue-500')
    })

    it('handles object inputs with boolean values', () => {
      const result = cn({
        'px-4': true,
        'py-2': true,
        'bg-blue-500': false,
        'bg-red-500': true
      })
      expect(result).toBe('px-4 py-2 bg-red-500')
    })
  })
}) 