import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'
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


export const addCollectinAndDocuments = async  (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLocaleLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log("Done")
}

export const getCategoriesAndCollection = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
    
    // .reduce((acc, docSnapshot) => {
    //    const {title, items} = docSnapshot.data();
    //    acc[title.toLocaleLowerCase()] = items;
    //    return acc;
    // }, {})

    // return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,
                {
                    displayName,
                    email,
                    createdAt
                }
            )
        } catch (error) {
            console.log('Error creating the user', error.message);
        }

    }

    return userDocRef;
}

export const signUpWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const loginWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = async (callBack) => {
    return await onAuthStateChanged(auth, callBack)
}