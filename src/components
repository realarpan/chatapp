import { useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async () => {
    if (isSignup) {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        email,
        role: email === "admin@gmail.com" ? "admin" : "user",
        online: true
      });
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
  };

  return (
    <div className="auth">
      <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {isSignup ? "Create Account" : "Login"}
      </button>

      <p onClick={() => setIsSignup(!isSignup)}>
        {isSignup
          ? "Already have account? Sign In"
          : "No account? Sign Up"}
      </p>
    </div>
  );
}
