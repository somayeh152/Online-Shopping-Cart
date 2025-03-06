"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

const ProductCard = ({ id, name, price, image }: Product) => {
    const { addToCart } = useCart();

    return (
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <Link href={`/product/${id}`}>
                <img src={image} alt={name} className="w-40 h-40 mx-auto mb-2 cursor-pointer" />
            </Link>
            <Link href={`/product/${id}`}>
                <h2 className="text-lg font-semibold cursor-pointer hover:text-blue-500">{name}</h2>
            </Link>
            <p className="text-gray-600">${price}</p>
            <button
                onClick={() => addToCart({ id, name, price, image, quantity: 1 })}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
               Add To Cart
            </button>
        </div>
    );
};

export default ProductCard;
