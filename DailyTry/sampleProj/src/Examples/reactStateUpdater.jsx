import React, { useState } from 'react'

const ReactStateUpdater = () => {
    const [ucount, setUCount] = useState(0);
    const [nucount, setnUCount] = useState(0);

    function handleClickUpdater() {
        // We want to increase the count by 3

        setUCount(prev => prev + 1);
        setUCount(prev => prev + 1);
        setUCount(prev => prev + 1);
    }

    function handleClickNonUpdater() {
        // We want to increase the count by 3

        setnUCount(nucount + 1);
        setnUCount(nucount + 1);
        setnUCount(nucount + 1);
    }

    return (
        <div>
            <h2>Count: {ucount}</h2>
            <button onClick={handleClickUpdater}>Increase by updater function</button>

            <h2>Count: {nucount}</h2>
            <button onClick={handleClickNonUpdater}>Increase by non updater function</button>
        </div>
    );
}

export default ReactStateUpdater