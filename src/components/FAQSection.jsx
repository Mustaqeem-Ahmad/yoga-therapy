import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection.jsx";
import faqImg from "@/assets/faq-decor.jpg";

const faqs = [
  { q: "Do I need experience to join?", a: "Not at all! Our classes welcome complete beginners. We offer modifications for every pose so you can practice at your own level and pace." },
  { q: "What should I bring?", a: "Just yourself and comfortable clothing. We provide mats, blocks, straps, and bolsters. Feel free to bring your own mat if you prefer." },
  { q: "How long are the classes?", a: "Most classes run 60 minutes, with our Yin sessions extending to 75 minutes. We also offer 30-minute express flows during lunch hours." },
];

const FAQSection = () => (
  <section id="faq" className="bg-background py-24">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row">
      <AnimatedSection direction="left" className="w-full md:w-1/2">
        <div className="flex justify-center">
          <img
            src={faqImg}
            alt="Yoga props arrangement"
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
