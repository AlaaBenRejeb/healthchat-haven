import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import SecuritySection from "@/components/SecuritySection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="features">
        <PainPoints />
        <Solutions />
        <Features />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="security">
        <SecuritySection />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="cta">
        <CallToAction />
      </div>
    </main>
  );
};

export default Index;