import { createContext, useContext } from "react";

const AuthContext = createContext({
    name: "Priyank",
    age: 26
});

export const AuthProvider = ({children, value}) => {
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}