import React from 'react'
import TimeProvider from './TimeProvider'

const Paragraph = ({time}) => {
    return <div>
        <h2>This is a Paragraph</h2>
        <p>Time: {time.toLocaleTimeString()}</p>
    </div>
}

const LearnRenderProps = () => {
    return (
        <div>
            <TimeProvider>
                 {(time) => (
                    <div>
                        <Paragraph time={time} />
                        <p>Another Time: {time.toLocaleTimeString()}</p>
                    </div>
                 )}
            </TimeProvider>
        </div>
    )
}

export default LearnRenderProps
