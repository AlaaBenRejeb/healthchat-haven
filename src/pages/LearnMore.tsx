import { ArrowLeft, ArrowRight, MessageCircle, Phone, Shield, Clock, Users, ChartBar, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const LearnMore = () => {
  const steps = [
    {
      title: "Patient Reaches Out",
      description: "Via chat or phone, patients can connect 24/7",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "AI Handles Request",
      description: "Automated responses for FAQs and appointments",
      icon: <MessageCircle className="h-8 w-8" />
    },
    {
      title: "Staff Stays Focused",
      description: "Your team can focus on in-person patient care",
      icon: <Check className="h-8 w-8" />
    }
  ];

  const features = [
    {
      title: "24/7 Availability",
      description: "Always on, even after office hours",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "HIPAA-Compliant",
      description: "Built to protect patient data and privacy",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Fast Analytics",
      description: "Track and improve patient interactions",
      icon: <ChartBar className="h-6 w-6" />
    }
  ];

  const caseStudies = [
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
            Discover How AI Chatbots and Voice Callers Can Transform Your Clinic
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Learn everything you need to know about our solutions, how they work, and the benefits they bring to your practice.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Schedule a Free Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        {/* What We Offer */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Smart Solutions for Smarter Patient Care
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <MessageCircle className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Chatbots Only</h3>
              <p className="text-slate-600 mb-6">
                Handle online inquiries and automate appointment scheduling with our intelligent chatbot system.
              </p>
              <Button variant="outline" className="w-full">
                Learn More About Chatbots
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="bg-emerald-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Phone className="h-12 w-12 text-emerald-700 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Comprehensive AI System</h3>
              <p className="text-slate-600 mb-6">
                Combine chatbots with AI voice callers for seamless automation across all communication channels.
              </p>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Explore Full AI System
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
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
                    <ChartBar className="h-5 w-5 text-slate-400 mt-1 flex-shrink-0" />
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
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearnMore;