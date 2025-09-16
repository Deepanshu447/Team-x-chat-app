// src/components/ChatWindow.jsx
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSocket } from "../context/SocketProvider";

const API_BASE = import.meta.env.VITE_BACKEND_URL;

export default function ChatWindow({ user, targetUser }) {
  const socket = useSocket();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const scrollRef = useRef(null);

  // scroll function when user type message
  useEffect(() => {
  scrollRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

  // Fetch existing messages whenever the target user changes
  useEffect(() => {
    if (!targetUser) return;

    async function loadMessages() {
      try {
        const res = await axios.get(`${API_BASE}/messages`, {
          params: { user1: user, user2: targetUser.uid },
        });
        setMessages(res.data);
      } catch (err) {
        console.error("Failed to load messages:", err);
      }
    }

    loadMessages();
  }, [targetUser, user]);

  // Listen for incoming messages
  useEffect(() => {
    if (!socket) return;

    const handleIncoming = (msg) => {
      if (
        (msg.senderUid === user && msg.receiverUid === targetUser?.uid) ||
        (msg.senderUid === targetUser?.uid && msg.receiverUid === user)
      ) {
        setMessages((prev) => [...prev, msg]);
      }
    };

    socket.on("receive-message", handleIncoming);
    return () => socket.off("receive-message", handleIncoming);
  }, [socket, user, targetUser]);

  async function sendMessage() {
    if (!text.trim() || !targetUser) return;
    const message = {
      senderUid: user,
      receiverUid: targetUser.uid,
      text: text.trim(),
      timestamp: Date.now(),
    };

    socket.emit("send-message", message);
    // io.emit('message', msg);
    // setMessages((prev) => [...prev, message]);
    setText("");
  }

  if (!targetUser) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        Select a user to start chatting.
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-none p-4 border-b border-gray-300 font-semibold">
        Chat with {targetUser.username}
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded max-w-md ${m.senderUid === user ? "bg-blue-100 ml-auto" : "bg-gray-200"
              }`}
          >
            <span className="ml-auto text-xs text-gray-500">{m.senderUid === user ? "Me" : targetUser.username}</span>
            <p className="break-words">{m.text}</p>
            {m.timestamp && (
              <span className="text-right block text-xs text-gray-500">
                {new Date(m.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            )}
          </div>
        ))}
        <div ref={scrollRef}></div>
      </div>
      
      <div className="flex-none p-4 border-t border-gray-300 flex">
        <input
          className="flex-1 border border-gray-300 rounded p-2 mr-2"
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
