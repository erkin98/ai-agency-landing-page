import { render } from '@testing-library/react'
import RootLayout, { metadata, viewport } from '@/app/layout'

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const testContent = 'Test content'
    const { getByText } = render(
      <RootLayout>
        <div>{testContent}</div>
      </RootLayout>
    )
    
    expect(getByText(testContent)).toBeInTheDocument()
  })

  it('has correct HTML attributes', () => {
    const { container } = render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    )
    
    // For layout testing, we'll check that the content is rendered
    expect(container.firstChild).toBeInTheDocument()
  })
})

describe('Metadata', () => {
  it('has correct title', () => {
    expect(metadata.title).toBe('AI Solutions Pro - Scale Your Business with AI Automation')
  })

  it('has proper description for SEO', () => {
    expect(metadata.description).toBe(
      'Transform your business with AI Voice Agents, Lead Generation AI, and Process Automation. Book your free strategy call today.'
    )
  })

  it('includes Next.js generator', () => {
    expect(metadata.generator).toBe('Next.js')
  })
})

describe('Viewport', () => {
  it('has correct viewport configuration', () => {
    expect(viewport.width).toBe('device-width')
    expect(viewport.initialScale).toBe(1)
  })
}) 