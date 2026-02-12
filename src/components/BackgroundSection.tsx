import AnimatedSection from "./AnimatedSection";

const credentials = [
  {
    title: "Education",
    text: "Master of Arts in Clinical Psychology from the University of Minnesota, with a focus on evidence-based therapeutic approaches.",
  },
  {
    title: "Licensure",
    text: "Licensed Professional Clinical Counselor (LPCC) in the state of Minnesota, maintaining all continuing education requirements.",
  },
  {
    title: "Certifications",
    text: "Certified in Cognitive Behavioral Therapy (CBT), EMDR, and Mindfulness-Based Stress Reduction (MBSR).",
  },
];

const BackgroundSection = () => (
  <section className="bg-card py-24">
    <div className="mx-auto max-w-6xl px-6">
      <AnimatedSection>
        <h2 className="text-center font-heading text-3xl text-foreground">
          My Professional Background
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

export default BackgroundSection;
