
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos Produtos
            </h1>
          </div>
        </div>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
