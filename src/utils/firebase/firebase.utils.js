import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc  } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB6bQg6dVzGZxQql4kaZoTHsOW16u_PsJE",
  authDomain: "fir-work-7d080.firebaseapp.com",
  projectId: "fir-work-7d080",
  storageBucket: "fir-work-7d080.appspot.com",
  messagingSenderId: "1056001740271",
  appId: "1:1056001740271:web:e635481f70b6236fccfa1a"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRef,
                {displayName,
                email,
                createdAt}
            )
        } catch(error) {
            console.log('Error creating the user', error.message);
        }

    }

    return userDocRef;
}

export const signUpWithEmailAndPassword = async (email, password) => {
    if(!email || !password ) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const loginWithEmailAndPassword = async (email, password) => {
    if(!email || !password ) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

