import { createContext } from "react";
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

    return <userAuthContextProvider >{children}</userAuthContextProvider>
}

//costume hook that will wrap the useContext
export function useUserAuth(){
    return useContext(userAuthContext);
}