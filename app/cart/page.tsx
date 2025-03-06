"use client";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>The shopping cart is empty!</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-around bg-white p-4 rounded-lg mb-2">
                        <img src={item.image} alt={item.name} className="w-30 h-30" />
                        <div>
                            <p className="text-lg">{item.name}</p>
                            <p className="text-gray-600">${item.price}</p>
                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded">
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}
