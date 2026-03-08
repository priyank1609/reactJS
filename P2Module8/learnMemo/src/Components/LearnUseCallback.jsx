import React, { memo, useCallback, useState } from 'react'

const LearnUseCallback = () => {
    console.log("Parent Rendering");
    const [text, setText] = useState("");
    const textHandler = useCallback((e) => {
        setText(e.target.value);
    }, [text])

    return (
        <div className='border rounded-sm p-6 max-w-2xl'>
            <p>Text in Parent: {text}</p>
            <Child textHandler={textHandler} />
        </div>
    )
}
const Child = memo(({textHandler}) => {
    console.log("Child Rendering");
    
    return (
        <div className='border border-red-500 rounded-sm p-6'>
            <div>Inside Child</div>
            <input type="text" className='border rounded-sm' onChange={textHandler} />
        </div>
    )
})

export default LearnUseCallback
