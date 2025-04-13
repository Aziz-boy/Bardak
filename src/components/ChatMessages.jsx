import MessageBubble from "./MessageBubble";

const ChatMessages = ({ chat, chatEndRef, isTyping }) => (
  <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
    {chat.map((msg, index) => (
      <MessageBubble key={index} msg={msg} />
    ))}

    {isTyping && (
      <div className="text-sm italic text-gray-500 dark:text-gray-400 mt-2">
        Bardak Bot yozmoqda<span className="animate-pulse">...</span>
      </div>
    )}

    <div ref={chatEndRef} />
  </div>
);

export default ChatMessages;
