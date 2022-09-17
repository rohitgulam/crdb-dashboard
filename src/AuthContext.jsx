import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }){

    const [user, setUser] =  useState([]);
    const [token, setToken] =  useState([]);
    const [isAuth, setIsAuth] =  useState(false);

    function assignisAuth(){
        setIsAuth(!isAuth)
    }

    function assignUser(user){
        setUser(user)
    }

    function assignToken(token){
        setToken(token)
    }

    return(
        <AuthContext.Provider value={{ isAuth, assignisAuth, user, assignUser, token, assignToken }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;