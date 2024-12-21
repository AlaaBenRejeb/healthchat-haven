import HeroSection from "@/components/learn-more/HeroSection";
import FeatureSection from "@/components/learn-more/FeatureSection";
import { Link } from "react-router-dom";
import { ArrowRight, Info, MessageCircle, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

// Define types for our data structures
type Step = {
  icon: JSX.Element;
  title: string;
  description: string;
};

type Feature = {
  icon: JSX.Element;
  title: string;
  description: string;
};

type CaseStudy = {
  clinic: string;
  challenge: string;
  solution: string;
  results: string;
};

// Define the data arrays
const steps: Step[] = [
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: "Patient Outreach",
    description: "Patients reach out via chat or phone."
  },
  {
    icon: <Info className="h-8 w-8" />,
    title: "AI Response",
    description: "The chatbot or voice caller answers inquiries, books appointments, or routes urgent calls."
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Staff Focus",
    description: "Your staff stays focused on patient care, while automation handles the rest."
  }
];

const features: Feature[] = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "24/7 Availability",
    description: "Always on, even after office hours."
  },
  {
    icon: <Info className="h-6 w-6" />,
    title: "HIPAA-Compliant",
    description: "Built to protect patient data and privacy."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Fast Setup",
    description: "Be up and running in just a few days."
  }
];

const caseStudies: CaseStudy[] = [
  {
    clinic: "Family Health Clinic",
    challenge: "Overwhelmed staff due to high call volume",
    solution: "Implemented chatbots and voice callers",
    results: "Reduced no-shows by 40%, saved 15+ staff hours weekly"
  },
  {
    clinic: "Dental Care Practice",
    challenge: "Missed patient calls during peak hours",
    solution: "AI voice caller integration",
    results: "95% of patient inquiries resolved without staff intervention"
  }
];

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Navbar />
      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <HeroSection />
        <FeatureSection />
        
        {/* How It Works Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Simple, Seamless, and Effective
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-emerald-600 h-8 w-8" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            See the Difference in Action
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                  {study.clinic}
                </h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-slate-400 mt-1 flex-shrink-0" />
                    <span><strong>Challenge:</strong> {study.challenge}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <MessageCircle className="h-5 w-5 text-slate-400 mt-1 flex-shrink-0" />
                    <span><strong>Solution:</strong> {study.solution}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <BarChart className="h-5 w-5 text-slate-400 mt-1 flex-shrink-0" />
                    <span><strong>Results:</strong> {study.results}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-emerald-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Ready to Learn More About How We Can Help Your Clinic?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a demo or speak to our team to see how our AI-powered solutions can save you time, reduce no-shows, and keep your patients happy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule-demo">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearnMore;
