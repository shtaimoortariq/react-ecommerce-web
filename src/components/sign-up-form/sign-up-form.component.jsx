import { useState, useContext } from 'react';
import { signUpWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {UserContext} from  '../../context/user.context';

import './sign-up-form.styles.scss'

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;    
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields, [name]: value
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (!displayName || !email || !password || !confirmPassword) return;

        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        };

        try {
            const { user } = await signUpWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth({ ...user, displayName });
            

            setFormFields(defaultFormField);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already in use');
            }
            console.log(error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Signup with your email and password</span>
            <form onSubmit={submitHandler}>

                <FormInput label="Display Name" inputOptions={{ type: "text", required: true, name: "displayName", value: displayName, onChange: handleOnChange }} />
                <FormInput label="Email" inputOptions={{ type: "email", required: true, name: "email", value: email, onChange: handleOnChange }} />
                <FormInput label="Password" inputOptions={{ type: "password", required: true, name: "password", value: password, onChange: handleOnChange }} />
                <FormInput label="Confirm Password" inputOptions={{ type: "password", required: true, name: "confirmPassword", value: confirmPassword, onChange: handleOnChange }} />

                <Button buttonType="google" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default SignUpForm;