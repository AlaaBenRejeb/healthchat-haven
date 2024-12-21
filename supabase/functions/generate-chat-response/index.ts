import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Updated system prompt for more concise responses
const SYSTEM_PROMPT = `You are a professional AI assistant for CareBridgeAI. Keep responses brief, clear, and focused. Avoid using markdown formatting or special characters. Present information in a natural, conversational way. Focus on:
1. Practical benefits for medical clinics
2. Clear facts and numbers about time/cost savings
3. Next steps for implementation
4. Guiding towards booking a demo call when appropriate`;

const knowledgeBase = {
  solutions: {
    chatbots: "Our AI chatbots handle patient inquiries 24/7, schedule appointments, and send reminders. Clinics save 15-20 hours weekly in staff time.",
    voice: "Our AI voice system manages calls, reducing missed calls by 75% and handling routine inquiries automatically.",
    integration: "We integrate with most EHR systems within 2-3 business days, minimal disruption guaranteed."
  },
  benefits: {
    time: "Clinics save 75% of time spent on routine communication, freeing staff for important tasks.",
    satisfaction: "Patient satisfaction improves by 40% with instant responses and 24/7 availability.",
    roi: "Most clinics see ROI within the first month through reduced no-shows and better efficiency."
  },
  pricing: {
    starter: "Chatbot-only plan starts at $499/month with a one-time setup fee.",
    complete: "Comprehensive AI system (chat + voice) starts at $1,499/month.",
    custom: "Custom pricing available for multi-location clinics."
  }
};

serve(async (req) => {
  // Handle CORS preflight requests
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