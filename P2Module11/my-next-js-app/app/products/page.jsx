import Product from '@/components/product';
import React, { Suspense } from 'react'
import ProductsList from './products-list';
import { Loader } from 'lucide-react';

const ProductsPage = async () => {
    return (
        <div>
            <div className='space-y-2 my-6'>
                <h2>All Products</h2>
                <p className='text-sm text-gray-400'>Manage all products at one place</p>
            </div>
            <Suspense fallback={<Loader className='animate-spin' />}>
                <ProductsList />
            </Suspense>
        </div>
    )
}

export default ProductsPage
