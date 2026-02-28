import React, { useState } from 'react'

const ParentToChild = () => {
    const [message] = useState("Hello from parent");
    return <Child text={message} />;
}

function Child({ text }) {
    return <h3>{text}</h3>;
}

export default ParentToChild
