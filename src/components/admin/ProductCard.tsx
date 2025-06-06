
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit, Trash2 } from 'lucide-react';

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

interface AdminProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

const AdminProductCard: React.FC<AdminProductCardProps> = ({ product, onEdit, onDelete }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        {product.image_url && (
          <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-100">
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-base sm:text-lg line-clamp-2">{product.name}</CardTitle>
          <div className="flex gap-1 ml-2 flex-shrink-0">
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => onEdit(product)}
              className="h-8 w-8 p-0"
            >
              <Edit className="h-3 w-3" />
            </Button>
            <Button 
              size="sm" 
              variant="destructive"
              onClick={() => onDelete(product.id)}
              className="h-8 w-8 p-0"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="text-lg sm:text-xl font-bold text-primary">
            {product.price.toFixed(2)} AKZ
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        {product.video_url && (
          <div className="mt-2">
            <video 
              src={product.video_url} 
              className="w-full h-16 sm:h-20 object-cover rounded"
              controls
              muted
              preload="metadata"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminProductCard;
