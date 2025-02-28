import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDu7yMlLvjrjBu0z25aOAMC1hUtAOANJQE",
    authDomain: "myreactapp-2897c.firebaseapp.com",
    projectId: "myreactapp-2897c",
    storageBucket: "myreactapp-2897c.firebasestorage.app",
    messagingSenderId: "824728735242",
    appId: "1:824728735242:web:ca12851cb0947a3a0c99f3",
    measurementId: "G-H4KCXVRMLD"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export default app;
export { auth, provider, signInWithPopup, signOut };
