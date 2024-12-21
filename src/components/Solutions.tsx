import { MessageCircle, Phone, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Solutions = () => {
  const handleScheduleDemo = () => {
    window.open('https://calendly.com/alaabenrejeb-b/health', '_blank');
  };

  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Choose the Right AI Solution for Your Clinic
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Schedule a call to find the perfect plan for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chatbots Only */}
          <div className="p-8 bg-white rounded-xl border-2 border-emerald-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Chatbots Only</h3>
            <p className="text-slate-600 mb-6">
              Perfect for clinics needing a quick, affordable way to improve patient communication.
            </p>
            <ul className="space-y-4 mb-8">
              {["24/7 Availability", "Appointment Automation", "FAQ Management"].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700">
                  <Check className="h-5 w-5 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
              className="w-full bg-emerald-600 hover:bg-emerald-700"
              onClick={handleScheduleDemo}
            >
              Schedule a Demo Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Comprehensive AI System */}
          <div className="p-8 bg-emerald-50 rounded-xl border-2 border-emerald-200 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 mb-6">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Comprehensive AI System</h3>
            <p className="text-slate-600 mb-6">
              For clinics ready to automate everything from chat to calls.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Everything in Chatbots",
                "Voice Callers",
                "End-to-End Integration",
                "Natural Conversations"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700">
                  <Check className="h-5 w-5 text-emerald-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
              className="w-full bg-emerald-700 hover:bg-emerald-800"
              onClick={handleScheduleDemo}
            >
              Schedule a Demo Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;