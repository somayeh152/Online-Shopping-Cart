"use client";
import { useParams } from "next/navigation";
import { useProduct } from "../../../hooks/useProduct";
import { useCart } from "../../../context/CartContext";
import { ProductProvider } from "../../../context/ProductContext";
import OptionsSelector from "../../../components/OptionsSelector";
import Reviews from "../../../components/Reviews";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    reviews: Review[];
    image: string;
}

interface Review {
    id: string;
    name: string;
    text: string;
    rating: number;
}

export default function ProductPage() {
    const { id } = useParams();
    const { data: product, isLoading, error } = useProduct(id as string);
    const { addToCart, selectedOptions} = useCart();

    if (isLoading) return <p>Loading...</p>;
    if (error || !product) return <p>Product not found</p>;

    const handleAddToCart = () => {
        if (!selectedOptions.size || !selectedOptions.color) {
            alert("Please select a size and color before adding to cart.");
            return;
        }
        addToCart({
            ...product,
            quantity: 1,
            size: selectedOptions.size,
            color: selectedOptions.color,
        });
    };

    const productWithReviews: Product = product;

    return (
        <ProductProvider initialProduct={product}>
                <div className="flex justify-center p-6 bg-white rounded-2xl shadow-xl mt-3 mx-auto max-w-screen-xl">
                    <img
                        src={productWithReviews.image}
                        alt={productWithReviews.name}
                        className="rounded-2xl max-w-60 max-h-60"
                    />
                    <div className="ml-12">
                        <h1 className="text-2xl font-bold mb-4">{productWithReviews.name}</h1>
                        <p className="text-lg text-gray-700 mb-2">${productWithReviews.price}</p>
                        <p className="text-gray-600">{productWithReviews.description}</p>
                        <div className="flex items-center justify-between">
                            <OptionsSelector product={productWithReviews}/>
                            <button
                                onClick={handleAddToCart}
                                className="mt-12 px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <Reviews/>
        </ProductProvider>
);
}
