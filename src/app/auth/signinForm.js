import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { showMessage } from "../../components/showMessage";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);

    const modal = bootstrap.Modal.getInstance(
      document.querySelector("#signinModal")
    );
    modal.hide();

    showMessage('Welcome ' + credentials.user.email)

  } catch (error) {
    if (error.code === "auth/invalid-credential") {
      showMessage("Credentials are not valid", "error");
    } else {
      showMessage("Unknown error", "error");
    }
  }
});
