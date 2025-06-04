
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { generateWhatsAppCheckoutUrl } from '@/utils/whatsappCheckout';

interface CartDrawerProps {
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleWhatsAppCheckout = () => {
    const whatsappUrl = generateWhatsAppCheckoutUrl(items, getTotalPrice());
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-gray-500 text-center mb-4">Seu carrinho está vazio</p>
        <Button onClick={onClose}>Continuar Comprando</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto space-y-4 mt-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h4 className="font-medium text-sm">{item.name}</h4>
              <p className="text-primary font-semibold">{item.price.toFixed(2)} AKZ</p>
              <div className="flex items-center space-x-2 mt-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="font-medium">{item.quantity}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 space-y-4">
        <Separator />
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-bold text-primary">
            {getTotalPrice().toFixed(2)} AKZ
          </span>
        </div>
        <div className="space-y-2">
          <Button 
            className="w-full gradient-bg text-white hover:opacity-90"
            onClick={handleWhatsAppCheckout}
          >
            Finalizar no WhatsApp
          </Button>
          <Button variant="outline" className="w-full" onClick={clearCart}>
            Limpar Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
