// src/Components/Product/ProductGrid.js

import React from 'react';
import ProductCard from './ProductCard';
import useFetch from '../Hooks/useFetch';

const ProductGrid = () => {
    const { data: products, loading, error } = useFetch('http://localhost:8072/ecart/productservice/api/fetch');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
