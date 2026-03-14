import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ProductDetailClient from "./product-detail";

export const metadata = {
    title: "Product Details",
    description: "Here are all the products",
};

const ProductPage = async ({ params }) => {
    const { id } = await params;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = response.json();

    return (
        <div className="py-8">
            <ProductDetailClient dataPromise={data} />
        </div>
    );
};

export default ProductPage;
