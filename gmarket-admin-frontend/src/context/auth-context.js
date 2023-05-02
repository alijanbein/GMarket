import { createContext } from "react";

const AuthContext = createContext({
    isLoggedIn:false,
    token:"",
    login,
    logout
})

export default AuthContext