import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/constants/landing-data";

export const FAQSection = ()=> {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Questions
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-[32px]">
          Frequently asked questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {FAQ_ITEMS.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="border-border">
            <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
