import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { RevealOnView } from './RevealOnView';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section id="faq" className="relative overflow-hidden py-32 md:py-40 bg-canvas">
      <div className="absolute inset-0 grain-overlay" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <RevealOnView className="max-w-md">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-light tracking-[-0.02em] text-white sm:text-5xl">
            Common questions
          </h2>
          <p className="mt-5 text-white/45">
            Short answers for teams evaluating ClinicalOS.
          </p>
        </RevealOnView>

        <RevealOnView delay={0.1}>
          <Accordion type="single" collapsible className="rounded-[2.5rem] border border-white/10 bg-surface px-6 py-4 shadow-2xl shadow-black/20 sm:px-8">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="border-white/8"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-light text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-6 text-sm leading-relaxed text-white/50">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealOnView>
      </div>
    </section>
  );
}
