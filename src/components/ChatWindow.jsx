import { useEffect, useRef, useState } from "react";
import { useSocket } from "../context/SocketContext";

function formatTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatWindow({ user }) {
  const socket = useSocket();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  // Listen for chat history and incoming messages
  useEffect(() => {
    if (!socket) return;

    const onHistory = (history) => {
      // replace the current messages with history from DB
      setMessages(history);
    };
    const onMessage = (msg) => {
      // append new messages
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("history", onHistory);
    socket.on("message", onMessage);

    // cleanup
    return () => {
      socket.off("history", onHistory);
      socket.off("message", onMessage);
    };
  }, [socket]);

  // Auto-scroll on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const trimmed = text.trim();
    if (!trimmed || !socket) return;

    const msg = {
      text: trimmed,
      sender: user,
      ts: Date.now(),
    };
    socket.emit("message", msg);
    setText("");
  };

  return (
    <div className="flex flex-col h-[80vh]">
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
        {messages.map((m, idx) => {
          const mine = m.sender === user;
          return (
            <div
              key={m._id || m.id || idx}
              className={`max-w-[75%] rounded-2xl px-3 py-2 shadow-sm ${
                mine
                  ? "ml-auto bg-blue-600 text-white"
                  : "mr-auto bg-white border"
              }`}
            >
              <div className="text-xs opacity-80 mb-0.5">
                {m.sender} • {formatTime(m.ts)}
              </div>
              <div className="leading-snug">{m.text}</div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      <div className="p-3 border-t bg-white flex gap-2">
        <input
          className="flex-1 border rounded-xl px-3 py-2 outline-none"
          placeholder={`Message as ${user}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
}
