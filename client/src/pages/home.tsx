import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import FeaturesSection from "@/components/features-section";
import DashboardPreview from "@/components/dashboard-preview";
import TestimonialsSection from "@/components/testimonials-section";
import IntegrationsSection from "@/components/integrations-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 leading-relaxed">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <DashboardPreview />
        <TestimonialsSection />
        <IntegrationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
