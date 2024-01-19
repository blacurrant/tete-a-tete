import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAWxgK4egtzhLx6bPww71ZvgYdtpNc4XKo",
  authDomain: "tete-a-tete-9f1f9.firebaseapp.com",
  projectId: "tete-a-tete-9f1f9",
  storageBucket: "tete-a-tete-9f1f9.appspot.com",
  messagingSenderId: "895909832297",
  appId: "1:895909832297:web:1d0bf10a06147cbfe2e4f8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
