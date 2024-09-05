import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md flex flex-col justify-between h-full relative">
            {/* Add to Wishlist Button */}
            <button className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-full text-sm">
                ♥
            </button>

            <div>
                <img
                    src={product.imageUrls.length > 0 ? product.imageUrls[0] : 'https://via.placeholder.com/150'}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-2">
                    <span className="text-xl font-bold">${product.price}</span>
                </div>
            </div>

            <div className="flex space-x-2 mt-4">
                <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded">
                    Add to Cart
                </button>
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
