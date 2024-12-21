import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import SecuritySection from "@/components/SecuritySection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainPoints />
      <Solutions />
      <Features />
      <Testimonials />
      <SecuritySection />
      <FAQ />
      <CallToAction />
    </main>
  );
};

export default Index;