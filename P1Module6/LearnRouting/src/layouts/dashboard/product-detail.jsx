import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router'

export async function loadProductById({params}) {
    const id = params.id;
    const response = await axios("https://dummyjson.com/products/"+id);
    return response.data;
}

const ProductDetail = () => {
    // const [product, setProduct] = useState(null);
    // const pramas = useParams();
    // const id = pramas.id;

    // if(!id) return <p>ID not found!</p>

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await axios("https://dummyjson.com/products/"+id);
    //         const data = response.data;
    //         console.log(data)
    //         setProduct(data);
    //     }

    //     // fetchData();
    // }, [id]);

    // if(!product) return <p>Loading...</p>

    const product = useLoaderData();

    return (
        <div className='space-y-2'>
            <div>
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <p className='text-sm'>ID: {product.id}</p>
            <h1 className='text-2xl font-semibold'>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductDetail
