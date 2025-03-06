"use client";
import { createContext, useState, useContext, ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Review {
    id: string;
    name: string;
    text: string;
    rating: number;
}

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

interface ProductContextType {
    product: Product | null;
    addReview: (name: string, text: string, rating: number) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) throw new Error("useProductContext must be used within a ProductProvider");
    return context;
};

export const ProductProvider = ({ children, initialProduct }: { children: ReactNode; initialProduct: Product | null }) => {
    const [product, setProduct] = useState<Product | null>(initialProduct);

    const addReview = (name: string, text: string, rating: number) => {
        if (!product) return;

        const newReview: Review = {
            id: uuidv4(),
            name,
            text,
            rating,
        };
        setProduct({ ...product, reviews: [...(product.reviews || []), newReview] });
    };

    return (
        <ProductContext.Provider value={{ product, addReview }}>
            {children}
        </ProductContext.Provider>
    );
};
