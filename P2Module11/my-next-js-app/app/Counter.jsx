"use client"

import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(prev => prev+1)} className="px-4 py-2 border-yellow-500 border rounded-lg cursor-pointer">Add +</button>
        </div>
    )
}

export default Counter
