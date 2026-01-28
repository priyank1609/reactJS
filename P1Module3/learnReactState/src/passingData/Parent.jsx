import { useState } from "react"
import ChildA from "./ChildA"
import ChildB from "./ChildB";

const Parent = () => {
    const [countParent, setCountParent] = useState(0);

    function handleChildButtonClick() {
        setCountParent(prevCount => prevCount + 1)
    }

    return (
        <div>
            <p>Inside Parent: {countParent}</p>
            <ChildA handleChildButtonClick={handleChildButtonClick} count={countParent}/>
            <ChildB data={countParent}/>
        </div>
    )
}

export default Parent
