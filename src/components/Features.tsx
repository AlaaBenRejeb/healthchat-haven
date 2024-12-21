import { Clock, Calendar, MessageSquare, Shield, Languages, Lock } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Answer FAQs Instantly",
    description: "Give patients the information they need, anytime. Available 24/7, even when your clinic is closed."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Automate Scheduling",
    description: "Let patients book, reschedule, or get reminders 24/7 without staff intervention."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Handle Phone Calls",
    description: "AI voice callers manage high volumes without overwhelming your team."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "HIPAA Compliant",
    description: "Your patients' privacy is guaranteed with our secure, compliant platform."
  },
  {
    icon: <Languages className="h-6 w-6" />,
    title: "Multilingual Support",
    description: "Serve diverse patient populations in their preferred language."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Focus on Care",
    description: "Free your staff from repetitive tasks so they can focus on patient care."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Your AI Assistant for Smarter Patient Care
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you need just chatbots or a full AI system, we've got you covered
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article 
              key={index}
              className="p-6 rounded-xl bg-white border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;