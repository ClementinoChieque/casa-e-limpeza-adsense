
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, LogOut } from 'lucide-react';

interface AdminHeaderProps {
  onAddProduct: () => void;
  onSignOut: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ onAddProduct, onSignOut }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
      <h1 className="text-2xl sm:text-3xl font-bold">Painel Admin</h1>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <Button 
          onClick={onAddProduct} 
          className="flex items-center gap-2 text-sm sm:text-base"
          size="sm"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Adicionar Produto</span>
          <span className="sm:hidden">Adicionar</span>
        </Button>
        <Button 
          variant="outline" 
          onClick={onSignOut} 
          className="flex items-center gap-2 text-sm sm:text-base"
          size="sm"
        >
          <LogOut className="h-4 w-4" />
          Sair
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
