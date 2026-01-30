import { useId, useRef } from "react"

const LearnUseRef2 = () => {
    const inputRef = useRef(null);

    return (
        <div>
            <button onClick={() => inputRef.current.focus()}>Focus from parent</button>
            <Child ref={inputRef}/>
        </div>
    )
}

const Child = ({ref}) => {
    const inputId = useId();

    return (
        <div>
            <label htmlFor={inputId}>Input in Child: </label>
            <input ref={ref} id={inputId} type="text" />
        </div>
    )
}

export default LearnUseRef2
