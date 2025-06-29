
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import AdminHeader from '@/components/admin/AdminHeader';
import ProductGrid from '@/components/admin/ProductGrid';
import ProductDialog from '@/components/admin/ProductDialog';
import SEOManager from '@/components/admin/SEOManager';
import { useProducts } from '@/hooks/useProducts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Search } from 'lucide-react';

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
  const { products, loading: loadingProducts, fetchProducts, deleteProduct } = useProducts();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin-auth');
    }
  }, [user, loading, navigate]);

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
        <AdminHeader 
          onAddProduct={openAddDialog}
          onSignOut={handleSignOut}
        />

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="products" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Produtos</span>
            </TabsTrigger>
            <TabsTrigger value="seo" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>SEO</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              <ProductGrid
                products={products}
                loading={loadingProducts}
                onEditProduct={openEditDialog}
                onDeleteProduct={deleteProduct}
                onAddProduct={openAddDialog}
              />
            </div>
          </TabsContent>

          <TabsContent value="seo">
            <SEOManager />
          </TabsContent>
        </Tabs>

        <ProductDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          product={editingProduct}
          onSave={handleProductSaved}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
