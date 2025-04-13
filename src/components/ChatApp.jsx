import React, { useState, useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import axios from "axios";

const ChatApp = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [isTyping, setIsTyping] = useState(false); // <-- Typing state
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const sendMessage = async () => {
    if (message.trim()) {
      const userMessage = {
        user: "You",
        text: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChat((prev) => [...prev, userMessage]);
      setMessage("");
      setIsTyping(true); // Bot yozmoqda...

      try {
        const response = await axios.post("http://localhost:5000/api/chat", { message });
        const botMessage = {
          user: "AI",
          text: response.data.reply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setChat((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsTyping(false); // Bot yozishni tugatdi
      }
    }
  };

  const clearChat = () => setChat([]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <ChatHeader darkMode={darkMode} setDarkMode={setDarkMode} clearChat={clearChat} />
      <ChatMessages chat={chat} chatEndRef={chatEndRef} isTyping={isTyping} />
      <ChatInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default ChatApp;
