import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./app/firebase";
import { loginCheck } from "./app/funcs/loginCheck";

import './app/auth/signupForm';
import './app/auth/signinForm';
import './app/auth/googleLogin';
import './app/auth/githubLogin';
import './app/funcs/logout';

onAuthStateChanged(auth, async (user) => {
  loginCheck(user)
})