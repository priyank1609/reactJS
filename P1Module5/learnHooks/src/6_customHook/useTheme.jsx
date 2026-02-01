import { useState } from "react"

export const useTheme = (initTheme = "light") => {
    const [theme, setTheme] = useState(initTheme);

    return {theme, setTheme};
}