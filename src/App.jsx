import { useEffect, useState } from "react";
import { SocketProvider, useSocket } from "./context/SocketContext";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import Login from "./components/Login";

// This component manages the chat layout after login
function ChatLayout({ user }) {
  const socket = useSocket();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Listen for online users from the server
  useEffect(() => {
    if (!socket) return;

    const handleOnlineUsers = (users) => {
      setOnlineUsers(users);
    };

    socket.on("online-users", handleOnlineUsers);

    return () => {
      socket.off("online-users", handleOnlineUsers);
    };
  }, [socket]);

  return (
    <div className="flex h-screen">
      <Sidebar
        currentUser={user}
        onlineUsers={onlineUsers}
        onSelectUser={setSelectedUser}
      />
      <div className="flex-1">
        {selectedUser ? (
          <ChatWindow user={user} targetUser={selectedUser} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
}

// Main app
export default function App() {
  const [user, setUser] = useState(localStorage.getItem("chat-username") || "");

  // When user logs in, save to localStorage
  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem("chat-username", username);
  };

  // Show login page if no user is logged in
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <SocketProvider user={user}>
      <ChatLayout user={user} />
    </SocketProvider>
  );
}
