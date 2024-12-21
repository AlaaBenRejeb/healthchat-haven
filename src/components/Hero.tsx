import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-emerald-50 via-sky-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
            <MessageCircle size={16} />
            <span className="text-sm font-medium">AI-Powered Healthcare Assistant</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Transform Your Clinical Practice<br />with AI-Powered Support
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
            Streamline patient communication, automate routine tasks, and enhance care delivery
            with our intelligent healthcare chatbot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Schedule Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;