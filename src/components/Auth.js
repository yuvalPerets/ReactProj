import { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "../FirebaseConfig";

function Auth() {
  const [user, setUser] = useState(null);

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h3>Welcome, {user.displayName}</h3>
          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <button onClick={signIn}>Sign in with Google</button>
      )}
    </div>
  );
}

export default Auth;
