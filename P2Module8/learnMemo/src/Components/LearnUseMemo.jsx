import React from 'react'
import { useRef } from 'react';
import { useMemo } from 'react';
import { useState } from 'react'

const Child = React.memo(({value, obj}) => {
    console.log("Child rendered");
    return <div className='border border-red-500 p-4'>Value in Child {value}</div>
}, (prevProps, nextProps) => {
    return prevProps.obj.firstName === nextProps.obj.firstName && prevProps.obj.age === nextProps.obj.age
})
// const MemoizedChild = React.memo(Child);
const LearnUseMemo = () => {
    const [count, setCount] = useState(0);
    // const a = useMemo(() => {
    //     return [4,5,1,2,3];
    // }, []);

    const a = useRef([4,5,1,2,3]);

    const expensiveCoputation = useMemo(() => {
        console.log("Doing Computation")
        return a.current.reduce((acc, curr) => acc+curr, 0);
        // return a.reduce((acc, curr) => acc+curr, 0);
    }, [a]);

    console.log("Parent rendered");

    const obj = {
        firstName: "Priyank",
        age: 27
    }

    return (
        <div className='flex item-center justify-center h-screen'>
            <div className='flex flex-col items-center gap-4 border p-8 rounded-sm'>
                <button className='bg-teal-600 px-4 py-2 rounded-sm' onClick={() => setCount(prev => prev+1)}>
                    Increment in Parent {count}
                </button>
                <Child value="Hi Bro" obj={obj} />
                {/* <MemoizedChild value="Hi Bro" /> */}
            </div>
        </div>
    )
}

export default LearnUseMemo
