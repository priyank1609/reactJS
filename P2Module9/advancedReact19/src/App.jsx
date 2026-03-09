import { useState } from "react";
import LearnUseApi from "./Learn-Use-Api/LearnUseApi";
import ThemeContext from "./Learn-Use-Api/ThemeContext";
import LearnUseTransition from "./Learn-Use-Transition/LearnUseTransition";
import LearnUseTransition2 from "./Learn-Use-Transition/LearnUseTransition2";
import TodoList from "./Learn-Use-Optimistic/TodoList";

function App() {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext value={{theme, setTheme}}>
      <>
        {/* <LearnUseApi /> */}
        {/* <LearnUseTransition /> */}
        {/* <LearnUseTransition2 /> */}
        <TodoList />
      </>
    </ThemeContext>
  )
}

export default App
