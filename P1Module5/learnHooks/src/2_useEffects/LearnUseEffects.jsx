import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const LearnUseEffects = () => {
    const [data, setData] = useState({});
    const [id, setId] = useState(1);

    function fetchData() {
        const url = "https://dummyjson.com/products/"+id;
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data));
    }
    useEffect(() => {
        fetchData();
        return () => {
            console.log("Cleaning Up")
        }
    }, [id])

    return (
        <>
            <p>{data.title}</p>
            <button disabled={id === 1} onClick={() => setId(prev => prev-1)}>Previous</button>
            <button onClick={() => setId(prev => prev+1)}>Next</button>
        </>
    )
}

export default LearnUseEffects