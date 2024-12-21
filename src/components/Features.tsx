import { Clock24, Calendar, MessageSquare, Shield, Languages, Clock } from "lucide-react";

const features = [
  {
    icon: <Clock24 className="h-6 w-6" />,
    title: "Never Miss a Call Again",
    description: "Automatically handle patient inquiries, even after hours."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Simplify Scheduling",
    description: "Book, reschedule, or send reminders instantly."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Answer FAQs Automatically",
    description: "From clinic hours to insurance info, patients get answers fast."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure & Private",
    description: "Fully HIPAA-compliant and built to protect sensitive patient data."
  },
  {
    icon: <Languages className="h-6 w-6" />,
    title: "Speak Their Language",
    description: "Multilingual capabilities mean you can serve every patient better."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Save Your Staff Time",
    description: "Free up your team to focus on patient care, not repetitive tasks."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Meet Your New 24/7 Team Member
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here's how our AI Chatbots & Voice Callers transform your practice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;