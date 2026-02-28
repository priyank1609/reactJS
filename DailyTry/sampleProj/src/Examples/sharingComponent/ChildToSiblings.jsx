import React, { useState } from 'react'

const ChildToSiblings = () => {
    const [sharedText, setSharedText] = useState("");

    return (
        <>
            <SiblingA sendToParent={setSharedText} />
            <SiblingB text={sharedText} />
        </>
    );
}

function SiblingA({ sendToParent }) {
    return (
        <button onClick={() => sendToParent("Hi from Sibling A")}>
            Send to sibling B
        </button>
    );
}

function SiblingB({ text }) {
    return <p>From sibling A: {text}</p>;
}

export default ChildToSiblings
