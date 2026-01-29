import { useReducer } from "react";
import { useState } from "react"

const learnUseReducer = () => {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(myReducer, {count: 0});

    function myReducer(prevState, action) {
        switch(action.type) {
            case 'INCREMENT':
                return {
                    count: prevState.count+1
                }
            case 'DECREMENT':
                return {
                    count: prevState.count-1
                }
            default:
                break;
        }
    }
    function handleAdd() {
        dispatch({type: 'INCREMENT'})
    }
    function handleSub() {
        dispatch({type: 'DECREMENT'})
    }

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Sub</button>
        </div>
    )
}

export default learnUseReducer
