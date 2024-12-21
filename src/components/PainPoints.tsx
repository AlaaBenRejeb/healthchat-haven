import { AlertCircle, Clock, Battery, DollarSign } from "lucide-react";

const painPoints = [
  {
    icon: <AlertCircle className="h-6 w-6" />,
    title: "Your Team is Swamped",
    description: "Phones are constantly ringing, response times are slipping, and staff are overwhelmed with repetitive tasks, taking focus away from care."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Patients are Frustrated",
    description: "Long wait times, missed appointments, and delayed responses are leading to patient dissatisfaction and lost revenue."
  },
  {
    icon: <Battery className="h-6 w-6" />,
    title: "Staff Burnout",
    description: "Burnt-out staff lead to high turnover, frustrated patients look elsewhere for care, and missed appointments mean lost revenue."
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Lost Revenue",
    description: "The longer you wait to automate, the more revenue you lose through missed appointments and inefficient scheduling."
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What's at Stake?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Managing patient communication shouldn't feel like a full-time job
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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