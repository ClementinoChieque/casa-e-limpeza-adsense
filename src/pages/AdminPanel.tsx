
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, LogOut } from 'lucide-react';
import ProductForm from '@/components/admin/ProductForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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

const AdminPanel = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin-auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchProducts();
    }
  }, [user]);

  const fetchProducts = async () => {
    setLoadingProducts(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Erro ao carregar produtos",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setProducts(data || []);
    }
    setLoadingProducts(false);
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Erro ao sair",
        description: error.message,
        variant: "destructive",
      });
    } else {
      navigate('/admin-auth');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este produto?')) return;

    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Erro ao excluir produto",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Produto excluído!",
        description: "O produto foi removido com sucesso.",
      });
      fetchProducts();
    }
  };

  const openEditDialog = (product: Product) => {
    setEditingProduct(product);
    setDialogOpen(true);
  };

  const openAddDialog = () => {
    setEditingProduct(null);
    setDialogOpen(true);
  };

  const handleProductSaved = () => {
    setDialogOpen(false);
    setEditingProduct(null);
    fetchProducts();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header otimizado para mobile */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Painel Admin</h1>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button 
              onClick={openAddDialog} 
              className="flex items-center gap-2 text-sm sm:text-base"
              size="sm"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Adicionar Produto</span>
              <span className="sm:hidden">Adicionar</span>
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSignOut} 
              className="flex items-center gap-2 text-sm sm:text-base"
              size="sm"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>

        {/* Grid responsivo otimizado para mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {loadingProducts ? (
            <div className="col-span-full text-center py-8">
              <div className="text-lg">Carregando produtos...</div>
            </div>
          ) : products.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <div className="text-lg text-gray-500 mb-4">Nenhum produto encontrado</div>
              <Button onClick={openAddDialog} size="sm">
                Adicionar seu primeiro produto
              </Button>
            </div>
          ) : (
            products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
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
                        onClick={() => openEditDialog(product)}
                        className="h-8 w-8 p-0"
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleDeleteProduct(product.id)}
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
            ))
          )}
        </div>

        {/* Dialog otimizado para mobile */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto m-2">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl">
                {editingProduct ? 'Editar Produto' : 'Adicionar Produto'}
              </DialogTitle>
            </DialogHeader>
            <ProductForm 
              product={editingProduct}
              onSave={handleProductSaved}
              onCancel={() => setDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminPanel;
