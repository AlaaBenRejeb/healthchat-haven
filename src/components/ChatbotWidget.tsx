import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// System prompt and knowledge base
const SYSTEM_PROMPT = `You are an AI assistant for CareBridgeAI, a healthcare technology company. Your role is to:
1. Help medical clinics understand our AI solutions for patient communication
2. Explain benefits like reduced workload and improved patient satisfaction
3. Guide them towards booking a demo call
4. Answer questions about pricing, implementation, and HIPAA compliance
5. Be professional, helpful, and focus on value proposition

Key points to remember:
- Our solutions include AI chatbots and voice systems
- We're fully HIPAA compliant
- Implementation takes 2-3 business days
- We integrate with most EHR systems
- ROI is typically seen within the first month`;

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
  }
};

const generateResponse = async (message: string): Promise<string> => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT
          },
          {
            role: "user",
            content: `Context: User message: "${message}"
            Knowledge base: ${JSON.stringify(knowledgeBase)}
            
            Based on the knowledge base and system prompt, provide a helpful response to the user's message. Always try to guide them towards booking a demo call when appropriate.`
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating response:', error);
    return "I apologize, but I'm having trouble connecting to our systems. Would you like to schedule a call with our team to discuss your needs?";
  }
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([
    { 
      role: 'assistant', 
      content: "Hi! I'm your AI assistant for CareBridgeAI. I can help you learn how our AI solutions can reduce your clinic's workload and improve patient satisfaction. What would you like to know about?" 
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = inputMessage.trim();
    setInputMessage("");
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await generateResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
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

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-12 w-12 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
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
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-slate-800'
                  }`}
                >
                  {message.content}
                </div>
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
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 resize-none border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                rows={1}
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-emerald-600 hover:bg-emerald-700"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;