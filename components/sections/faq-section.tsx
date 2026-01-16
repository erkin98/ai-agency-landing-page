import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionWrapper, SectionHeader } from "@/components/shared"
import { FAQ_ITEMS, SECTION_CONTENT } from "@/lib/constants"

/**
 * FAQ section with expandable accordion items
 */
export function FAQSection() {
  return (
    <SectionWrapper id="faq" narrow>
      <SectionHeader
        title={SECTION_CONTENT.faq.title}
        description={SECTION_CONTENT.faq.description}
      />

      <Accordion type="single" collapsible className="space-y-4">
        {FAQ_ITEMS.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="bg-white/5 backdrop-blur-xl rounded-lg px-6 border border-purple-500/20"
          >
            <AccordionTrigger className="text-left text-white hover:text-purple-300">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-purple-200">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  )
}
