// "use strict";

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBcMIs2QMKLw0CsKsrvxcnzVYtTY-9aFs",
  authDomain: "sarthak-3c5f6.firebaseapp.com",
  projectId: "sarthak-3c5f6",
  storageBucket: "sarthak-3c5f6.appspot.com",
  messagingSenderId: "599338874034",
  appId: "1:599338874034:web:2307dde691177a5002c5ab",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// signupxxx////xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/////////////////////////////

let sbtn = document.getElementById("sbtn");
sbtn.addEventListener("click", () => {
  let email = document.getElementById("signupemai");
  let password = document.getElementById("signuppass");
  let cpasss = document.getElementById("cpass");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user=>", user);
      document.write("user", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error", errorMessage);
      console.log("error==>>", errorCode);
    });
});

// xxxxx/////////////////////////////xxxxxxxxxxxxxxxxxxxxxxxx///////////////////////

let llbtn = document.querySelector("#lbtn");
llbtn.addEventListener("click", () => {
  let lemail = document.getElementById("lem");
  let lpassword = document.getElementById("lpass");

  signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      document.write("user", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error==>>>", errorMessage);
      console.log("error==>>>", errorCode);
    });
});
