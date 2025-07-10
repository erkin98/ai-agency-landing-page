import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookingModal } from "@/components/booking-modal"
import {
  ArrowRight,
  Bot,
  Zap,
  Target,
  Users,
  CheckCircle,
  Star,
  Calendar,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react"

export default function AIAgencyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-purple-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg shadow-lg shadow-purple-500/25">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI Solutions Pro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-purple-200 hover:text-purple-300 transition-colors">
                Services
              </a>
              <a href="#about" className="text-purple-200 hover:text-purple-300 transition-colors">
                About
              </a>
              <a href="#faq" className="text-purple-200 hover:text-purple-300 transition-colors">
                FAQ
              </a>
              <BookingModal>
                <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 shadow-lg shadow-purple-500/25 border border-purple-400/20">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book a Call
                </Button>
              </BookingModal>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border border-purple-400/30 backdrop-blur-sm hover:bg-purple-500/30">
              🚀 Transform Your Business with AI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Scale Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 drop-shadow-lg">
                {" "}
                AI Automation
              </span>
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              We help ambitious businesses automate processes, generate more leads, and increase revenue using
              cutting-edge AI solutions. Stop losing money on manual tasks and start scaling with intelligent
              automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingModal>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-lg px-8 py-3 shadow-2xl shadow-purple-500/30 border border-purple-400/20"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Your Free Strategy Call
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </BookingModal>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 bg-white/5 backdrop-blur-sm border-purple-400/30 text-purple-200 hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="#services">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  See Our Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              We specialize in three core AI services that deliver measurable results for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-500/25">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">AI Voice Agents</CardTitle>
                <CardDescription className="text-purple-200">
                  24/7 intelligent phone assistants that handle customer inquiries, book appointments, and qualify leads
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Reduce response time by 90%
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Handle 100+ calls simultaneously
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Natural conversation flow
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-fuchsia-500/25">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Lead Generation AI</CardTitle>
                <CardDescription className="text-purple-200">
                  Intelligent systems that identify, qualify, and nurture prospects automatically
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    3x more qualified leads
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Automated follow-up sequences
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    CRM integration included
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-violet-500/25">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Process Automation</CardTitle>
                <CardDescription className="text-purple-200">
                  Streamline repetitive tasks and workflows with intelligent automation solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Save 20+ hours per week
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Eliminate human errors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Custom workflow design
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Growing Businesses</h2>
            <p className="text-xl text-purple-200">See what our clients are saying about their AI transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-purple-200 mb-4">
                  "Our AI voice agent handles 80% of customer inquiries automatically. We've reduced response time from
                  hours to seconds and our customers love it!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Sarah Johnson</p>
                    <p className="text-sm text-purple-300">CEO, TechStart Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-purple-200 mb-4">
                  "The lead generation AI increased our qualified leads by 300%. ROI was positive within the first
                  month. Incredible results!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Mike Chen</p>
                    <p className="text-sm text-purple-300">Founder, GrowthCo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-purple-200 mb-4">
                  "Process automation saved us 25 hours per week. Our team can now focus on high-value activities
                  instead of repetitive tasks."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Lisa Rodriguez</p>
                    <p className="text-sm text-purple-300">Operations Director, ScaleCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose AI Solutions Pro?</h2>
              <p className="text-lg text-purple-200 mb-6">
                We're not just another AI agency. We're your strategic partners in digital transformation, with a proven
                track record of delivering measurable results for businesses like yours.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">5+ Years AI Experience</h3>
                    <p className="text-purple-200">
                      Deep expertise in machine learning, automation, and AI implementation
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">50+ Successful Projects</h3>
                    <p className="text-purple-200">Delivered AI solutions across various industries with proven ROI</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">30-Day Money-Back Guarantee</h3>
                    <p className="text-purple-200">
                      We're confident in our results. If you're not satisfied, get your money back
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20 shadow-2xl shadow-purple-500/10">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-purple-500/30">
                  <Bot className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ready to Transform Your Business?</h3>
                <p className="text-purple-200 mb-6">
                  Book a free 30-minute strategy call to discover how AI can revolutionize your operations
                </p>
                <BookingModal>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 w-full shadow-xl shadow-purple-500/25 border border-purple-400/20"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Your Free Call
                  </Button>
                </BookingModal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-purple-200">Get answers to common questions about our AI solutions</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white/5 backdrop-blur-xl rounded-lg px-6 border border-purple-500/20"
            >
              <AccordionTrigger className="text-left text-white hover:text-purple-300">
                How long does it take to implement an AI solution?
              </AccordionTrigger>
              <AccordionContent className="text-purple-200">
                Most AI solutions can be implemented within 2-4 weeks, depending on complexity. We provide a detailed
                timeline during your strategy call and keep you updated throughout the process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white/5 backdrop-blur-xl rounded-lg px-6 border border-purple-500/20"
            >
              <AccordionTrigger className="text-left text-white hover:text-purple-300">
                What kind of ROI can I expect from AI automation?
              </AccordionTrigger>
              <AccordionContent className="text-purple-200">
                Our clients typically see 3-5x ROI within the first 6 months. This comes from reduced labor costs,
                increased efficiency, and improved customer satisfaction. We'll provide specific projections based on
                your business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white/5 backdrop-blur-xl rounded-lg px-6 border border-purple-500/20"
            >
              <AccordionTrigger className="text-left text-white hover:text-purple-300">
                Do I need technical knowledge to use your AI solutions?
              </AccordionTrigger>
              <AccordionContent className="text-purple-200">
                Not at all! We design user-friendly solutions and provide comprehensive training. Our systems are built
                to be intuitive, and we offer ongoing support to ensure smooth operation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white/5 backdrop-blur-xl rounded-lg px-6 border border-purple-500/20"
            >
              <AccordionTrigger className="text-left text-white hover:text-purple-300">
                What industries do you work with?
              </AccordionTrigger>
              <AccordionContent className="text-purple-200">
                We work with businesses across various industries including healthcare, real estate, e-commerce,
                professional services, and manufacturing. Our solutions are customized to fit your specific industry
                needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white/5 backdrop-blur-xl rounded-lg px-6 border border-purple-500/20"
            >
              <AccordionTrigger className="text-left text-white hover:text-purple-300">
                What ongoing support do you provide?
              </AccordionTrigger>
              <AccordionContent className="text-purple-200">
                We provide 24/7 technical support, regular system updates, performance monitoring, and monthly
                optimization reviews to ensure your AI solutions continue delivering maximum value.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Scale Your Business with AI?</h2>
          <p className="text-xl text-purple-200 mb-8">
            Don't let your competitors get ahead. Book your free strategy call today and discover how AI can transform
            your business operations.
          </p>
          <BookingModal>
            <Button
              size="lg"
              className="bg-gradient-to-r from-white to-purple-100 text-purple-900 hover:from-purple-100 hover:to-white text-lg px-8 py-3 shadow-2xl shadow-purple-500/30 border border-purple-400/20"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Your Free Strategy Call Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </BookingModal>
          <p className="text-purple-300 mt-4 text-sm">
            No commitment required • 30-minute call • Instant calendar booking
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-purple-200">Have questions? We're here to help you succeed with AI</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:hello@aisolutionspro.com" className="text-purple-200 hover:text-purple-100 transition-colors">
                hello@aisolutionspro.com
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-fuchsia-500/25">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+15551234567" className="text-purple-200 hover:text-purple-100 transition-colors">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-500/25">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Book a Call</h3>
              <BookingModal>
                <button className="text-purple-200 hover:text-purple-100 transition-colors cursor-pointer">
                  Schedule instantly online
                </button>
              </BookingModal>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-xl border-t border-purple-500/20 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg shadow-lg shadow-purple-500/25">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI Solutions Pro
              </span>
            </div>
            <div className="text-purple-300 text-center md:text-right">
              <p>&copy; 2025 AI Solutions Pro. All rights reserved.</p>
              <p className="text-sm mt-1">Transforming businesses with intelligent automation</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
