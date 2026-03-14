"use client"

const Error = ({ error, reset }) => {
    return (
        <div className="py-8">
            <div className="bg-red-100 text-red-700 p-6 rounded-md max-w-xl mx-auto text-center space-y-4">
                <h2 className="text-2xl font-semibold">Something went wrong</h2>
                <p>We couldn’t load the product. Please try again later.</p>
                <p className="">{error.message}</p>
                <button
                    onClick={reset}
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                    Retry
                </button>
            </div>
        </div>
    );
}

export default Error