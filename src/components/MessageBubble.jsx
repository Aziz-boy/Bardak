import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

const MessageBubble = ({ msg }) => {
  const isUser = msg.user === "You";

  return (
    <div
      className={`mb-2 p-2 rounded-md max-w-xs ${
        isUser
          ? "bg-blue-500 text-white self-end ml-auto"
          : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white self-start mr-auto"
      }`}
    >
      <strong>{msg.user}:</strong>
      <ReactMarkdown
        children={msg.text}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
      />
      {msg.time && (
        <p className="text-xs text-right text-gray-400">{msg.time}</p>
      )}
    </div>
  );
};

export default MessageBubble;
