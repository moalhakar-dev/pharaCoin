import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyB78JT_cbPMizvzKWBrQoQUe3-zukHrr1U",
  authDomain: "pharacoin.firebaseapp.com",
  projectId: "pharacoin",
  storageBucket: "pharacoin.firebasestorage.app",
  messagingSenderId: "1047668783635",
  appId: "1:1047668783635:web:10673630ede69c60181de6",
  measurementId: "G-06CG470MPX"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);