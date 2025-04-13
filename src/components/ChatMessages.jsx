import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

const ChatMessages = ({ chat, chatEndRef, isTyping }) => {
  const lastMessageRef = useRef(null);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (chat.length > 0) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md w-full max-w-full">
      {chat.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <div className="text-3xl mb-2">👋</div>
            <p>Suhbatni boshlash uchun xabar yuboring</p>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-4 w-full">
            {chat.map((msg, index) => (
              <div
                key={index}
                className="transition-all duration-300 ease-in-out w-full"
                ref={index === chat.length - 1 ? lastMessageRef : null}
              >
                <MessageBubble msg={msg} />
                {index < chat.length - 1 && (
                  <div className="h-1 w-full" /> /* Message spacing */
                )}
              </div>
            ))}
          </div>

          {isTyping && (
            <div className="flex items-center mt-4 text-gray-500 dark:text-gray-400 w-full">
              <div className="flex space-x-1 mr-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: "600ms" }}></div>
              </div>
              <div className="text-sm italic">
                Bardak Bot yozmoqda
              </div>
            </div>
          )}
        </>
      )}
      <div ref={chatEndRef} className="h-2" />
    </div>
  );
};

export default ChatMessages;