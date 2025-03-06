"use client";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function Home() {
    const { data: products, isLoading } = useProducts();

    if (isLoading) return <p>Loading... </p>;

    return (
        <div className="grid grid-cols-4 gap-6 p-8">
            {products?.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
}
