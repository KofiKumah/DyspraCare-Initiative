import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/data/resources";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Frequently asked questions" };

export default function FaqPage() {
  return (
    <section className="section-pad faq-page-shell">
      <div className="page-shell faq-page-layout">
        <div className="faq-page-copy">
          <p className="eyebrow">Good questions are welcome</p>
          <h1>Helpful answers before you start.</h1>
          <p>
            DyspraCare is an educational screening experience meant to support reflection, not to diagnose or label a child.
          </p>
          <Button asChild>
            <Link href="/screening">
              Begin screening <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="faq-page-list">
          <Accordion type="single" collapsible className="faq-list faq-list-page">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
