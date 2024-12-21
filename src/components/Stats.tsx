import { Users, Clock, Hospital, Award } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    value: "10,000+",
    label: "Patients Served",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    value: "24/7",
    label: "Support Available",
  },
  {
    icon: <Hospital className="h-6 w-6" />,
    value: "500+",
    label: "Clinics Using Our AI",
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "98%",
    label: "Satisfaction Rate",
  },
];

const Stats = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-emerald-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;