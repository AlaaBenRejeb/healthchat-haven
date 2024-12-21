import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="text-center mb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
        Discover How AI Chatbots and Voice Callers Can Transform Your Clinic
      </h1>
      <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
        Learn everything you need to know about our solutions, how they work, and the benefits they bring to your practice.
      </p>
      <Link to="/schedule-demo">
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
          Schedule a Free Demo
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </section>
  );
};

export default HeroSection;