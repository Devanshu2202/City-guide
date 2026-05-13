import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
    isLogin: boolean;
    login: () => void;
    signout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const UseAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within an Auth Provider");
    }
    return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLogin, setIsLogin] = useState(false);

    const login = () => {
        setIsLogin(true);
    };

    const signout = () => {
        setIsLogin(false);
    };

    const value: AuthContextType = {
        login,
        isLogin,
        signout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};