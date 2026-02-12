import AnimatedSection from "./AnimatedSection.jsx";
import portraitImg from "@/assets/about-portrait.jpg";

const InstructorSection = () => (
  <section className="bg-card py-24">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row-reverse">
      <AnimatedSection direction="right" className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={portraitImg}
            alt="Yoga instructor Sora"
            className="h-[450px] w-full object-cover"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.15} className="w-full md:w-1/2">
        <h2 className="font-heading text-4xl text-foreground md:text-5xl">
          Hi, I'm Sora.
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
          With over a decade of teaching experience, I founded Sora Flow to create a space
          where everyone feels welcome on the mat. My approach blends traditional yogic
          philosophy with modern movement science, offering classes that are both deeply
          grounding and playfully challenging.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 border border-foreground px-8 py-3 font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all hover:bg-foreground hover:text-background"
        >
          Practice with me
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default InstructorSection;
