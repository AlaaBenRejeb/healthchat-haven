import React from 'react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  isCalendly?: boolean;
}

const ChatMessage = ({ role, content, isCalendly }: ChatMessageProps) => {
  if (isCalendly) {
    return (
      <div className="w-full h-[400px] rounded-lg overflow-hidden">
        <iframe
          src="https://calendly.com/alaabenrejeb-b/health"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    );
  }

  return (
    <div
      className={`max-w-[80%] p-3 rounded-lg ${
        role === 'user'
          ? 'bg-emerald-600 text-white'
          : 'bg-gray-100 text-slate-800'
      }`}
    >
      {content}
    </div>
  );
};

export default ChatMessage;