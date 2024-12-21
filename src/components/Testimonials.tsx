import { UserRound, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our team used to spend hours every day answering calls. Now, patients book appointments themselves, and we finally have time to breathe.",
    author: "Dr. Ahmed Saeed",
    role: "Clinic Owner"
  },
  {
    quote: "Patients love the instant responses. They don't need to wait on hold anymore, and we've seen fewer no-shows thanks to the reminders.",
    author: "Sarah Patel",
    role: "Practice Manager"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Your Peers Are Saying
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how other healthcare providers are transforming their practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="h-10 w-10 text-emerald-500 mb-6" />
              <p className="text-lg text-slate-600 italic mb-8">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <UserRound className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;