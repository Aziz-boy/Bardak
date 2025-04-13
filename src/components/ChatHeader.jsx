const ChatHeader = ({ darkMode, setDarkMode, clearChat }) => (
    <div className="flex justify-between items-center mb-2">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Bardak Bot</h1>
      <div className="flex gap-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-md"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-md"
          onClick={clearChat}
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
  export default ChatHeader;
  