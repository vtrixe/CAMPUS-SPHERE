import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

export const RegisterAPI = (email, password) => {
  const thaparEmailRegex = /^[A-Za-z0-9._%+-]+_?[A-Za-z0-9._%+-]*@thapar\.edu$/;
  // Validate the email address
  if (!thaparEmailRegex.test(email)) {
    return Promise.reject(new Error('Invalid email address. Only university email addresses are allowed.'));
  }

  // Create a new user with the validated email address and password
  return createUserWithEmailAndPassword(auth, email, password);
};

export const GoogleSignInAPI = () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    return err;
  }
};

export const onLogout = () => {
  try {
    signOut(auth);
  } catch (err) {
    return err;
  }
};
