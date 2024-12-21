import { AlertCircle, Battery, DollarSign, ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const PainPoints = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/alaabenrejeb-b/health', '_blank');
  };

  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Your Team is Drowning in Patient Calls—Let's Fix That.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Every day, your team handles endless calls about clinic hours, insurance, and appointment availability. Time-consuming rescheduling and reminders. Patients frustrated with long waits and unanswered questions.
          </p>
          <Button 
            onClick={handleBookCall}
            className="bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg font-semibold"
          >
            <PhoneCall className="w-5 h-5 mr-2" />
            Book Your Free Relief Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
            What's the Real Cost of Doing Nothing?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">
                Lost Patients
              </h4>
              <p className="text-slate-600">
                Patients expect fast responses—and they'll leave if they don't get them.
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
                Burned-out staff mean mistakes, high turnover, and low morale.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                <DollarSign className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">
                Revenue Impact
              </h4>
              <p className="text-slate-600">
                No-shows and inefficiency hurt your bottom line daily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;