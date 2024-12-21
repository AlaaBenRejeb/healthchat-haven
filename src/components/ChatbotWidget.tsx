import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ChatMessage from "./chat/ChatMessage";
import ChatInput from "./chat/ChatInput";

const SYSTEM_PROMPT = `You are a concise AI assistant for CareBridgeAI. Keep responses brief and direct:
1. Use 1-2 sentences per response
2. Focus on key information only
3. For pricing or features, use bullet points
4. For demo requests, respond exactly with: "I'll open up our scheduling calendar right here in the chat for you to book a time that works best."`;

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
    starter: "Our Chatbot-only plan starts at $499/month with a one-time setup fee.",
    complete: "Our comprehensive AI system (chat + voice) starts at $1,499/month.",
    custom: "We offer custom pricing for multi-location clinics."
  },
  demoBooking: {
    response: "I'll open up our scheduling calendar right here in the chat for you to book a time that works best."
  }
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string, isCalendly?: boolean }>>([
    { 
      role: 'assistant', 
      content: "Hi! I'm your AI assistant for CareBridgeAI. I can help you learn how our AI solutions can reduce your clinic's workload and improve patient satisfaction. What would you like to know about?" 
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateResponse = async (message: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('generate-chat-response', {
        body: {
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: message }
          ],
          knowledgeBase
        }
      });

      if (error) throw error;
      
      if (data.generatedText.includes("I'll open up our scheduling calendar")) {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: data.generatedText },
          { role: 'assistant', content: '', isCalendly: true }
        ]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.generatedText }]);
      }
      
      return data.generatedText;
    } catch (error) {
      console.error('Error generating response:', error);
      return "I apologize, but I'm having trouble connecting to our systems. Please try again in a moment.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = inputMessage.trim();
    setInputMessage("");
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      await generateResponse(userMessage);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-12 w-12 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-[350px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-2rem)] flex flex-col">
        <div className="p-4 bg-emerald-600 text-white rounded-t-lg flex justify-between items-center">
          <h3 className="font-semibold">CareBridgeAI Assistant</h3>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <ChatMessage {...message} />
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-slate-800 p-3 rounded-lg">
                Typing...
              </div>
            </div>
          )}
        </div>
        
        <ChatInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
          handleKeyPress={handleKeyPress}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ChatbotWidget;
