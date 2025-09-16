// src/context/UserProvider.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider";

const UserContext = createContext(null);
const API_BASE = import.meta.env.VITE_BACKEND_URL;

export function UserProvider({ children }) {
  const { firebaseUser } = useAuth();
  const [dbUser, setDbUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function ensureUser() {
      if (!firebaseUser) {
        setDbUser(null);
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.post(`${API_BASE}/register`, {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          username:
            firebaseUser.displayName || firebaseUser.email.split("@")[0],
        });
        setDbUser(data); // always returns a user object
      } catch (err) {
        console.error("Failed to ensure user in DB:", err);
        setDbUser(null);
      } finally {
        setLoading(false);
      }
    }

    ensureUser();
  }, [firebaseUser]);

  return (
    <UserContext.Provider value={{ dbUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
