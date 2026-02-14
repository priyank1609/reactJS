import React from 'react'

const Loader = ({message="Loading...."}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full border-t-blue-500  animate-spin"></div>
                <p className="mt-4 text-white text-lg font-semibold">
                    {message}
                </p>
            </div>
        </div>
    );
}

export default Loader
