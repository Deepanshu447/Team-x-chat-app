import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_BACKEND_URL

export default function Sidebar({ currentUser, onlineUsers = [], onSelectUser }) {
  const [allUsers, setAllUsers] = useState([]); // all registered users

  useEffect(() => {
    // Fetch all users once (adjust URL for production)
    axios.get(`${API_BASE}/users`)
      .then((res) => setAllUsers(res.data))
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div className="w-64 bg-white border-r h-full flex flex-col">
      {/* Header */}
      <div className="p-4 font-bold border-b">
        Logged in as: {currentUser}
      </div>

      {/* User List */}
      <div className="p-2 flex-1 overflow-y-auto">
        {allUsers
          .filter((u) => u !== currentUser) // hide yourself from the list
          .map((u) => {
            const isOnline = onlineUsers.includes(u);
            return (
              <div
                key={u}
                onClick={() => onSelectUser(u)}
                className="cursor-pointer flex items-center justify-between p-2 hover:bg-gray-100 rounded"
              >
                <span>{u}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    isOnline ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
