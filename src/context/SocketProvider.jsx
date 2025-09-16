// src/context/SocketProvider.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useUser } from "./UserProvider";

const SocketContext = createContext(null);
const OnlineUsersContext = createContext([]);

const API_BASE = import.meta.env.VITE_BACKEND_URL;

export function SocketProvider({ children }) {
  const { dbUser } = useUser();
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (!dbUser) {
      if (socket) socket.disconnect();
      setSocket(null);
      return;
    }

    const s = io(API_BASE, {
      query: { uid: dbUser.uid }, // 🔹 Only UID, simple and safe
    });

    s.on("online-users", (users) => setOnlineUsers(users));
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, [dbUser]);

  return (
    <SocketContext.Provider value={socket}>
      <OnlineUsersContext.Provider value={onlineUsers}>
        {children}
      </OnlineUsersContext.Provider>
    </SocketContext.Provider>
  );
}

export function useSocket() {
  return useContext(SocketContext);
}

export function useOnlineUsers() {
  return useContext(OnlineUsersContext);
}
