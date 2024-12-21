import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-8">
            <MessageCircle size={16} />
            <Phone size={16} />
            <span className="text-sm font-medium">HIPAA Compliant AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight max-w-4xl">
            Transform Your Practice with AI-Powered Patient Communication
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl">
            Reduce staff workload by 75% while improving patient satisfaction. 
            Our AI handles appointments, inquiries, and follow-ups 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-emerald-100 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">98%</div>
              <div className="text-sm text-slate-600">Patient Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">24/7</div>
              <div className="text-sm text-slate-600">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">75%</div>
              <div className="text-sm text-slate-600">Staff Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;