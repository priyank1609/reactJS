import React, { useState } from 'react'
import LearnReactQuery from './LearnReactQuery'

const WrapperReactQuery = () => {
    const [show, setShow] = useState(true);

    return (
        <div>
            <button onClick={() => setShow(prev => !prev)}>Toggle</button>
            {show && <LearnReactQuery />}
        </div>
    )
}

export default WrapperReactQuery
