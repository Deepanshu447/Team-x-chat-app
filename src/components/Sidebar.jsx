// src/components/Sidebar.jsx
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth"; 
import { auth } from "../firebase"; 

export default function Sidebar({ currentUser, onlineUsers, onSelectUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    }
    fetchUsers();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // AuthProvider will detect this and set firebaseUser = null
      // So App will automatically redirect to Login.jsx
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="w-64 border-r border-gray-300 p-4 flex flex-col h-full">
      {/* User info + Logout */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{currentUser?.username}</h2>
        
      </div>

      {/* User list */}
      <ul className="flex-1 overflow-y-auto">
        {users
          .filter((u) => u.uid !== currentUser.uid)
          .map((u) => {
            const isOnline = onlineUsers.includes(u.uid);
            return (
              <li
                key={u.uid}
                className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100 rounded"
                onClick={() => onSelectUser(u)}
              >
                <span>{u.username}</span>
                <span
                  className={`w-3 h-3 rounded-full ${
                    isOnline ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></span>
              </li>
            );
          })}
      </ul>
      <div className="logoutbtn-div">
        <button
          onClick={handleLogout}
          className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
