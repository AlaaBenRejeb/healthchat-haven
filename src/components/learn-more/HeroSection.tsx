import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleScheduleDemo = () => {
    window.open('https://calendly.com/alaabenrejeb-b/health', '_blank');
  };

  return (
    <section className="text-center mb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
        No More Missed Calls. No More Frustrated Patients.
      </h1>
      <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
        Our AI chatbots and voice callers work 24/7 to ensure no inquiry goes unanswered and no appointment is missed.
      </p>
      <Button 
        size="lg" 
        className="bg-emerald-600 hover:bg-emerald-700"
        onClick={handleScheduleDemo}
      >
        Get Started Today
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </section>
  );
};

export default HeroSection;