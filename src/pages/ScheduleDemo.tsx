import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const ScheduleDemo = () => {
  const handleScheduleClick = () => {
    window.open('https://calendly.com/alaabenrejeb-b/health', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Navbar />
      <div className="container mx-auto px-4 max-w-4xl pt-20">
        <Link to="/learn-more">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Learn More
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Schedule Your Free Demo</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Book a personalized demo to see how HealthAI can transform your patient communication and save your staff valuable time.
          </p>
          <Button 
            size="lg"
            onClick={handleScheduleClick}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Schedule Now
          </Button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">What to Expect in Your Demo</h2>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">1</span>
              <span>A comprehensive walkthrough of HealthAI's features and capabilities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">2</span>
              <span>Personalized discussion about your clinic's specific needs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">3</span>
              <span>Live demonstration of our AI chatbot and voice caller systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">4</span>
              <span>Q&A session with our healthcare solutions expert</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center text-slate-600">
          <p>Not ready for a demo? <Link to="/contact" className="text-emerald-600 hover:text-emerald-700">Contact us</Link> with any questions.</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;