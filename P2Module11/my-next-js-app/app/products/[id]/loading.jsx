import React from "react";

const Loading = () => {
    return (
        <div className="py-8 animate-pulse">
            <div className="bg-gray-900 p-6 flex gap-8">
                <div className="w-[400px] h-[250px] bg-gray-700 rounded-md shrink-0" />

                <div className="p-4 space-y-8 w-full">
                    <div className="h-10 bg-gray-700 rounded w-3/4" />
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-700 rounded w-full" />
                        <div className="h-4 bg-gray-700 rounded w-5/6" />
                        <div className="h-4 bg-gray-700 rounded w-2/3" />
                    </div>
                    <div className="h-10 bg-gray-700 rounded w-1/4" />
                    <div className="h-12 bg-gray-300 rounded-lg w-[200px]" />
                </div>
            </div>
        </div>
    );
};

export default Loading;
