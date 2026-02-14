import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const[user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("USER_TOKEN");
        if(token){
            const userObj = { name:"Priyank", email: "abc@gmail.com" };
            setUser(userObj);
        }
        setLoading(false);
    }, [])

    if(loading) return <p>Loading....</p>;

    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;
export {useAuth};