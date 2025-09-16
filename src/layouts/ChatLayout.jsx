// src/layouts/ChatLayout.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import { useUser } from "../context/UserProvider";
import { useOnlineUsers } from "../context/SocketProvider";

export default function ChatLayout() {
  const { dbUser } = useUser();
  const onlineUsers = useOnlineUsers();
  const [targetUser, setTargetUser] = useState(null);

  return (
    <div className="flex h-screen">
      <Sidebar
        currentUser={dbUser}
        onlineUsers={onlineUsers}
        onSelectUser={setTargetUser}
      />
      <div className="flex-1">
        <ChatWindow user={dbUser.uid} targetUser={targetUser} />
      </div>
    </div>
  );
}
