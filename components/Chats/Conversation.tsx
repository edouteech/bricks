import React from "react";
// import "../../styles/globals.css";

export interface ConversationProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
  message: string;
  messageCount: number;
}

const Conversation: React.FC<ConversationProps> = ({
  name,
  imageSrc,
  imageAlt,
  message,
  messageCount,
}) => {
  return (
    <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
      <div className="flex-shrink-0">
        <img src={imageSrc} alt={imageAlt} className="h-10 w-10 rounded-full" />
      </div>
      <div className="flex-1 min-w-0">
        <a href="#" className="focus:outline-none">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-blue-500">{name}</p>
            <div className="text-gray-400 text-xs">12:33 AM</div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 truncate">{message}</p>
            <div className="text-white text-xs bg-blue-400 rounded-full px-1 py-0">
              {messageCount}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Conversation;
