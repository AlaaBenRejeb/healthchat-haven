import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We started with chatbots to handle FAQs, and it was a game-changer. Adding voice callers saved us even more time.",
    author: "Dr. Emily Wong",
    role: "Family Practice",
    rating: 5
  },
  {
    quote: "Patients love the instant responses, and we've seen a 40% drop in no-shows since implementing the system.",
    author: "Sarah Patel",
    role: "Clinic Manager",
    rating: 5
  },
  {
    quote: "The implementation was seamless, and our staff can finally focus on what matters most - patient care.",
    author: "Dr. Michael Chen",
    role: "Medical Director",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Trusted by Leading Healthcare Providers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how healthcare providers are transforming their practices with our AI solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-slate-800">{testimonial.author}</div>
                <div className="text-sm text-slate-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;