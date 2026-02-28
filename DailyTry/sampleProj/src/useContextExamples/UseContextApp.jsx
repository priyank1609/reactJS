import React from "react";
import { AuthProvider } from "./auth-context";
import Dashboard from "./Dashboard";

const UseContextApp = () => {
    // creating a state variable to be passed to the childrens
    const [user, setUser] = React.useState({
        name: "Priyank",
        age: 26
    });

    // toggler
    function handleToggleName() {
        setUser({
            ...user,
            name: user.name === "Priyank" ? "Parth" : "Priyank"
        })
    }

    return (
        // sending the state variables to the custom component to provide state variable to the childrens
        <AuthProvider value={{ user, setUser }}>
            <button onClick={handleToggleName}>Toggle Name in App</button>
            <Dashboard />
        </AuthProvider>
    );
};

export default UseContextApp;