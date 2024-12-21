import { AlertCircle, Clock, Battery, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PainPoints = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Overwhelmed by Patient Inquiries and Missed Appointments?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Every day, your staff spends hours answering calls, handling appointment requests, and repeating the same information. Patients are frustrated by long wait times, no-shows are costing your practice revenue, and your team is exhausted.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Let AI Take the Load Off
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
            What's the Real Cost of Keeping Things as They Are?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">
                Patient Frustration
              </h4>
              <p className="text-slate-600">
                Frustrated patients may look elsewhere for care when they can't get timely responses.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                <Battery className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">
                Staff Burnout
              </h4>
              <p className="text-slate-600">
                Burnt-out staff are harder to retain and replace, affecting care quality.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                <DollarSign className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">
                Lost Revenue
              </h4>
              <p className="text-slate-600">
                No-shows and missed follow-ups hurt your revenue every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;