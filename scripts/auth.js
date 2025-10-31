// ✅ Firebase modular import
import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// ✅ Register User + Email Verification
export async function registerUser(email, password) {
  if (!email || !password)
    throw new Error("Please enter email and password");

  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(userCred.user);

  // Force logout until verified
  await signOut(auth);

  return true;
}

// ✅ Login User (Only if email verified)
export async function loginUser(email, password) {
  if (!email || !password)
    throw new Error("Email & password required");

  const userCred = await signInWithEmailAndPassword(auth, email, password);

  if (!userCred.user.emailVerified) {
    await signOut(auth);
    throw new Error("Please verify your email before logging in.");
  }

  return true;
}

// ✅ Check if logged in (protect dashboard)
export function checkAuth() {
  onAuthStateChanged(auth, (user) => {
    if (!user || !user.emailVerified) {
      window.location.href = "login.html";
    }
  });
}

// ✅ Logout
export function logoutUser() {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}

// ✅ Forgot password email
export function resetPassword(email) {
  if (!email)
    throw new Error("Email required");
  return sendPasswordResetEmail(auth, email);
}
