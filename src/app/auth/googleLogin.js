import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { showMessage } from '../../components/showMessage';

const googleButton = document.querySelector('#google-login');

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials);

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()

        showMessage('Welcome ' + credentials.user.displayName)

    } catch (error) {
        console.log(error);
    }
})