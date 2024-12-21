import { ArrowRight, Clock, Calendar, MessageCircle, Shield, Languages, Check, AlertCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/learn-more/TestimonialsSection";

const LearnMore = () => {
  const handleScheduleDemo = () => {
    window.open('https://calendly.com/alaabenrejeb-b/health', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Discover How CareBridgeAI Simplifies Patient Communication
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Learn how our AI-powered chatbots and voice callers automate inquiries, appointments, and follow-ups—giving your team more time to focus on patient care.
          </p>
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={handleScheduleDemo}
          >
            Schedule a Call Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Your Staff is Overwhelmed, and Patients Are Frustrated
            </h2>
            <div className="max-w-3xl mx-auto mb-8">
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-emerald-600 mt-1" />
                  <span>Endless calls about clinic hours, insurance, and availability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-emerald-600 mt-1" />
                  <span>Time-consuming manual appointment scheduling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-emerald-600 mt-1" />
                  <span>No-shows and missed follow-ups that hurt your bottom line.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-6">
                Patients expect fast, accurate responses. Without automation, you risk losing them to competitors.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={handleScheduleDemo}
            >
              Let's Fix This Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
            CareBridgeAI in Action
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <MessageCircle className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Patients Reach Out</h3>
              <p className="text-slate-600">
                Via chat or phone, any time of day.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Phone className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">AI Responds Instantly</h3>
              <p className="text-slate-600">
                Answering FAQs, booking appointments, or routing urgent cases.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Check className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Your Team Stays Focused</h3>
              <p className="text-slate-600">
                Free from repetitive tasks, your staff can prioritize patient care.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={handleScheduleDemo}
            >
              Schedule a Call to See It in Action
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
            What Makes CareBridgeAI Stand Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <Clock className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-slate-600">Always-on communication, even after office hours.</p>
            </div>
            <div className="p-6 rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <Calendar className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automated Scheduling</h3>
              <p className="text-slate-600">Book and reschedule appointments instantly.</p>
            </div>
            <div className="p-6 rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <Phone className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Voice Callers</h3>
              <p className="text-slate-600">Handle phone calls with natural, human-like AI.</p>
            </div>
            <div className="p-6 rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <Languages className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
              <p className="text-slate-600">Serve diverse patient populations effortlessly.</p>
            </div>
            <div className="p-6 rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <Shield className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">HIPAA-Compliant</h3>
              <p className="text-slate-600">Built to protect patient privacy.</p>
            </div>
            <div className="p-6 rounded-xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <Check className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
              <p className="text-slate-600">Be up and running in days, not weeks.</p>
            </div>
          </div>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={handleScheduleDemo}
            >
              Talk to an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
            Two Options to Meet Your Needs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <MessageCircle className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Chatbots Only</h3>
              <p className="text-slate-600 mb-6">
                Perfect for clinics looking to improve online communication.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Instant responses to FAQs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Automated appointment booking and reminders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Affordable and easy to implement</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleScheduleDemo}
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
              <Phone className="h-12 w-12 text-emerald-700 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Comprehensive AI System</h3>
              <p className="text-slate-600 mb-6">
                The ultimate solution for total communication automation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Everything in Chatbots PLUS...</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>AI-powered voice callers to manage phone inquiries</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Seamless integration with your existing systems</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                onClick={handleScheduleDemo}
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
            Your Questions, Answered
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How long does setup take?</h3>
              <p className="text-slate-600">Most clinics are up and running in less than a week.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Is it secure?</h3>
              <p className="text-slate-600">Yes, CareBridgeAI is fully HIPAA-compliant with end-to-end encryption.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What happens if the AI can't handle a request?</h3>
              <p className="text-slate-600">For complex inquiries, our system seamlessly routes patients to your team.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Can I start with chatbots and upgrade later?</h3>
              <p className="text-slate-600">Absolutely! You can scale up anytime without interruptions.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={handleScheduleDemo}
            >
              Still Have Questions? Schedule a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Let's Transform Your Practice Together
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Schedule a call with our team to see how CareBridgeAI can save time, reduce no-shows, and improve patient satisfaction.
          </p>
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={handleScheduleDemo}
          >
            Schedule a Call Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
