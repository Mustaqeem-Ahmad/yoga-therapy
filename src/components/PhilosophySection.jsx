import AnimatedSection from "./AnimatedSection.jsx";
import aboutImg from "@/assets/about-intro.jpg";

const PhilosophySection = () => (
  <section id="about" className="bg-background py-24">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row">
      <AnimatedSection direction="left" className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={aboutImg}
            alt="Peaceful yoga studio interior"
            className="h-[400px] w-full object-cover md:h-[500px]"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.15} className="w-full md:w-1/2">
        <h2 className="font-heading text-4xl text-foreground md:text-5xl">
          Move with intention.
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
          At Sora Flow, we believe yoga is more than a workout—it's a practice of self-discovery.
          Our studio offers a sanctuary where you can slow down, breathe deeply, and reconnect
          with your body and mind. Whether you're stepping onto the mat for the first time or
          deepening an existing practice, you belong here.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 border border-foreground px-8 py-3 font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all hover:bg-foreground hover:text-background"
        >
          Explore classes
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default PhilosophySection;
