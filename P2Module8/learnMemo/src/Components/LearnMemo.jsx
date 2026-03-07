import React from 'react'
import { useState } from 'react'

const Child = React.memo(({value}) => {
    console.log("Child rendered");
    return <div className='border border-red-500 p-4'>Value in Child {value}</div>
})
// const MemoizedChild = React.memo(Child);

const LearnMemo = () => {
    const [count, setCount] = useState(0);

    console.log("Parent rendered");

    return (
        <div className='flex item-center justify-center h-screen'>
            <div className='flex flex-col items-center gap-4 border p-8 rounded-sm'>
                <button className='bg-teal-600 px-4 py-2 rounded-sm' onClick={() => setCount(prev => prev+1)}>
                    Increment in Parent {count}
                </button>
                <Child value="Hi Bro" />
                {/* <MemoizedChild value="Hi Bro" /> */}
            </div>
        </div>
    )
}

export default LearnMemo
