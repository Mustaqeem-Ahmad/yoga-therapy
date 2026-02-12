import AnimatedSection from "./AnimatedSection";
import portraitImg from "@/assets/about-portrait.jpg";

const AboutMeSection = () => (
  <section className="bg-card py-24">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row-reverse">
      <AnimatedSection direction="right" className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={portraitImg}
            alt="Therapist portrait"
            className="h-[450px] w-full object-cover"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.15} className="w-full md:w-1/2">
        <h2 className="font-heading text-4xl text-foreground md:text-5xl">
          Hi, I'm Terra.
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
          I'm committed to providing a safe and supportive environment where we can
          explore your thoughts, feelings, and behaviors. With empathy and guidance,
          we'll work together to navigate the challenges life throws your way.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 border border-foreground px-8 py-3 font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all hover:bg-foreground hover:text-background"
        >
          Let's chat
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutMeSection;
