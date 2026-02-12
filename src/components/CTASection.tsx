import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="bg-accent py-24">
    <div className="mx-auto max-w-3xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-heading text-4xl text-accent-foreground md:text-5xl">
          Get started today.
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-accent-foreground/80">
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>
        <a
          href="mailto:hello@terrabloom.com"
          className="mt-8 inline-flex items-center gap-2 border border-accent-foreground px-8 py-3 font-body text-xs font-medium tracking-[0.2em] uppercase text-accent-foreground transition-all hover:bg-accent-foreground hover:text-accent"
        >
          Book a session
          <ArrowRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
