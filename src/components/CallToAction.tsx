import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const handleScheduleDemo = () => {
    window.open('https://calendly.com/alaabenrejeb-b/health', '_blank');
  };

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-emerald-600 to-emerald-500">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Clinic?
        </h2>
        <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
          Stop the endless cycle of patient calls, no-shows, and staff burnout. Schedule a call today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg"
            onClick={handleScheduleDemo}
          >
            Schedule a Free Demo Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;