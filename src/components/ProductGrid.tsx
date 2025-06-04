
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/contexts/CartContext';

const products: Product[] = [
  {
    id: 1,
    name: "Vassoura Premium",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
    description: "Vassoura de alta qualidade com cerdas resistentes, ideal para limpeza de todos os tipos de piso.",
    category: "Vassouras"
  },
  {
    id: 2,
    name: "Esfregona Super Absorvente",
    price: 34.90,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    description: "Esfregona com alta capacidade de absorção, perfeita para limpeza úmida e secagem rápida.",
    category: "Esfregonas"
  },
  {
    id: 3,
    name: "Kit Limpeza Completo",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    description: "Kit completo com vassoura, esfregona, panos e produtos de limpeza essenciais.",
    category: "Kits"
  },
  {
    id: 4,
    name: "Vassoura Mágica 360°",
    price: 45.90,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
    description: "Vassoura com cabeça giratória 360° para alcançar todos os cantos da casa.",
    category: "Vassouras"
  },
  {
    id: 5,
    name: "Esfregona Microfibra",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    description: "Esfregona de microfibra que remove 99% das bactérias sem produtos químicos.",
    category: "Esfregonas"
  },
  {
    id: 6,
    name: "Panos Multiuso (Pack 5)",
    price: 19.90,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    description: "Pack com 5 panos multiuso de alta absorção, ideais para qualquer superfície.",
    category: "Panos"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção de produtos de limpeza de alta qualidade, 
            pensados para tornar sua casa sempre limpa e aconchegante.
          </p>
        </div>
        
        {/* AdSense Banner - Topo da seção de produtos */}
        <div className="mb-8 text-center">
          <div className="bg-gray-100 p-4 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-sm">Espaço para Google AdSense - Banner 728x90</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {/* AdSense Banner - Final da seção de produtos */}
        <div className="mt-12 text-center">
          <div className="bg-gray-100 p-4 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-sm">Espaço para Google AdSense - Banner 728x90</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
