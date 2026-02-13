import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc
} from "firebase/firestore";

export default function Chat({ user }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [role, setRole] = useState("user");

  useEffect(() => {
    const fetchRole = async () => {
      const snap = await getDoc(doc(db, "users", user.uid));
      setRole(snap.data().role);
    };
    fetchRole();

    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })));
    });

    return () => unsub();
  }, [user]);

  const sendMessage = async () => {
    if (!message) return;
    await addDoc(collection(db, "messages"), {
      text: message,
      uid: user.uid,
      email: user.email,
      createdAt: serverTimestamp(),
    });
    setMessage("");
  };

  const deleteMessage = async (id) => {
    await deleteDoc(doc(db, "messages", id));
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`msg ${msg.uid === user.uid ? "own" : ""}`}
          >
            <span>{msg.email}</span>
            <p>{msg.text}</p>

            {role === "admin" && (
              <button onClick={() => deleteMessage(msg.id)}>
                Delete
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="inputBox">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
