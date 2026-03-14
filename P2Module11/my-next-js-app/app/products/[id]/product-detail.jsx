"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { use } from "react";

const ProductDetailClient = ({ dataPromise }) => {
    const data = use(dataPromise);
    return (
        <div className="bg-gray-900 p-6 flex gap-8">
            <Image
                src={data.thumbnail}
                width={400}
                height={0}
                alt={data.title}
                className="w-[400] shrink-0"
            />
            <div className="p-4 space-y-8">
                <h1 className="text-4xl text-white">{data.title}</h1>
                <p className="leading-6 text-gray-400">{data.description}</p>
                <p className="text-4xl">$ {data.price}</p>
                <div
                    className="bg-gray-100 hover:bg-white uppercase px-12 py-4 rounded-lg cursor-pointer text-black w-fit flex gap-6 justify-center items-center"
                    onClick={() => alert(data.title)}
                >
                    Checkout Now
                    <ArrowRight />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailClient;
