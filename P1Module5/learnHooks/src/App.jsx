import { useState } from "react"
import LearnUseReducer from "./1_useReducer/learnUseReducer"
import LearnUseEffects from "./2_useEffects/LearnUseEffects"
import LearnUseRef2 from "./2_useEffects/LearnUseRef2"
import LearnUseId from "./3_useId/LearnUseId"
import LearnUseRef from "./4_useRef/LearnUseRef"
import Dashboard from "./5_useContext/dashboard"
import { AuthProvider } from "./5_useContext/auth-context"
import LearnCustomHook from "./6_customHook/LearnCustomHook"
import LearnAxios from "./7_axiosLibrary/learnAxios"
import CreatePost from "./7_axiosLibrary/createPost"
import LearnReactQuery from "./8_learnReactQuery/LearnReactQuery"
import WrapperReactQuery from "./8_learnReactQuery/wrapperReactQuery"

function App() {
  const [user, setUser] = useState({
    name: "Priyank",
    age: 26
  })

  function handleToggleName() {
    setUser({
      ...user,
      name: user.name === "Priyank" ? "Parth" : "Priyank"
    })
  }

  return (
    <>
        {/* <LearnUseReducer /> */}
        {/* <LearnUseEffects /> */}
        {/* <LearnUseId /> */}
        {/* <LearnUseRef /> */}
        {/* <LearnUseRef2 /> */}
        {/* <button onClick={handleToggleName}>Toggle Name in App</button>
        <Dashboard /> */}
        {/* <LearnCustomHook /> */}
        {/* <LearnAxios /> */}
        {/* <CreatePost /> */}
        <WrapperReactQuery />
      </>

    // <AuthContext.Provider value={{user, setUser}}>
    // <AuthProvider value={{user, setUser}}>
    //   <>
    //     {/* <LearnUseReducer /> */}
    //     {/* <LearnUseEffects /> */}
    //     {/* <LearnUseId /> */}
    //     {/* <LearnUseRef /> */}
    //     {/* <LearnUseRef2 /> */}
    //     {/* <button onClick={handleToggleName}>Toggle Name in App</button>
    //     <Dashboard /> */}
    //   </>
    // </AuthProvider>
    // </AuthContext.Provider>
  )
}

export default App
