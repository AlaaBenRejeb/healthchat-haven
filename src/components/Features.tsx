import { Clock, Calendar, MessageSquare, Shield, Languages, Lock } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Fast Setup",
    description: "Be up and running in days, not weeks. Our system integrates seamlessly with your existing workflow."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Appointment Automation",
    description: "Reduce no-shows with automated booking, rescheduling, and reminder systems."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Natural Conversations",
    description: "AI-powered assistants that sound human and understand context for better patient experience."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "HIPAA Compliant",
    description: "Your patients' privacy is guaranteed with our secure, compliant platform."
  },
  {
    icon: <Languages className="h-6 w-6" />,
    title: "Multilingual Support",
    description: "Reach more patients in their preferred language with our multilingual capabilities."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Scalable Solution",
    description: "Perfect for practices of any size, from small clinics to large healthcare systems."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transform your practice with powerful features designed for healthcare providers
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