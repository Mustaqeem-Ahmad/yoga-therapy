import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden bg-background pt-20">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 md:flex-row md:py-24">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative w-full max-w-md md:w-1/2"
      >
        <div className="arch-rounded overflow-hidden">
          <img
            src={heroImg}
            alt="Yoga practitioner in tree pose"
            className="h-[500px] w-full object-cover md:h-[650px]"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
        className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left"
      >
        <h1 className="font-heading text-5xl leading-tight text-foreground md:text-7xl">
          Find your
          <br />
          <em>flow</em>
        </h1>
        <p className="mt-6 font-body text-lg text-muted-foreground">
          Yoga classes for all levels in a serene, welcoming studio.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 border border-foreground px-8 py-3 font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all hover:bg-foreground hover:text-background"
        >
          Begin your journey
          <ArrowRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
