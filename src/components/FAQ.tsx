import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly can we implement your AI solution?",
    answer: "Our system can be fully implemented within 2-3 business days. We provide comprehensive documentation and setup guides to ensure a smooth transition for your team."
  },
  {
    question: "Is your system HIPAA compliant?",
    answer: "Yes, our platform is fully HIPAA compliant with end-to-end encryption, secure data storage, and strict access controls to protect patient information."
  },
  {
    question: "What kind of technical support do you provide?",
    answer: "We offer 24/7 technical support through our help center, email support, and regular system updates to ensure optimal performance."
  },
  {
    question: "Can we integrate this with our existing systems?",
    answer: "Yes, our AI solutions are designed to integrate seamlessly with most electronic health records (EHR) systems and practice management software."
  },
  {
    question: "What happens if we need to cancel?",
    answer: "We offer a flexible, no-commitment policy. You can cancel at any time without any hidden fees or long-term contracts."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-6 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-4xl">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-emerald-100 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-emerald-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-slate-800">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                )}
              </button>
              {openIndex === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="p-4 bg-emerald-50"
                >
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;