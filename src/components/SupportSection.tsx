import AnimatedSection from "./AnimatedSection";
import supportImg from "@/assets/support-decor.jpg";

const challenges = [
  "Persistent feelings of sadness or hopelessness",
  "Trouble focusing or making decisions",
  "Difficulty maintaining relationships",
  "Feeling constantly exhausted or unmotivated",
  "A pervasive sense of being overwhelmed",
];

const SupportSection = () => (
  <section className="bg-background py-24">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row">
      <AnimatedSection direction="left" className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={supportImg}
            alt="Decorative dried flowers"
            className="h-[400px] w-full object-cover"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.15} className="w-full md:w-1/2">
        <h2 className="font-heading text-3xl text-foreground md:text-4xl">
          You don't have to do this all <em>alone</em>.
        </h2>
        <p className="mt-4 font-body text-sm text-muted-foreground">
          If you are facing any of these, there's hope:
        </p>
        <ul className="mt-6 space-y-3">
          {challenges.map((c) => (
            <li key={c} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
              <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-6 font-body text-sm leading-relaxed text-muted-foreground">
          With empathy and guidance, we'll work together to navigate the challenges life throws your way.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 border border-foreground px-8 py-3 font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all hover:bg-foreground hover:text-background"
        >
          Work with me
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default SupportSection;
