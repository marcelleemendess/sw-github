import { createContext } from "react"

const userAuthContext = createAuthContext()

//get the component and wrap
export function userAuthContextProvider({ children }){
    return <userAuthContextProvider >{children}</userAuthContextProvider>
}

//costume hook that will wrap the useContext
export function useUserAuth(){
    return useContext(userAuthContextProvider);
}