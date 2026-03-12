// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB78JT_cbPMizvzKWBrQoQUe3-zukHrr1U",
  authDomain: "pharacoin.firebaseapp.com",
  projectId: "pharacoin",
  storageBucket: "pharacoin.firebasestorage.app",
  messagingSenderId: "1047668783635",
  appId: "1:1047668783635:web:10673630ede69c60181de6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
