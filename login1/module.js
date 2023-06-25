// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAspuT1NgCOvKdQZAE2oAKnNoZEIgb68lg",
  authDomain: "login-c1b97.firebaseapp.com",
  projectId: "login-c1b97",
  storageBucket: "login-c1b97.appspot.com",
  messagingSenderId: "258992589108",
  appId: "1:258992589108:web:d3d6ae55711d98396efd61",
  measurementId: "G-298TH9JDSP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const auth = getAuth();

document.getElementById("signUpButton").addEventListener("click", (event) => {
  event.preventDefault();
  const signUpEmail = document.getElementById("signUpEmail").value;
  const signUpPassword = document.getElementById("signUpPassword").value;

  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      const user = userCredential.user;
      document.querySelector(".signUpbox").style.display = "none";
      // ...
    })
    .catch((error) => {
      console.log("error");
      const errorCode = error.code;

      const errorMessage = error.message;
      // ..
    });
});

document.querySelector(".registers").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".form-box").classList.toggle("flip");
  document.querySelector(".form-box2").classList.toggle("flip");
});

document.querySelector(".registers2").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".form-box").classList.toggle("flip");
  document.querySelector(".form-box2").classList.toggle("flip");
  document.querySelector(".signUpbox").stlye.display = "block";
});

document.getElementById("signInButton").addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(userCredential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.querySelector(".form-box").classList.add("fail");
      document.getElementById("signInEmail").value = null;
      document.getElementById("signInPassword").value = null;

      setTimeout(() => {
        document.querySelector(".form-box").classList.remove("fail");
      }, 2000);
      console.log("실패");
    });
});
