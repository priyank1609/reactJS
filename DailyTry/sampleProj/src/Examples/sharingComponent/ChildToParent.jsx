import React, { useState } from 'react'

const ChildToParent = () => {
    const [value, setValue] = useState("");

    function getFromChild(data) {
        setValue(data);
    }

    return (
        <>
            <Child sendToParent={getFromChild} />
            <p>From Child: {value}</p>
        </>
    )
}

function Child({ sendToParent }) {
    return (
        <>
            <button onClick={() => sendToParent("message from child")}>Send To Parent</button>
        </>
    )
}

export default ChildToParent
