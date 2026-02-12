import AnimatedSection from "./AnimatedSection.jsx";

const credentials = [
  {
    title: "Training",
    text: "500-hour Registered Yoga Teacher (RYT-500) through Yoga Alliance, with advanced training in Vinyasa, Yin, and Pranayama.",
  },
  {
    title: "Experience",
    text: "Over 3,000 hours of teaching across studios, retreats, and private sessions. Trained in India, Bali, and the United States.",
  },
  {
    title: "Philosophy",
    text: "Rooted in the Ashtanga lineage with a modern, inclusive approach. Certified in trauma-informed yoga and adaptive movement.",
  },
];

const CredentialsSection = () => (
  <section className="bg-card py-24">
    <div className="mx-auto max-w-6xl px-6">
      <AnimatedSection>
        <h2 className="text-center font-heading text-3xl text-foreground">
          My Teaching Background
        </h2>
      </AnimatedSection>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {credentials.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.12}>
            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="font-heading text-xl text-foreground">{item.title}</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CredentialsSection;
