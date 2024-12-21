import React from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSendMessage: () => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  isLoading: boolean;
}

const ChatInput = ({ 
  inputMessage, 
  setInputMessage, 
  handleSendMessage, 
  handleKeyPress,
  isLoading 
}: ChatInputProps) => {
  return (
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
  );
};

export default ChatInput;