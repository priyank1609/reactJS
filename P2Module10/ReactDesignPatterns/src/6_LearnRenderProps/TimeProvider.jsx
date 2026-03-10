import React, { useEffect, useState } from 'react'

const TimeProvider = ({children}) => {
    const [time, setTime] = useState( new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return() => {
            clearInterval(id);
        }
    }, [])

    return children(time);
}

export default TimeProvider
