import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Auth from "./components/Auth";
import Chat from "./components/Chat";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  return (
    <div className="app">
      {user ? (
        <>
          <Chat user={user} />
          <button className="logout" onClick={() => signOut(auth)}>
            Logout
          </button>
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
}
