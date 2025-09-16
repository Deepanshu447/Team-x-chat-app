// src/context/AuthProvider.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [firebaseUser, setFirebaseUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setFirebaseUser(user);
            setLoading(false);
        });
        return () => unsub();
    }, []);



    return (
        <AuthContext.Provider value={{ firebaseUser, loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
