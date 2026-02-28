import React, { useState } from 'react'

const ReactStateBatchUpdate = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        console.log("Before:", count);

        // ❌ snapshot-based updates (will be batched)
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);

        console.log("After:", count);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increase by 3</button>
        </div>
    );
}

export default ReactStateBatchUpdate
