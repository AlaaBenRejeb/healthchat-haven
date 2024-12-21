import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-8">
            <MessageCircle size={16} />
            <span className="text-sm font-medium">AI-Powered Healthcare Assistant</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Overwhelmed by Patient Calls<br />and Repetitive Questions?
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl">
            Our AI Chatbots & Voice Callers handle it for you—so you can focus on care, not calls.
            <span className="block mt-4 text-lg md:text-xl">
              From Appointment Bookings to Patient Questions—We've Got You Covered 24/7.
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg">
              Try It Risk-Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg">
              Your virtual assistant is just a click away
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;