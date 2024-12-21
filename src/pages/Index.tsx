import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PainPoints from "@/components/PainPoints";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <PainPoints />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Index;