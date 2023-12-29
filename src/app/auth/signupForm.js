import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { showMessage } from "../../components/showMessage";

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);

        // close modal
        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

        showMessage("Welcome " + userCredentials.user.email)

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage('Email is already in use.', 'error');
        } else if (error.code === 'auth/invalid-email') {
            showMessage('Invalid email.', 'error');
        } else if (error.code === 'auth/weak-password') {
            showMessage('Password is too weak.', 'error');
        } else if (error.code) {
            showMessage('Something went wrong...', 'error');
        }
    }
})