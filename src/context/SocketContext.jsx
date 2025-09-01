import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "https://my-backend-1-f1dg.onrender.com";

export function SocketProvider({ children, user }) {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(BACKEND_URL, {
            query: { user }, // Pass username to server
        });
        setSocket(newSocket);

        return () => newSocket.close();
    }, [user]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}

export const useSocket = () => useContext(SocketContext);