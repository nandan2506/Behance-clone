

document.addEventListener("DOMContentLoaded", () => {
    const fm = document.querySelector(".form");
    const signup = document.querySelector(".signup_link");
    const signin = document.querySelector(".signin_link");

    if (!fm || !signup || !signin) {
        console.error("One or more elements not found!");
        return;
    }

    signup.addEventListener("click", (e) => {
        e.preventDefault();  
        fm.classList.add("active");
    });

    signin.addEventListener("click", (e) => {
        e.preventDefault(); 
        fm.classList.remove("active");
    });
});






import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTCuciFQssWf4cQd8-8v6Cbg2vUNLbpiQ",
  authDomain: "web205-4e4df.firebaseapp.com",
  databaseURL: "https://www.googleapis.com/auth/drive",
  projectId: "web205-4e4df",
  storageBucket: "web205-4e4df.appspot.com",
  messagingSenderId: "883573221121",
  appId: "1:883573221121:web:b3a8badd8a1e83ef06dd00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);





document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("sign_up");
    const signinForm = document.getElementById("sign_in");
  
    const emailInput = signupForm.querySelector(".eml");
    const passwordInput = signupForm.querySelector(".psd");

    const emailInput1 = signupForm.querySelector(".eml1");
    const passwordInput1 = signupForm.querySelector(".psd1");
  
    const signupBtn = signupForm.querySelector(".upsubmit");
    const signinBtn = signinForm.querySelector(".insubmit");
  
    signupBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!email) {
        alert("Please enter an email address.");
        return;
      }
  
      if (!password) {
        alert("Please enter a password.");
        return;
      }
  
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Account Created Successfully!");
          window.location.href = "/B42_WEB_025_Pixel-Pioneers/index.html";
        })
        .catch((error) => {
          handleAuthError(error);
        });
    });
  
    signinBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const email = emailInput1.value.trim();
      const password = passwordInput1.value.trim();
  
      if (!email) {
        alert("Please enter your email.");
        return;
      }
  
      if (!password) {
        alert("Please enter your password.");
        return;
      }
  
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Welcome Back!");
          window.location.href = "/B42_WEB_025_Pixel-Pioneers/index.html";
        })
        .catch((error) => {
          handleAuthError(error);
        });
    });
  
    function handleAuthError(error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User already exists");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email address");
      } else if (error.code === "auth/weak-password") {
        alert("Password is too weak");
      } else {
        alert(error.message);
      }
    }
  });
  