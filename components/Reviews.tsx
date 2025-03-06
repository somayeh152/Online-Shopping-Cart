import { useState } from "react";
import { useProductContext } from "../context/ProductContext";

export default function Reviews() {
    const { product, addReview } = useProductContext();
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(5);

    const handleSubmit = () => {
        if (name.trim() && review.trim()) {
            addReview(name.trim(), review.trim(), rating);
            setName("");
            setReview("");
            setRating(5);
        }
    };

    return (
        <div className="p-6 bg-white rounded-2xl shadow-xl mx-auto mt-2 mb-6 max-w-screen-xl">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review) => (
                    <div key={review.id} className="mb-2 p-2 border-1 border-indigo-400 rounded">
                        <p className="font-medium">{"⭐".repeat(review.rating)}</p>
                        <p className="font-semibold">{review.name}:</p>
                        <p>{review.text}</p>
                    </div>
                ))
            ) : (
                <p>No reviews yet.</p>
            )}

            <h4 className="font-semibold mt-6">Share your opinion:</h4>
            <div className="flex items-baseline">
                <label className="block mt-4 mb-2 mr-2">Rating:</label>
                <select
                    className="p-2 rounded border"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                >
                    {[5, 4, 3, 2, 1].map((rate) => (
                        <option key={rate} value={rate}>
                            {rate} Star{rate > 1 && "s"}
                        </option>
                    ))}
                </select>
            </div>
            <input
                className="w-full p-2 mt-2 border rounded placeholder-gray-400"
                placeholder="Your name..."
                value={name || ''}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                className="w-full p-2 mt-2 border rounded placeholder-gray-400"
                placeholder="Add a review..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-6">
                <button
                    className="mt-2 p-2 bg-blue-500 text-white rounded"
                    onClick={handleSubmit}
                >
                    Submit Review
                </button>
            </div>
        </div>
    );
}
