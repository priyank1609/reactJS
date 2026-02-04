import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import Child1 from "./Children/Child1";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "",
    ag: 27
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      <h1>{`Hello ${user.name}!`}</h1>
      <button onClick={() => setUser({...user, name: "Priyank Sharma"})}>Send to child</button>
      <Child1 />
    </UserContext.Provider>
  );
}

export default App
