import Header from "@/components/Header.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import PhilosophySection from "@/components/PhilosophySection.jsx";
import ClassesSection from "@/components/ClassesSection.jsx";
import BenefitsSection from "@/components/BenefitsSection.jsx";
import InstructorSection from "@/components/InstructorSection.jsx";
import FAQSection from "@/components/FAQSection.jsx";
import CredentialsSection from "@/components/CredentialsSection.jsx";
import CTASection from "@/components/CTASection.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <PhilosophySection />
      <ClassesSection />
      <BenefitsSection />
      <InstructorSection />
      <FAQSection />
      <CredentialsSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
