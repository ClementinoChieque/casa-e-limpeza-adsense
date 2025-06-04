
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from './CartDrawer';
import { Link } from 'react-router-dom';

const Header = () => {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">MC</span>
          </div>
          <h1 className="text-2xl font-bold text-primary">Minha Casa</h1>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Início
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-primary transition-colors">
            Produtos
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>
        
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Carrinho de Compras</SheetTitle>
            </SheetHeader>
            <CartDrawer onClose={() => setIsCartOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
