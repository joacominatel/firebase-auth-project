import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase';
import { showMessage } from '../../components/showMessage';

const githubButton = document.querySelector("#github-login");

githubButton.addEventListener('click', async () => {
    const provider = new GithubAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider);
        console.log(provider);

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
        modal.hide()

        showMessage('Welcome ' + credentials.user.displayName);
    } catch (error) {
        showMessage("Unknow error", "error");
        console.log(error);
    }
})