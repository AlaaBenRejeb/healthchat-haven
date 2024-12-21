import { ArrowLeft, Calendar, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ScheduleDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/learn-more">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Learn More
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Schedule Your Free Demo
          </h1>
          <p className="text-lg text-slate-600">
            See how our AI solutions can transform your clinic's communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-600" />
                30-Minute Demo
              </CardTitle>
              <CardDescription>
                Get a comprehensive overview of our platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>Live walkthrough of features</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>Q&A session with our experts</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">
                Schedule 30-Min Demo
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-600" />
                15-Minute Quick Tour
              </CardTitle>
              <CardDescription>
                Brief overview of core features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>Quick feature highlights</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span>Basic questions answered</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">
                Schedule Quick Tour
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;