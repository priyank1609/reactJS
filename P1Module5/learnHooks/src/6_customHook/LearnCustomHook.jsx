import SignIn from "./sign-in";
// import { useTheme } from "./useTheme"

const LearnCustomHook = () => {
    // const {theme, setTheme} = useTheme('dark');

    return (
        <div>
            {/* <p>{theme}</p>
            <button onClick={() => setTheme(prev => prev == 'light' ? 'dark' : 'light')}>Toggle Theme</button> */}
            <SignIn />
        </div>
    )
}

export default LearnCustomHook
