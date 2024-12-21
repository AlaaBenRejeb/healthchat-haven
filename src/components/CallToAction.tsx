import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-emerald-600 to-emerald-500">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Make Patient Communication Effortless?
        </h2>
        <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
          We'll handle the busywork so your team can focus on delivering great care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg">
            Try it free—no commitment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;