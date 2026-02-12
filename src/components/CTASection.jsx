import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="bg-primary py-24">
    <div className="mx-auto max-w-3xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85 }}
      >
        <h2 className="font-heading text-4xl text-primary-foreground md:text-5xl">
          Begin your journey.
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-primary-foreground/80">
          Your mat is waiting. Whether you're seeking strength, stillness, or something in
          between, we'd love to welcome you to Sora Flow. Book your first class today.
        </p>
        <a
          href="mailto:hello@soraflow.com"
          className="mt-8 inline-flex items-center gap-2 border border-primary-foreground px-8 py-3 font-body text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
        >
          Book a class
          <ArrowRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
