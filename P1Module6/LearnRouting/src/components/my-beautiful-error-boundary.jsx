import React, { useEffect } from 'react';
import { useRouteError, Link } from 'react-router';

const MyErrorBoundary2 = () => {
  const error = useRouteError();

  useEffect(() => {
    console.log('Error details:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          An unexpected error occurred. Here’s what we know:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 text-left text-sm text-gray-700">
          <p>
            <strong>Error:</strong> {error?.name || 'Unknown'}
          </p>
          <p>
            <strong>Status:</strong> {error?.status || 'N/A'}
          </p>
          <p>
            <strong>Message:</strong> {error?.message || 'No message available'}
          </p>
          {error?.stack && (
            <div className='bg-black text-white'>
              <p className="border-l-4 border-l-red-500 mt-4 p-4">
                {error.stack}
              </p>
            </div>
          )}
        </div>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MyErrorBoundary2;
