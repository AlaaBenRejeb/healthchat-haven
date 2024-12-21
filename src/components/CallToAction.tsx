import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-emerald-600 to-sky-600">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Practice?
        </h2>
        <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
          Join leading healthcare providers who are already benefiting from our AI assistant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-emerald-700/20">
            Schedule Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;