import { createContext, useContext } from "react";

// creating a custom suth context with default values
const AuthContext = createContext({
  user: {
    name: "Priyank New",
    age: 29
  },
  setUser: () => {}
});

// creating a custom component to provide the context to childrens
export const AuthProvider = ({ children, value }) => {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// creating a custom hook for our useAuthContext hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};