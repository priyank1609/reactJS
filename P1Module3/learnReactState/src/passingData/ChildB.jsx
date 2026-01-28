import { useState } from "react"

const ChildB = (props) => {
    return (
        <div>
            <p>ChildB count: {props.data}</p>
        </div>
    )
}

export default ChildB
