import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyB78JT_cbPMizvzKWBrQoQUe3-zukHrr1U",
  authDomain: "pharacoin.firebaseapp.com",
  projectId: "pharacoin",
  storageBucket: "pharacoin.firebasestorage.app",
  messagingSenderId: "1047668783635",
  appId: "1:1047668783635:web:10673630ede69c60181de6",
  measurementId: "G-06CG470MPX"
};


// تشغيل Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const registerBtn =
document.getElementById("registerBtn");


registerBtn.addEventListener("click", async () => {

  const name =
  document.getElementById("name").value;

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  try {

    const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await setDoc(
      doc(db, "users", user.uid),
      {
        name: name,
        email: email,
        uid: user.uid
      }
    );

    alert("تم تسجيل الحساب بنجاح");

  } catch(error) {

    alert(error.message);

  }

});