import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUP2wIsWxNy-pRfXOBllfkkP3Wm4_bzEw",
  authDomain: "tarefasplus-d11f6.firebaseapp.com",
  projectId: "tarefasplus-d11f6",
  storageBucket: "tarefasplus-d11f6.appspot.com",
  messagingSenderId: "808146367941",
  appId: "1:808146367941:web:829f52af96e2c9f93ec7ac"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };