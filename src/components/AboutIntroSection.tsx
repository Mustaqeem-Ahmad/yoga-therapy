import AnimatedSection from "./AnimatedSection";
import aboutImg from "@/assets/about-intro.jpg";

const AboutIntroSection = () => (
  <section id="about" className="bg-background py-24">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row">
      <AnimatedSection direction="left" className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={aboutImg}
            alt="Cozy therapy room"
            className="h-[400px] w-full object-cover md:h-[500px]"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.15} className="w-full md:w-1/2">
        <h2 className="font-heading text-4xl text-foreground md:text-5xl">
          Live a fulfilling life.
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
          Life can be challenging—especially when you're trying to balance your personal
          and professional life. It's easy to feel like you're alone in facing these
          challenges, but I want you to know that I'm here to help.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 border border-foreground px-8 py-3 font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all hover:bg-foreground hover:text-background"
        >
          Get in touch
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutIntroSection;
