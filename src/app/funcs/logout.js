import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { showMessage } from "../../components/showMessage";

const logout = document.querySelector("#logout");

logout.addEventListener("click", async () => {
  try {
    await signOut(auth);
    showMessage("Signed out!");
  } catch {
    showMessage("Unknow error.", "error");
  }
});
