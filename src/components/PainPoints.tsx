import { AlertCircle, Clock, Battery, DollarSign } from "lucide-react";

const painPoints = [
  {
    icon: <AlertCircle className="h-6 w-6" />,
    title: "Your Team Is Swamped",
    description: "From endless calls about appointment availability to answering the same FAQs, managing patient communication takes time—and it's eating into your team's day."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Patient Frustration",
    description: "Patients are frustrated with long wait times. Your staff is burning out. And no-shows are costing your practice valuable revenue."
  },
  {
    icon: <Battery className="h-6 w-6" />,
    title: "Staff Burnout",
    description: "How long can this keep going before it impacts your care? Let AI take the load off your shoulders and help your team breathe easier."
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Common Challenges We Solve
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let's address the daily struggles your practice faces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;