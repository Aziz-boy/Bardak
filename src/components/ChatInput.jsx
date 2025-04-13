const ChatInput = ({ message, setMessage, sendMessage }) => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") sendMessage();
    };
  
    return (
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-4 py-2 rounded-l-md border dark:bg-gray-800 dark:text-white"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
        >
          Send
        </button>
      </div>
    );
  };
  export default ChatInput;
  