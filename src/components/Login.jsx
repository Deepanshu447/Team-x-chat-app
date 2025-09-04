import { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    // 🔹 Simple hardcoded password check
    const CHAT_PASSWORD = "DEEPS"; // <-- Change this

    if (password !== CHAT_PASSWORD) {
      setError("Invalid password");
      return;
    }

    // Save username and login
    localStorage.setItem("chat-username", name);
    onLogin(name);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow w-80"
      >
        <h2 className="text-xl font-bold mb-4">Enter Chat</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4 outline-none"
          placeholder="Your name"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4 outline-none"
          placeholder="Password"
        />

        {error && <div className="text-red-500 mb-2">{error}</div>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold"
        >
          Join Chat
        </button>
      </form>
    </div>
  );
}
