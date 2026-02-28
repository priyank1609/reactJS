import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

const ThemeUseCase = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "dark" ? "#222" : "#fff" }}>
      Page
    </div>
  );
}

export default ThemeUseCase;