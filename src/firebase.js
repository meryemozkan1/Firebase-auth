import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";

// Firebase konfigürasyonu
const firebaseConfig = {
  apiKey: "AIzaSyAastVNau3qtjBpoaRdqxTh4lju8ims2lc",
  authDomain: "prototurk-auth-65d80.firebaseapp.com",
  projectId: "prototurk-auth-65d80",
  storageBucket: "prototurk-auth-65d80.appspot.com",
  messagingSenderId: "383553864609",
  appId: "1:383553864609:web:dccac73aca339cf3d841e0",
};

console.log(import.meta.env);

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // `app` parametresini geçin

// Kullanıcı kaydı fonksiyonu
export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

// Kullanıcı girişi fonksiyonu
export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

// Kullanıcı çıkışı fonksiyonu
export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export default app;
