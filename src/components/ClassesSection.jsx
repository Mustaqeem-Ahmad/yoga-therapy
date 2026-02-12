import AnimatedSection from "./AnimatedSection.jsx";
import specialty1 from "@/assets/specialty-1.jpg";
import specialty2 from "@/assets/specialty-2.jpg";
import specialty3 from "@/assets/specialty-3.jpg";

const classes = [
  {
    title: "Vinyasa",
    description: "A dynamic, breath-linked flow that builds strength, flexibility, and focus. Perfect for those who love to move.",
    image: specialty1,
  },
  {
    title: "Yin",
    description: "A slow, meditative practice with long-held poses that target deep connective tissues and promote profound relaxation.",
    image: specialty2,
  },
  {
    title: "Breathwork",
    description: "Harness the power of conscious breathing to calm the nervous system, increase energy, and cultivate inner stillness.",
    image: specialty3,
  },
];

const ClassesSection = () => (
  <section id="classes" className="bg-card py-24">
    <div className="mx-auto max-w-6xl px-6">
      <AnimatedSection>
        <p className="font-body text-xs font-medium tracking-[0.3em] uppercase text-primary">
          Our Classes
        </p>
      </AnimatedSection>

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {classes.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.15}>
            <div className="group">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-heading text-2xl text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ClassesSection;
