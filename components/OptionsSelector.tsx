import { useContext } from "react";
import { CartContext } from "../context/CartContext";

interface Product {
    sizes: string[];
    colors: string[];
};

interface OptionsSelectorProps {
    product: Product;
};

export default function OptionsSelector({ product }: OptionsSelectorProps) {
    const { selectedOptions, setSelectedOptions } = useContext(CartContext);

    if (!product) {
        return <p>Product Not Found!</p>;
    }

    return (
        <div className="my-4 flex items-end">
            <div className="mr-2">
                <label className="block mb-2">Size:</label>
                <select
                    className="p-2 rounded border"
                    value={selectedOptions.size}
                    onChange={(e) => setSelectedOptions({ ...selectedOptions, size: e.target.value })}
                >
                    {(product?.sizes|| []).map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mr-2">
                <label className="block mt-4 mb-2">Color:</label>
                <select
                    className="p-2 rounded border"
                    value={selectedOptions.color}
                    onChange={(e) => setSelectedOptions({ ...selectedOptions, color: e.target.value })}
                >
                    {(product?.colors || []).map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
