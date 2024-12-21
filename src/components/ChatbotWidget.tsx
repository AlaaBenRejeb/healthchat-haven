import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([
    { role: 'assistant', content: "Hi! I'm here to help you learn more about our AI solutions for healthcare. What would you like to know?" }
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

    // Simulate AI response - In a real implementation, this would call your AI service
    setTimeout(() => {
      let response = "";
      
      if (userMessage.toLowerCase().includes("price") || userMessage.toLowerCase().includes("cost")) {
        response = "Our pricing is customized based on your clinic's needs. The best way to get accurate pricing is to schedule a quick call with our team. Would you like to book a demo?";
      } else if (userMessage.toLowerCase().includes("demo") || userMessage.toLowerCase().includes("call") || userMessage.toLowerCase().includes("book")) {
        response = "Great! You can schedule a demo call right away using our calendar. Click here to book your slot: https://calendly.com/alaabenrejeb-b/health";
      } else if (userMessage.toLowerCase().includes("hipaa") || userMessage.toLowerCase().includes("security")) {
        response = "Yes, our platform is fully HIPAA compliant with end-to-end encryption and secure data storage. Would you like to learn more about our security features in a demo call?";
      } else {
        response = "I'd be happy to help you learn more about how our AI solutions can benefit your clinic. The best way to get detailed information is through a quick demo call. Would you like to schedule one?";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
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