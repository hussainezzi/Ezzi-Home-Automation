
import React from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';

export const FeaturedProducts: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Products</h2>
                    <p className="mt-4 text-lg text-gray-600">Check out our most popular security solutions.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
