
import React from 'react';
import { Button } from '@/components/ui/button';
import AdminProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  video_url: string;
  created_at: string;
}

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
  onAddProduct: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  loading, 
  onEditProduct, 
  onDeleteProduct, 
  onAddProduct 
}) => {
  if (loading) {
    return (
      <div className="col-span-full text-center py-8">
        <div className="text-lg">Carregando produtos...</div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="col-span-full text-center py-8">
        <div className="text-lg text-gray-500 mb-4">Nenhum produto encontrado</div>
        <Button onClick={onAddProduct} size="sm">
          Adicionar seu primeiro produto
        </Button>
      </div>
    );
  }

  return (
    <>
      {products.map((product) => (
        <AdminProductCard
          key={product.id}
          product={product}
          onEdit={onEditProduct}
          onDelete={onDeleteProduct}
        />
      ))}
    </>
  );
};

export default ProductGrid;
