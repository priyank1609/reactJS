import React from 'react'
import { useAuthContext } from './auth-context';

const Navbar = () => {

  const authContext = useAuthContext();

  return (
    <div style={{ backgroundColor: "lightblue", minHeight: "10vh" }}>
      Navbar {authContext.user.name}

      <br />

      <button
        onClick={() =>
          authContext.setUser({
            ...authContext.user,
            name:
              authContext.user.name === "Priyank"
                ? "Parth"
                : "Priyank"
          })
        }
      >
        Toggle Name in Navbar
      </button>
    </div>
  );
};

export default Navbar;