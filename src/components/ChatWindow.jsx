import { useEffect, useRef, useState } from "react";
import { useSocket } from "../context/SocketContext";
import axios from "axios";

const API_BASE = import.meta.env.VITE_BACKEND_URL

function formatTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatWindow({ user, targetUser }) {
  const socket = useSocket();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  // Fetch existing messages when targetUser changes
  useEffect(() => {
    if (!targetUser) return;

    axios
      .get(`${API_BASE}/messages`, {
        params: { user1: user, user2: targetUser },
      })
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Failed to load messages:", err));
  }, [user, targetUser]);

  // Listen for incoming private messages
  useEffect(() => {
    if (!socket) return;

    const handlePrivateMessage = (msg) => {
      if (
        (msg.sender === user && msg.receiver === targetUser) ||
        (msg.sender === targetUser && msg.receiver === user)
      ) {
        setMessages((prev) => [...prev, msg]);
      }
    };

    socket.on("private-message", handlePrivateMessage);
    return () => socket.off("private-message", handlePrivateMessage);
  }, [socket, user, targetUser]);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const trimmed = text.trim();
    if (!trimmed || !socket) return;

    const msg = {
      sender: user,
      receiver: targetUser,
      text: trimmed,
      ts: Date.now(),
    };

    socket.emit("private-message", msg);
    // setMessages((prev) => [...prev, msg]); // show immediately
    setText("");
  };

  if (!targetUser) return null;

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 bg-blue-600 text-white font-semibold">
        Chat with {targetUser}
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
        {messages.map((m, i) => {
          const mine = m.sender === user;
          return (
            <div
              key={i}
              className={`max-w-[75%] rounded-2xl px-3 py-2 shadow-sm ${
                mine
                  ? "ml-auto bg-blue-600 text-white"
                  : "mr-auto bg-white border"
              }`}
            >
              <div className="text-xs opacity-80 mb-0.5">
                {m.sender} • {formatTime(m.ts)}
              </div>
              <div>{m.text}</div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
      <div className="p-3 border-t bg-white flex gap-2">
        <input
          className="flex-1 border rounded-xl px-3 py-2 outline-none"
          placeholder={`Message ${targetUser}`}
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
