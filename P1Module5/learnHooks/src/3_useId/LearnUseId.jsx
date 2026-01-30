import { useId } from "react"

const LearnUseId = () => {
    const inputId = useId();

    return (
        <div>
            <label htmlFor={inputId}>Name</label>
            <input id={inputId} type="text" />
        </div>
    )
}

export default LearnUseId
