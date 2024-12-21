import { Check } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
          Real Clinics. Real Results.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Family Health Clinic</h3>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Challenge:</h4>
              <p className="text-slate-600">High call volume overwhelmed staff and led to long patient wait times.</p>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Results:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>40% fewer no-shows</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Saved 15+ hours of staff time per week</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Patient satisfaction increased by 25%</span>
                </li>
              </ul>
            </div>
            <blockquote className="italic text-slate-600">
              "The chatbot has been a lifesaver for our team. Patients love the instant responses, and we've seen a huge drop in no-shows."
              <footer className="mt-2 font-semibold not-italic">— Dr. S*** P***, Clinic Owner</footer>
            </blockquote>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Dental Care Practice</h3>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Challenge:</h4>
              <p className="text-slate-600">Missed patient calls during peak hours led to lost revenue.</p>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Results:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>95% of inquiries resolved automatically</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>30% increase in after-hours bookings</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Staff stress levels significantly reduced</span>
                </li>
              </ul>
            </div>
            <blockquote className="italic text-slate-600">
              "The voice caller feels like an extra team member. It handles calls professionally and saves us so much time."
              <footer className="mt-2 font-semibold not-italic">— M*** L***, Practice Manager</footer>
            </blockquote>
          </div>

          <div className="bg-white p-8 rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Specialty Care Center</h3>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Challenge:</h4>
              <p className="text-slate-600">Managing multilingual patient inquiries was time-consuming.</p>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Results:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Patient engagement improved by 50%</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Streamlined multilingual communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>80% of inquiries automated</span>
                </li>
              </ul>
            </div>
            <blockquote className="italic text-slate-600">
              "CareBridgeAI's multilingual support has been a game-changer. We're able to serve all our patients better."
              <footer className="mt-2 font-semibold not-italic">— Dr. A*** K***, Specialist</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;