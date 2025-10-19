import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);


export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
            <div className="relative">
                <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-contain p-2 bg-gray-50" />
                {product.isNew && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                )}
                {product.originalPrice && (
                     <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-md font-semibold text-gray-800 mb-2 h-12">{product.name}</h3>
                <div className="flex items-center mb-3">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} filled={i < Math.round(product.rating)} />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">({product.reviewCount} reviews)</span>
                </div>
                <div className="mt-auto">
                    <div className="flex items-baseline mb-4 h-8">
                        {product.price != null ? (
                            <>
                                <p className="text-xl font-bold text-blue-600">Rs {product.price.toLocaleString()}</p>
                                {product.originalPrice && (
                                    <p className="text-sm text-gray-400 line-through ml-2">Rs {product.originalPrice.toLocaleString()}</p>
                                )}
                            </>
                        ) : (
                            <p className="text-sm text-gray-500">Price not available</p>
                        )}
                    </div>
                    <button className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};