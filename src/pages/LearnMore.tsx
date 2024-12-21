import { ArrowLeft, Clock, Calendar, MessageSquare, ChartBar, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const LearnMore = () => {
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

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
          Transform Your Patient Communication
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800">Why Choose Our AI Solution?</h2>
            <p className="text-lg text-slate-600">
              Our AI-powered platform revolutionizes how healthcare providers interact with patients,
              saving time, reducing costs, and improving satisfaction rates across the board.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Healthcare professional using laptop"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Clock className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p className="text-slate-600">Never miss a patient inquiry, even outside business hours.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Calendar className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
            <p className="text-slate-600">Automated appointment booking and reminders reduce no-shows by 40%.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <MessageSquare className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Responses</h3>
            <p className="text-slate-600">Answer common questions immediately, improving patient satisfaction.</p>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <ChartBar className="h-8 w-8 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Increased Efficiency</h3>
                <p className="text-slate-600">Reduce administrative workload by up to 75%</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Better Patient Experience</h3>
                <p className="text-slate-600">90% of patients prefer instant digital responses</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">HIPAA Compliant</h3>
                <p className="text-slate-600">Secure, encrypted communication at all times</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-8 w-8 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Time Savings</h3>
                <p className="text-slate-600">Save 30+ hours per week on administrative tasks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Join hundreds of healthcare providers who have already transformed their patient communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearnMore;