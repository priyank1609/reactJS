import React from 'react'

const ProductDetailPage = async ({params, searchParams}) => {
    const {id} = await params;
    const seachParamsResult = await searchParams;
    console.log(id);
    console.log(seachParamsResult);

    return (
        <div>
            Products Detail Page
        </div>
    )
}

export default ProductDetailPage
