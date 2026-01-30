import { useEffect, useRef, useState } from "react";

const LearnUseRef = () => {
    let count = 0;
    const [sCount, setScount] = useState(0);
    const rCount = useRef(0);
    const inputRef = useRef(null);
    const result = useRef(null);

    function handleAdd() {
        count++;
        setScount(prev => prev+1);
        rCount.current++;

        console.log("Normal", count);
        console.log("State", sCount);
        console.log("Ref", rCount);
    }

    useEffect(() => {
        result.current = 5;
    }, []);
    console.log(result);

    return (
        <div>
            <p>Normal Count: {count}</p>
            <p>State variable Count: {sCount}</p>
            <p>UseRef variable Count: {rCount.current}</p>
            <button onClick={handleAdd}>Add</button>

            <input ref={inputRef} type="text" />
            <button onClick={() => inputRef.current.focus()}>Focus</button>
        </div>
    )
}

export default LearnUseRef
