import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";
import faqImg from "@/assets/faq-decor.jpg";

const faqs = [
  { q: "Do you take insurance?", a: "Yes, I accept most major insurance plans. Please contact me to verify your specific coverage and discuss any out-of-pocket costs." },
  { q: "What are your rates?", a: "My standard session rate is competitive for the Minneapolis area. I also offer a sliding scale for those who qualify. Let's discuss what works best for you." },
  { q: "Do you have any openings?", a: "I currently have limited availability for new clients. Please reach out and we can find a time that works for both of us." },
];

const FAQSection = () => (
  <section id="faq" className="bg-background py-24">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row">
      <AnimatedSection direction="left" className="w-full md:w-1/2">
        <div className="flex justify-center">
          <img
            src={faqImg}
            alt="Decorative wreath"
            className="h-80 w-80 rounded-full object-cover"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.15} className="w-full md:w-1/2">
        <h2 className="font-heading text-4xl text-foreground">FAQs</h2>
        <Accordion type="single" collapsible className="mt-8 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="font-heading text-lg text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
