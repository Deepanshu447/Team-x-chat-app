import { useState, useEffect } from "react";
import { SocketProvider } from "./context/SocketContext";
import ChatWindow from "./components/ChatWindow";
import Login from "./pages/Login";

export default function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const saved = localStorage.getItem("chat-username");
    if (saved) setUser(saved);
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (

     <div className="h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Chat App</h1>

      <div className="main-chat-screen bg-white border shadow">
        <div className="px-4 py-2 rounded-t-2xl bg-blue-50 font-semibold border-b">
          Logged in as {user}
        </div>
        <div className="p-2">
          <SocketProvider user={user}>
            <ChatWindow user={user} />
          </SocketProvider>
        </div>
      </div>
    </div>
  );
}


// import { SocketProvider } from "./context/SocketContext";
// import ChatWindow from "./components/ChatWindow";

// export default function App() {

//   return (
//      <div className="h-screen p-4 bg-gray-100">
//       <h1 className="text-2xl font-bold mb-4">Local Two-User Chat (One Page)</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="rounded-2xl bg-white border shadow">
//           <div className="px-4 py-2 rounded-t-2xl bg-blue-50 font-semibold border-b">
//             Alice
//           </div>
//           <div className="p-2">
//             <SocketProvider user="Alice">
//               <ChatWindow user="Alice" />
//             </SocketProvider>
//           </div>
//         </div>

//         <div className="rounded-2xl bg-white border shadow">
//           <div className="px-4 py-2 rounded-t-2xl bg-green-50 font-semibold border-b">
//             Bob
//           </div>
//           <div className="p-2">
//             <SocketProvider user="Bob">
//               <ChatWindow user="Bob" />
//             </SocketProvider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
