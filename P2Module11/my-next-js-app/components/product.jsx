import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
    return (
        <div className="space-y-4 group flex-1 p-4 rounded-lg bg-gray-900 border border-gray-800 min-w-[300px] hover:bg-gray-800 transition text-white">
            <Image
                src={product.thumbnail}
                width={200}
                height={0}
                alt={product.title}
                className="size-auto"
            />
            <h2 className="text-lg">{product.title}</h2>
            <p className="font-light text-sm text-gray-300 line-clamp-3">
                {product.description}
            </p>

            <Link
                href={`/products/${product.id}`}
                className="bg-gray-200 group-hover:bg-white transition rounded-md text-gray-700 w-full py-2 flex items-center justify-center uppercase text-sm "
            >
                Checkout Now
            </Link>
        </div>
    );
};

export default Product;
