import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are a professional AI assistant for CareBridgeAI. Your responses should be:
1. Clear and concise without any special characters or markdown formatting (no *, -, #, etc.)
2. Written in a natural, conversational tone
3. Focused on practical benefits and clear numbers
4. Professional but friendly
5. Structured with simple line breaks for readability

When discussing pricing or features:
- Present information in a clean, easy-to-read format
- Use simple numbering (1., 2., etc.) for lists
- Separate sections with line breaks
- Avoid any special characters or formatting
- Guide users toward booking a demo when appropriate`;

const knowledgeBase = {
  solutions: {
    chatbots: "Our AI chatbots handle patient inquiries 24/7, schedule appointments, and send reminders automatically. This typically saves clinics 15-20 hours per week in staff time.",
    voice: "Our AI voice system manages incoming calls, reducing missed calls by 75% and handling routine inquiries like appointment scheduling and insurance questions.",
    integration: "We integrate seamlessly with most EHR systems and can be set up within 2-3 business days with minimal disruption to your operations."
  },
  benefits: {
    time: "On average, clinics save 75% of time spent on routine patient communication, allowing staff to focus on higher-value tasks.",
    satisfaction: "Patient satisfaction typically improves by 40% due to instant responses and 24/7 availability.",
    roi: "Most clinics see ROI within the first month through reduced no-shows and improved staff efficiency."
  },
  pricing: {
    starter: {
      name: "Chatbots Only",
      price: "$499/month",
      setupFee: "$1,000",
      description: "For clinics that need a straightforward, affordable way to automate patient communication online.",
      features: [
        "24/7 chatbot for patient inquiries and FAQs",
        "Automated appointment booking, rescheduling, and reminders",
        "Up to 5,000 interactions/month",
        "Multilingual support",
        "Basic analytics dashboard"
      ]
    },
    complete: {
      name: "Comprehensive AI System",
      price: "$1,499/month",
      setupFee: "$2,500",
      description: "For clinics looking to fully automate patient communication, both online and over the phone.",
      features: [
        "Everything in the Chatbots Only plan",
        "AI-powered voice callers",
        "Basic call analytics",
        "Simple clinic system integration"
      ]
    },
    custom: "Custom pricing available for multi-location clinics."
  },
  features: {
    mainFeatures: [
      {
        title: "Answer FAQs Instantly",
        description: "Give patients the information they need, anytime. Available 24/7, even when your clinic is closed."
      },
      {
        title: "Automate Scheduling",
        description: "Let patients book, reschedule, or get reminders 24/7 without staff intervention."
      },
      {
        title: "Handle Phone Calls",
        description: "AI voice callers manage high volumes without overwhelming your team."
      },
      {
        title: "HIPAA Compliant",
        description: "Your patients' privacy is guaranteed with our secure, compliant platform."
      },
      {
        title: "Multilingual Support",
        description: "Serve diverse patient populations in their preferred language."
      },
      {
        title: "Focus on Care",
        description: "Free your staff from repetitive tasks so they can focus on patient care."
      }
    ]
  },
  security: {
    hipaa: "Full compliance with healthcare privacy regulations",
    encryption: "End-to-end encryption for all data",
    trust: "Used by leading healthcare providers"
  },
  painPoints: {
    challenges: [
      "High call volumes overwhelming staff",
      "Time-consuming manual scheduling and rescheduling",
      "No-shows costing clinics revenue daily",
      "Staff burnout from repetitive tasks",
      "Missed calls leading to lost patients",
      "Limited availability outside office hours"
    ]
  },
  faq: {
    implementation: "Our system can be fully implemented within 2-3 business days with comprehensive documentation and setup guides.",
    hipaaCompliance: "Yes, our platform is fully HIPAA compliant with end-to-end encryption, secure data storage, and strict access controls.",
    support: "We offer 24/7 technical support through our help center, email support, and regular system updates.",
    integration: "Yes, our AI solutions are designed to integrate seamlessly with most electronic health records (EHR) systems.",
    cancellation: "We offer a flexible, no-commitment policy. You can cancel at any time without hidden fees."
  }
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    console.log('Generating response for messages:', messages);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'system', content: `Knowledge Base: ${JSON.stringify(knowledgeBase)}` },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 300
      }),
    });

    const data = await response.json();
    console.log('OpenAI response:', data);

    const generatedText = data.choices[0].message.content;

    return new Response(JSON.stringify({ generatedText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-chat-response function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});