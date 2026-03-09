import React from "react";
import Card from "./card";

const LearnSlots = () => {
    return (
        <div className="space-y-4 p-4">
            <h1 className="text-lg">This is a card:</h1>
            {/* This is card */}
            <Card
                header={
                    <>
                        <div className="bg-gradient-to-br to-amber-600 size-8 rounded-full"></div>
                        <h3 className="text-xl">React Design Patterns</h3>
                    </>
                }

                body={
                    <>
                        <div className="space-y-2">
                            <h4 className="text-lg">The Slots Design Pattern</h4>
                            <p>
                                The slots design pattern in React is a structured
                                approach to building reusable components with
                                customizable sections.{" "}
                            </p>
                        </div>
                    </>
                }

                footer={
                    <>
                        <div className="flex gap-4">
                            <button className="px-2 py-1 text-red-500 border-red-500 border-2 rounded-md cursor-pointer active:opacity-80">
                                Cancel
                            </button>
                            <button className="px-2 py-1 bg-blue-600 rounded-md cursor-pointer active:opacity-80">
                                Ok, Got it
                            </button>
                        </div>
                    </>
                }
            />
            <Card
                header={
                    <>
                        <div className="bg-gradient-to-br to-amber-600 size-8 rounded-full"></div>
                        <h1>This is a good Card</h1>
                    </>
                }

                body={
                    <div>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia tempora quia suscipit, nesciunt molestias illo! Illo similique aliquid eaque?
                        </h2>
                    </div>
                }

                footer={
                    <div className="flex gap-4">
                        <button className="px-2 py-1 text-red-500 border-red-500 border-2 rounded-md cursor-pointer active:opacity-80">
                            Cancel
                        </button>
                        <button className="px-2 py-1 bg-blue-600 rounded-md cursor-pointer active:opacity-80">
                            Ok, Got it
                        </button>
                    </div>
                }
            />
        </div>
    );
};

export default LearnSlots;
