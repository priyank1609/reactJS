import { useState } from "react"

const ChildA = (props) => {
    function handleChildButtonClick() {
        props.handleChildButtonClick();
    }

    return (
        <div>
            <p>ChildA count: {props.count}</p>
            <button onClick={handleChildButtonClick}>ChildA Button</button>
        </div>
    )
}

export default ChildA
