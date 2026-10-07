import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // Paste the configuration from Firebase Console here
   apiKey: "AIzaSyDtJYVBtxr38Sba8Az4PbH0X0xJK5bQvs8",
  authDomain: "newshub-1f4e7.firebaseapp.com",
  projectId: "newshub-1f4e7",
  storageBucket: "newshub-1f4e7.firebasestorage.app",
  messagingSenderId: "258778392256",
  appId: "1:258778392256:web:ab27e3099c29945aceef25",
  measurementId: "G-PRHLKLFGXW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();