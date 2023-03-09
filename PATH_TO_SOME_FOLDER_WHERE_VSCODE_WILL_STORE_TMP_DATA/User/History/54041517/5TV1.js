import { createContext } from "react";
//from methods firebase
import {createUserWith}

const userAuthContext = createContext();

//get the component and wrap
export function userAuthContextProvider({ children }){
    return <userAuthContextProvider >{children}</userAuthContextProvider>
}

//costume hook that will wrap the useContext
export function useUserAuth(){
    return useContext(userAuthContext);
}