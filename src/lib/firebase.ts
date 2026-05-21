import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBII_uc9qmLgqQ74doSVE76eM0_8UX8Dok",
  authDomain: "paper-bank-web.firebaseapp.com",
  projectId: "paper-bank-web",
  storageBucket: "paper-bank-web.firebasestorage.app",
  messagingSenderId: "551766681684",
  appId: "1:551766681684:web:4915277eb75055378625c1",
  measurementId: "G-CLPRHYGJJL",
};

export const firebaseApp = initializeApp(firebaseConfig);

export async function getFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null;
  if (import.meta.env.DEV) return null;
  if (!(await isSupported())) return null;
  return getAnalytics(firebaseApp);
}

