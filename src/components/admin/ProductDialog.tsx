
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProductForm from './ProductForm';

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

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
  onSave: () => void;
}

const ProductDialog: React.FC<ProductDialogProps> = ({ 
  open, 
  onOpenChange, 
  product, 
  onSave 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto m-2">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">
            {product ? 'Editar Produto' : 'Adicionar Produto'}
          </DialogTitle>
        </DialogHeader>
        <ProductForm 
          product={product}
          onSave={onSave}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
