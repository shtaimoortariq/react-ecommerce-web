import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListner } from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect( () => {
        const authUnsubscribe =  onAuthStateChangedListner((user) => {
            console.log(user);
        })

        return () => authUnsubscribe;
    }, []);

    return (<UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>)
}

