"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    size?: string; // اضافه کردن size به CartItem
    color?: string; // اضافه کردن color به CartItem
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    selectedOptions: { size: string; color: string }; // گزینه‌های انتخابی
    setSelectedOptions: React.Dispatch<React.SetStateAction<{ size: string; color: string }>>; // تابع تنظیم گزینه‌های انتخابی
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart باید در CartProvider استفاده شود");
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [selectedOptions, setSelectedOptions] = useState({ size: "M", color: "Green" });

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existingItem = prev.find((p) => p.id === item.id && p.size === item.size && p.color === item.color);
            return existingItem
                ? prev.map((p) => p.id === item.id && p.size === item.size && p.color === item.color
                    ? { ...p, quantity: p.quantity + 1 }
                    : p)
                : [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, selectedOptions, setSelectedOptions, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
