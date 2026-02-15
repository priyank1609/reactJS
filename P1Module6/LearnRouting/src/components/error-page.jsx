import React from 'react'
import { useRouteError } from 'react-router'

const ErrorPage = ({message}) => {
    const error = useRouteError();

    return (
        <div className='bg-black text-white'>
            <h1>Something went wrong!</h1>
            <p>Error Message: {error.message}</p>
            <div className='p-4 border-l-4 border-l-red-500 mt-4'>
                <p>Error Stack Trace: </p>
                <p>{error.stack}</p>
            </div>
        </div>
    )
}

export default ErrorPage
