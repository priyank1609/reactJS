import Product from '@/components/product';
import React from 'react'

const ProductsList = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    return (
        <div className='flex flex-wrap gap-4'>
            {data.products.map((item) => (
                <Product product={item} key={item.id} />
            ))}
        </div>
    )
}

export default ProductsList
