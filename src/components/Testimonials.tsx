import { UserRound } from "lucide-react";

const testimonials = [
  {
    quote: "The AI assistant has dramatically reduced our administrative workload while improving patient satisfaction.",
    author: "Dr. Sarah Johnson",
    role: "Family Practice Physician"
  },
  {
    quote: "Implementation was smooth and the impact on our daily operations was immediate and positive.",
    author: "Michael Chen",
    role: "Clinic Director"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what our clients say about their experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg border border-slate-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <UserRound className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-slate-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;