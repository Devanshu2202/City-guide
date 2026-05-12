import { createContext, useContext, useState } from "react";


const AuthContext = createContext(undefined)

export const UseAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error("useAuth must be use within an Auth Provider")
    }
    return context
}


export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false)
    const login = () => {
        setIsLogin(true)
    }

    const signout = () => {
        setIsLogin(false)
    }

    const value = {
        login,
        isLogin,
        signout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}