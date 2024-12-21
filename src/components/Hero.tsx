import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScheduleDemo = () => {
    window.open('https://calendly.com/alaabenrejeb-b/health', '_blank');
  };

  return (
    <section className="pt-32 pb-24 px-4 md:px-6 bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-8">
            <MessageCircle size={16} aria-hidden="true" />
            <Phone size={16} aria-hidden="true" />
            <span className="text-sm font-medium">HIPAA Compliant AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight max-w-4xl">
            Transform Your Clinic with AI-Powered Communication Tools
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl">
            Save time, reduce no-shows, and boost patient satisfaction with 24/7 AI-powered solutions that automate inquiries, bookings, and follow-ups.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-lg"
              onClick={handleScheduleDemo}
              aria-label="Schedule a free demo call"
            >
              Schedule a Free Demo Call
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <p className="text-sm text-slate-600 mt-2">15-minute call. No commitment required.</p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-emerald-100 pt-12">
            <div className="text-center" role="presentation">
              <div className="text-3xl font-bold text-emerald-600">75%</div>
              <div className="text-sm text-slate-600">Time Saved on Calls</div>
            </div>
            <div className="text-center" role="presentation">
              <div className="text-3xl font-bold text-emerald-600">24/7</div>
              <div className="text-sm text-slate-600">Patient Support</div>
            </div>
            <div className="text-center" role="presentation">
              <div className="text-3xl font-bold text-emerald-600">40%</div>
              <div className="text-sm text-slate-600">Fewer No-Shows</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;