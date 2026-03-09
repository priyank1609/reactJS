import React, { useEffect, useState, useTransition } from "react";

const About = () => {
    return (
        <div>
            <h2 className="text-2xl">About Us</h2>
            <p>
                About Us Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Corporis, ducimus! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Eveniet, reprehenderit?
            </p>
        </div>
    );
};

const Contact = () => {
    return (
        <div>
            <h2 className="text-2xl">Contact Us</h2>
            <p>
                Contact Us Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Corporis, ducimus!
            </p>
        </div>
    );
};

const Child = ({ text }) => {
    return <div className="border-b pb-1">{text}</div>;
};

const Songs = () => {
    const items = [];
    for (let i = 0; i < 50000; i++) {
        items.push("Item " + i);
    }

    return (
        <div>
            <h2 className="text-2xl">Songs are Here</h2>
            <div className="p-4 h-[calc(100vh-6rem)] inset-x-0 bottom-0 overflow-auto">
                {items.map((item, index) => (
                    <Child key={index} text={item} />
                ))}
            </div>
        </div>
    );
};

const LearnUseTransition2 = () => {
    const [active, setActive] = useState("about");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (tab) => {
        startTransition(() => {
            setActive(tab);
        })
    };

    return (
        <div className="h-screen flex justify-center">
            <div className="p-4 w-2xl space-y-4">
                <div className="flex gap-4 items-center justify-center">
                    <button
                        className={`${active === "about"
                                ? "bg-teal-600 text-white"
                                : "bg-gray-200"
                            } px-4 py-2 rounded-sm cursor-pointer disabled:opacity-50`}
                        onClick={() => handleTabChange("about")}
                    >
                        About
                    </button>
                    <button
                        className={`${active === "songs"
                                ? "bg-teal-600 text-white"
                                : "bg-gray-200"
                            }  px-4 py-2 rounded-sm cursor-pointer disabled:opacity-50`}
                        onClick={() => handleTabChange("songs")}
                    >
                        Songs
                    </button>
                    <button
                        className={`${active === "contact"
                                ? "bg-teal-600 text-white"
                                : "bg-gray-200"
                            } px-4 py-2 rounded-sm cursor-pointer disabled:opacity-50`}
                        onClick={() => handleTabChange("contact")}
                    >
                        Contact
                    </button>
                </div>
                {isPending ? (
                    <p>Loading Component...</p>
                ) : (
                    <div className="border p-6">
                        {active === "about" && <About />}
                        {active === "songs" && <Songs />}
                        {active === "contact" && <Contact />}
                    </div>
                )}
            </div>
        </div>
    );
};
export default LearnUseTransition2;
