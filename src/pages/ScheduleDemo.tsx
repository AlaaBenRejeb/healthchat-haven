import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const ScheduleDemo = () => {
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
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Experience HealthAI in Action</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our AI-powered solution can transform your patient communication and save your staff valuable time.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Schedule Your Free Demo</CardTitle>
            <CardDescription>
              Choose a time that works best for you, and our team will walk you through HealthAI's features and capabilities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="clinicName" className="text-sm font-medium text-slate-700">Clinic Name</label>
                  <input
                    id="clinicName"
                    type="text"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                    placeholder="Healthcare Clinic"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium text-slate-700">Your Role</label>
                  <input
                    id="role"
                    type="text"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                    placeholder="Practice Manager"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Work Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                  placeholder="you@healthcare.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="preferredTime" className="text-sm font-medium text-slate-700">Preferred Demo Time</label>
                <select
                  id="preferredTime"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                >
                  <option value="">Select a time...</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (1PM - 5PM)</option>
                </select>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Schedule Demo
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-slate-600">
          <p>Not ready for a demo? <Link to="/contact" className="text-emerald-600 hover:text-emerald-700">Contact us</Link> with any questions.</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;