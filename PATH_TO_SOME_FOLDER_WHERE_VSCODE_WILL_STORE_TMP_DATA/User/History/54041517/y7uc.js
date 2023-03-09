import { createContext, useEffect, useState, useContext } from "react";
//from methods firebase
import {
    createUsersWithEmailPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
//provide the instance from firebase
import { auth } from "../firebase";

const userAuthContext = createContext();

//get the component and wrap
export function userAuthContextProvider({ children }){
    const [user, setUser] = useState("")
    //signUp on  the app
    function signUp(email, password) {
        return createUsersWithEmailPassword(auth, email, password)
    }
    //login on  the app
    function logIn(email, password) {
        return createUsersWithEmailPassword(auth, email, password)
    }

    //when the component gets mount, check if user is null or if there is a user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) = {
            setUser(currentUser);
        });

        return ()=>{
            unsubscribe(); // cleanup when the component is destroyed
        }
    }, []);
    return <userAuthContextProvider >{children}</userAuthContextProvider>
}

//costume hook that will wrap the useContext
export function useUserAuth(){
    return useContext(userAuthContext);
}