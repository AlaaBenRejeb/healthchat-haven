import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Chatbots Only",
      description: "For clinics that need a straightforward, affordable way to automate patient communication online.",
      price: "$499",
      setupFee: "$1,000",
      features: [
        "24/7 chatbot for patient inquiries and FAQs",
        "Automated appointment booking, rescheduling, and reminders",
        "Up to 5,000 interactions/month",
        "Multilingual support",
        "Basic analytics dashboard"
      ],
      cta: "Get Started with Chatbots",
      popular: false
    },
    {
      name: "Comprehensive AI System",
      description: "For clinics looking to fully automate patient communication, both online and over the phone.",
      price: "$1,499",
      setupFee: "$2,500",
      features: [
        "Everything in the Chatbots Only plan",
        "AI-powered voice callers (3,000 minutes/month)",
        "Advanced analytics with call transcripts",
        "Integration with clinic management systems"
      ],
      cta: "Explore the Full AI System",
      popular: true
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-slate-50" id="pricing">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that best fits your clinic's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative ${
                plan.popular 
                  ? 'border-2 border-emerald-500 shadow-xl' 
                  : 'border border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-slate-600 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-800">
                    {plan.price}
                  </span>
                  <span className="text-slate-600">/month</span>
                  <p className="text-sm text-slate-500 mt-2">
                    One-time setup fee: {plan.setupFee}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-emerald-600 hover:bg-emerald-700' 
                      : 'bg-slate-800 hover:bg-slate-900'
                  }`}
                  onClick={() => navigate('/learn-more')}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            <span className="font-semibold">Annual Discount:</span> Get 2 months free when billed annually
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;