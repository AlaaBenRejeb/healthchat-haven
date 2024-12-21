import { Stethoscope, MessageCircle, Heart, UserRound } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "24/7 Patient Support",
    description: "Provide instant responses to patient inquiries around the clock."
  },
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Clinical Assistance",
    description: "Streamline routine clinical tasks and documentation processes."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Improved Care",
    description: "Enhance patient engagement and satisfaction with personalized care."
  },
  {
    icon: <UserRound className="h-6 w-6" />,
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing clinical workflows."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our AI assistant helps you deliver better care while reducing administrative burden
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-white border border-emerald-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
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