import { Phone, Target, Zap, Mail, Calendar } from "lucide-react"
import type { 
  Service, 
  Testimonial, 
  FAQItem, 
  ContactMethod, 
  NavLink, 
  CompanyCredential,
  TimeSlot 
} from "@/types"

/**
 * Company Information
 */
export const COMPANY = {
  name: "AI Solutions Pro",
  tagline: "Transforming businesses with intelligent automation",
  email: "hello@aisolutionspro.com",
  phone: "+1 (555) 123-4567",
  phoneHref: "tel:+15551234567",
  year: new Date().getFullYear(),
} as const

/**
 * Navigation Links
 */
export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
]

/**
 * Hero Section Content
 */
export const HERO_CONTENT = {
  badge: "Transform Your Business with AI",
  titlePrefix: "Scale Your Business with",
  titleHighlight: "AI Automation",
  description: `We help ambitious businesses automate processes, generate more leads, and increase revenue using cutting-edge AI solutions. Stop losing money on manual tasks and start scaling with intelligent automation.`,
  primaryCta: "Book Your Free Strategy Call",
  secondaryCta: "See Our Work",
  secondaryCtaHref: "#services",
} as const

/**
 * Services Data
 */
export const SERVICES: Service[] = [
  {
    id: "voice-agents",
    title: "AI Voice Agents",
    description: "24/7 intelligent phone assistants that handle customer inquiries, book appointments, and qualify leads",
    icon: Phone,
    gradient: "purple-fuchsia",
    benefits: [
      { text: "Reduce response time by 90%" },
      { text: "Handle 100+ calls simultaneously" },
      { text: "Natural conversation flow" },
    ],
  },
  {
    id: "lead-generation",
    title: "Lead Generation AI",
    description: "Intelligent systems that identify, qualify, and nurture prospects automatically",
    icon: Target,
    gradient: "fuchsia-pink",
    benefits: [
      { text: "3x more qualified leads" },
      { text: "Automated follow-up sequences" },
      { text: "CRM integration included" },
    ],
  },
  {
    id: "process-automation",
    title: "Process Automation",
    description: "Streamline repetitive tasks and workflows with intelligent automation solutions",
    icon: Zap,
    gradient: "violet-purple",
    benefits: [
      { text: "Save 20+ hours per week" },
      { text: "Eliminate human errors" },
      { text: "Custom workflow design" },
    ],
  },
]

/**
 * Testimonials Data
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    rating: 5,
    quote: "Our AI voice agent handles 80% of customer inquiries automatically. We've reduced response time from hours to seconds and our customers love it!",
    author: {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Solutions",
    },
    gradient: "purple-fuchsia",
  },
  {
    id: "testimonial-2",
    rating: 5,
    quote: "The lead generation AI increased our qualified leads by 300%. ROI was positive within the first month. Incredible results!",
    author: {
      name: "Mike Chen",
      role: "Founder",
      company: "GrowthCo",
    },
    gradient: "fuchsia-pink",
  },
  {
    id: "testimonial-3",
    rating: 5,
    quote: "Process automation saved us 25 hours per week. Our team can now focus on high-value activities instead of repetitive tasks.",
    author: {
      name: "Lisa Rodriguez",
      role: "Operations Director",
      company: "ScaleCorp",
    },
    gradient: "violet-purple",
  },
]

/**
 * FAQ Data
 */
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does it take to implement an AI solution?",
    answer: "Most AI solutions can be implemented within 2-4 weeks, depending on complexity. We provide a detailed timeline during your strategy call and keep you updated throughout the process.",
  },
  {
    id: "faq-2",
    question: "What kind of ROI can I expect from AI automation?",
    answer: "Our clients typically see 3-5x ROI within the first 6 months. This comes from reduced labor costs, increased efficiency, and improved customer satisfaction. We'll provide specific projections based on your business.",
  },
  {
    id: "faq-3",
    question: "Do I need technical knowledge to use your AI solutions?",
    answer: "Not at all! We design user-friendly solutions and provide comprehensive training. Our systems are built to be intuitive, and we offer ongoing support to ensure smooth operation.",
  },
  {
    id: "faq-4",
    question: "What industries do you work with?",
    answer: "We work with businesses across various industries including healthcare, real estate, e-commerce, professional services, and manufacturing. Our solutions are customized to fit your specific industry needs.",
  },
  {
    id: "faq-5",
    question: "What ongoing support do you provide?",
    answer: "We provide 24/7 technical support, regular system updates, performance monitoring, and monthly optimization reviews to ensure your AI solutions continue delivering maximum value.",
  },
]

/**
 * Company Credentials
 */
export const COMPANY_CREDENTIALS: CompanyCredential[] = [
  {
    title: "5+ Years AI Experience",
    description: "Deep expertise in machine learning, automation, and AI implementation",
  },
  {
    title: "50+ Successful Projects",
    description: "Delivered AI solutions across various industries with proven ROI",
  },
  {
    title: "30-Day Money-Back Guarantee",
    description: "We're confident in our results. If you're not satisfied, get your money back",
  },
]

/**
 * Contact Methods
 */
export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "email",
    title: "Email Us",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    icon: Mail,
    gradient: "purple-fuchsia",
  },
  {
    id: "phone",
    title: "Call Us",
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
    icon: Phone,
    gradient: "fuchsia-pink",
  },
  {
    id: "booking",
    title: "Book a Call",
    value: "Schedule instantly online",
    href: "#",
    icon: Calendar,
    gradient: "violet-purple",
  },
]

/**
 * Booking Modal Time Slots
 */
export const TIME_SLOTS: TimeSlot[] = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
]

/**
 * Initial Booking Form State
 */
export const INITIAL_BOOKING_FORM_DATA = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
} as const

/**
 * Section Content
 */
export const SECTION_CONTENT = {
  services: {
    title: "Our AI Solutions",
    description: "We specialize in three core AI services that deliver measurable results for your business",
  },
  testimonials: {
    title: "Trusted by Growing Businesses",
    description: "See what our clients are saying about their AI transformation",
  },
  about: {
    title: "Why Choose AI Solutions Pro?",
    description: "We're not just another AI agency. We're your strategic partners in digital transformation, with a proven track record of delivering measurable results for businesses like yours.",
    ctaTitle: "Ready to Transform Your Business?",
    ctaDescription: "Book a free 30-minute strategy call to discover how AI can revolutionize your operations",
    ctaButton: "Schedule Your Free Call",
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Get answers to common questions about our AI solutions",
  },
  finalCta: {
    title: "Ready to Scale Your Business with AI?",
    description: "Don't let your competitors get ahead. Book your free strategy call today and discover how AI can transform your business operations.",
    button: "Book Your Free Strategy Call Now",
    trustIndicators: "No commitment required • 30-minute call • Instant calendar booking",
  },
  contact: {
    title: "Get In Touch",
    description: "Have questions? We're here to help you succeed with AI",
  },
} as const
