import { 
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
    
} from '../../utils/firebase/firebase.utils';
import SignUpForm  from '../../components/sign-up-form/sign-up-form.component.jsx';
import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';

const SignIn = () => {
    /*
    useEffect(() => {
        async function fetchMyAPI() {
            const response = await getRedirectResult(auth);
            if(response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
                console.log(userDocRef);
            }
        }
        fetchMyAPI()
    }, [])
    */

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with google redirect</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;