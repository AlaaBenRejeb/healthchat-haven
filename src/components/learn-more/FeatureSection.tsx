import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeatureSection = () => {
  const handleScheduleDemo = () => {
    window.open('https://calendly.com/alaabenrejeb-b/health', '_blank');
  };

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
        Smart Solutions for Smarter Patient Care
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <MessageCircle className="h-12 w-12 text-emerald-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Chatbots Only</h3>
          <p className="text-slate-600 mb-6">
            Handle online inquiries and automate appointment scheduling with our intelligent chatbot system.
          </p>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleScheduleDemo}
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="bg-emerald-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <Phone className="h-12 w-12 text-emerald-700 mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Comprehensive AI System</h3>
          <p className="text-slate-600 mb-6">
            Combine chatbots with AI voice callers for seamless automation across all communication channels.
          </p>
          <Button 
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            onClick={handleScheduleDemo}
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;