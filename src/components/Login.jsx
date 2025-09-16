// src/components/Login.jsx
import { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, provider);
      // Firebase will trigger AuthProvider update → rest of app updates automatically
    } catch (err) {
      console.error("Google sign-in failed:", err);
    }
  }

  function handleSecretLogin(e) {
    e.preventDefault();

    // 🔥 Only password is fixed
    const SECRET_PASS = "Deeps@2001";

    if (password === SECRET_PASS) {
      // ✅ User can choose any name
      localStorage.setItem(
        "manualUser",
        JSON.stringify({ uid: `manual-${name}`, username: name })
      );
      window.location.reload(); // refresh so AuthProvider detects it
    } else {
      setError("Invalid secret password");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4 font-bold">Welcome to Chat App</h1>
      
      <form
        onSubmit={handleSecretLogin}
        className="w-full max-w-sm space-y-3 border p-4 rounded shadow"
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="password"
          placeholder="Enter Secret Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Login with Secret
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
        onClick={handleGoogleLogin}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sign in with Google
      </button>
      </form>
    </div>
  );
}
