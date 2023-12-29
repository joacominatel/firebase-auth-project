import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./app/firebase";
import { loginCheck } from "./app/funcs/loginCheck";

import firebase from "firebase/compat/app";
// Required for side-effects
import { getDocs, collection } from "firebase/firestore";

import { setupPosts } from "./app/database/postList";

import './app/auth/signupForm';
import './app/auth/signinForm';
import './app/auth/googleLogin';
import './app/auth/githubLogin';
import './app/funcs/logout';

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    setupPosts(querySnapshot.docs)
  } else {
    setupPosts([])
  }
  loginCheck(user)
})