import React from 'react'
import { useReducer } from 'react'

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(myReducer, { count: 0 });
    const ACTION_TYPES = {
        INCREMENT: 'INCREMENT',
        DECREMENT: 'DECREMENT',
        RESET: 'RESET'
    }

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
            case 'RESET':
                return {
                    count: 0
                }
            default:
                break;
        }
    }
    function handleAdd() {
        dispatch({type: ACTION_TYPES.INCREMENT})
    }
    function handleSub() {
        dispatch({type: ACTION_TYPES.DECREMENT})
    }
    function handleReset() {
        dispatch({type: ACTION_TYPES.RESET})
    }

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Sub</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default UseReducerHook
