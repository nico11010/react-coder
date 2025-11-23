import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7vZuTm7AwhfHLVGV73mFZXOCTvfu9keI",
  authDomain: "proyecto-react-coder-a78f9.firebaseapp.com",
  projectId: "proyecto-react-coder-a78f9",
  storageBucket: "proyecto-react-coder-a78f9.firebasestorage.app",
  messagingSenderId: "160120427944",
  appId: "1:160120427944:web:e56b5cb4a7944f6cc3799d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
