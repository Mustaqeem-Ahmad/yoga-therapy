import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutIntroSection from "@/components/AboutIntroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import SupportSection from "@/components/SupportSection";
import AboutMeSection from "@/components/AboutMeSection";
import FAQSection from "@/components/FAQSection";
import BackgroundSection from "@/components/BackgroundSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <AboutIntroSection />
      <SpecialtiesSection />
      <SupportSection />
      <AboutMeSection />
      <FAQSection />
      <BackgroundSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
