import React, { use, useContext, useState } from 'react'
import ThemeContext from './ThemeContext'

const LearnUseApi = () => {
    const [toggle, setToggle] = useState(false);
    if(toggle){
        // const {theme} = useContext(ThemeContext);
        const {theme} = use(ThemeContext);
        console.log(theme);
    }

    return (
        <div>
            <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
        </div>
    )
}

export default LearnUseApi
