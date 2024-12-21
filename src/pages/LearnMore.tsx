import { ArrowRight, MessageCircle, Phone, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

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
            Discover How AI Chatbots & Voice Callers Simplify Patient Communication
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Learn how our solutions automate inquiries, appointments, and follow-ups, freeing up your team to focus on patient care.
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

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Your Team is Overwhelmed, and Patients Are Frustrated
            </h2>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-lg text-slate-600 mb-6">
                Managing patient communication is harder than ever:
              </p>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-emerald-600 mt-1" />
                  <span>Endless calls for simple inquiries like clinic hours or insurance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-emerald-600 mt-1" />
                  <span>Time-consuming manual scheduling and rescheduling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-emerald-600 mt-1" />
                  <span>No-shows costing your clinic revenue daily.</span>
                </li>
              </ul>
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
            Seamless Automation for Your Clinic
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <MessageCircle className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Chatbots</h3>
              <p className="text-slate-600">
                Respond instantly to FAQs, book appointments, and send reminders—available 24/7.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Phone className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Voice Callers</h3>
              <p className="text-slate-600">
                Answer calls, schedule bookings, and direct urgent cases to your team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Check className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Integration</h3>
              <p className="text-slate-600">
                Works seamlessly with your existing systems, requiring no extra effort from your team.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={handleScheduleDemo}
            >
              Schedule a Call to See It Live
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
            How Clinics Like Yours Are Thriving with AI
          </h2>
          <div className="bg-emerald-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-6">Case Study: Family Health Clinic</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <span className="font-semibold">Challenge:</span>
                  <span className="ml-2">High call volume overwhelmed staff.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <span className="font-semibold">Solution:</span>
                  <span className="ml-2">Implemented chatbots for FAQs and voice callers for appointment booking.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <span className="font-semibold">Results:</span>
                  <span className="ml-2">40% fewer no-shows, saving 15+ hours of staff time weekly.</span>
                </div>
              </div>
            </div>
            <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-slate-600">
              "The chatbot instantly reduced our workload. Patients love the quick responses, and our staff has time to focus on care."
              <footer className="mt-2 font-semibold not-italic">— Dr. Sarah ****, Clinic Owner</footer>
            </blockquote>
          </div>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={handleScheduleDemo}
            >
              Talk to Our Team About Your Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Let's Make Patient Communication Effortless
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Schedule a call with our team to see how our AI-powered solutions can save time, reduce no-shows, and improve patient satisfaction.
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