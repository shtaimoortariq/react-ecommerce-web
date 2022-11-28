import { useState, useContext } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss'
import { UserContext } from '../../context/user.context'
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    loginWithEmailAndPassword

} from '../../utils/firebase/firebase.utils';

const defaultFormField = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setformFields] = useState(defaultFormField);
    const { email, password } = formFields;
    const { setCurrentUser } = useContext(UserContext);
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setformFields({
            ...formFields,
            [name]: value
        })
    }

    const signInWithGoogle = async (event) => {
        event.preventDefault();
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const { user } = await loginWithEmailAndPassword(email, password);
            setCurrentUser(user);
            setformFields(defaultFormField);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Password Is Not Correct')
                    break;
                case 'auth/user-not-found':
                    alert('User Not Found');
                    break;

                default:
                    console.log(error);
            }
        }
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={submitHandler}>

                <FormInput label="Email" inputOptions={{ type: "email", name: "email", value: email, onChange: handleOnChange, required: true }} />
                <FormInput label="Password" inputOptions={{ type: "password", name: "password", value: password, onChange: handleOnChange, required: true }} />
                <div className="buttons-container">
                    <Button type="submit">Login</Button>
                    <Button buttonType="google" type="submit" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm;