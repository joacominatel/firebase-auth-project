import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./app/firebase";
import { loginCheck } from "./app/funcs/loginCheck";

import './app/signupForm';
import './app/funcs/logout';

onAuthStateChanged(auth, async (user) => {
  loginCheck(user)
})