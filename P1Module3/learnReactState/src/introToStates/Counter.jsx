import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(counter+1);
        console.log(counter)
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={incrementCounter}>Increase Counter</button>
        </div>
    )
}

export default Counter
