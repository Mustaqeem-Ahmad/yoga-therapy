import AnimatedSection from "./AnimatedSection.jsx";
import supportImg from "@/assets/support-decor.jpg";

const benefits = [
  "Reduce stress and quiet a busy mind",
  "Build strength, flexibility, and balance",
  "Improve sleep quality and daily energy",
  "Cultivate mindfulness and self-awareness",
  "Connect with a supportive community",
];

const BenefitsSection = () => (
  <section className="bg-background py-24">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row">
      <AnimatedSection direction="left" className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={supportImg}
            alt="Hands in prayer position"
            className="h-[400px] w-full object-cover"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.15} className="w-full md:w-1/2">
        <h2 className="font-heading text-3xl text-foreground md:text-4xl">
          Your practice, your <em>transformation</em>.
        </h2>
        <p className="mt-4 font-body text-sm text-muted-foreground">
          Yoga meets you where you are and takes you where you need to go:
        </p>
        <ul className="mt-6 space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
              <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-6 font-body text-sm leading-relaxed text-muted-foreground">
          Every class is designed to nurture both body and spirit, leaving you feeling grounded and renewed.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 border border-foreground px-8 py-3 font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all hover:bg-foreground hover:text-background"
        >
          Start your practice
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default BenefitsSection;
