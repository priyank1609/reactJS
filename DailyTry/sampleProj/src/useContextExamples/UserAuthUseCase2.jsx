import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

const UserAuthUseCase = () => {
  const [user] = useState({ name: "John", isLoggedIn: true });

  return (
    <UserContext.Provider value={user}>
      <Navbar />
    </UserContext.Provider>
  );
}

function Navbar() {
  const user = useContext(UserContext);

  return <p>Welcome, {user.name}</p>;
}

export default UserAuthUseCase;