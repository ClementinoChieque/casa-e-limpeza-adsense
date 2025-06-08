
import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from './CartDrawer';
import { Link } from 'react-router-dom';

const Header = () => {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/267df6d9-d0ec-44e6-9b66-94a8529cefff.png" 
            alt="Minha Casa Logo" 
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-primary">Minha Casa</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Início
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-primary transition-colors">
            Produtos
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Shopping Cart */}
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

          {/* Mobile Menu Button */}
          <Button 
            variant="outline" 
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/products" 
              className="block text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
