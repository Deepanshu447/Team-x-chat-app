// src/App.jsx
import { AuthProvider, useAuth } from "./context/AuthProvider";
import { UserProvider, useUser } from "./context/UserProvider";
import { SocketProvider } from "./context/SocketProvider";
import Login from "./components/Login";
import ChatLayout from "./layouts/ChatLayout";

function InnerApp() {
  const { loading: authLoading, firebaseUser } = useAuth();
  const { loading: userLoading, dbUser } = useUser();

  if (authLoading || userLoading) {
    return <div>Loading...</div>;
  }

  // if (!firebaseUser || !dbUser) {
  //   return <Login />;
  // }

  if (!firebaseUser || !dbUser) {
    return <Login />;
  }

  return <ChatLayout />;
}

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <SocketProvider>
          <InnerApp />
        </SocketProvider>
      </UserProvider>
    </AuthProvider>
  );
}
