import AnimatedSection from "./AnimatedSection";
import specialty1 from "@/assets/specialty-1.jpg";
import specialty2 from "@/assets/specialty-2.jpg";
import specialty3 from "@/assets/specialty-3.jpg";

const specialties = [
  {
    title: "Self-Esteem",
    description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: specialty1,
  },
  {
    title: "Relationships",
    description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: specialty2,
  },
  {
    title: "Burnout",
    description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: specialty3,
  },
];

const SpecialtiesSection = () => (
  <section id="specialties" className="bg-card py-24">
    <div className="mx-auto max-w-6xl px-6">
      <AnimatedSection>
        <p className="font-body text-xs font-medium tracking-[0.3em] uppercase text-primary">
          My Specialties
        </p>
      </AnimatedSection>

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {specialties.map((item, i) => (
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

export default SpecialtiesSection;
