import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({product}) => {
    return (
        <div className='border p-2 flex-auto'>
            <div>
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <div className='flex justify-between items-center'>
                <p>{product.price}</p>
                <Link to={`${product.id}`} className='bg-blue-500 px-4 py-2 hover:bg-blue-600 cursor-pointer'>Explore</Link>
            </div>
        </div>
    )
}

export default ProductCard
