import { createContext, useState, useEffect, useReducer } from 'react';
import { onAuthStateChangedListner, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}
 
export const userReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}


const INITIAL_STATE = {
    currentUser: null,
} 

export const UserProvider = ({ children }) => {
    // usestate in case of context
    // const [currentUser, setCurrentUser] = useState(null);
   
    //useReducer in case of redux style of code
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }

    const value = { currentUser, setCurrentUser };

    useEffect( () => {
        const authUnsubscribe =  onAuthStateChangedListner((user) => {
            if(user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })

        return () => authUnsubscribe;
    }, []);

    return (<UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>)
}
