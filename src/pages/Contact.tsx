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

const Contact = () => {
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
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about HealthAI? Our team is here to help you transform your patient communication experience.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Our Team</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                  placeholder="john@healthcare.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                  placeholder="Tell us about your needs..."
                />
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;