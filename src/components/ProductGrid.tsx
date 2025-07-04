import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  video_url?: string;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Erro ao carregar produtos",
        description: "Não foi possível carregar os produtos. Usando produtos de exemplo.",
        variant: "destructive",
      });
      // Fallback to static products if database fetch fails
      setProducts([
        {
          id: "1",
          name: "Vassoura Premium",
          price: 29.90,
          image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
          description: "Vassoura de alta qualidade com cerdas resistentes, ideal para limpeza de todos os tipos de piso.",
          category: "Vassouras"
        },
        {
          id: "2",
          name: "Esfregona Super Absorvente",
          price: 34.90,
          image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
          description: "Esfregona com alta capacidade de absorção, perfeita para limpeza úmida e secagem rápida.",
          category: "Esfregonas"
        },
        {
          id: "3",
          name: "Kit Limpeza Completo",
          price: 89.90,
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
          description: "Kit completo com vassoura, esfregona, panos e produtos de limpeza essenciais.",
          category: "Kits"
        },
        {
          id: "4",
          name: "Vassoura Mágica 360°",
          price: 45.90,
          image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
          description: "Vassoura com cabeça giratória 360° para alcançar todos os cantos da casa.",
          category: "Vassouras"
        },
        {
          id: "5",
          name: "Esfregona Microfibra",
          price: 39.90,
          image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
          description: "Esfregona de microfibra que remove 99%% das bactérias sem produtos químicos.",
          category: "Esfregonas"
        },
        {
          id: "6",
          name: "Panos Multiuso (Pack 5)",
          price: 19.90,
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
          description: "Pack com 5 panos multiuso de alta absorção, ideais para qualquer superfície.",
          category: "Panos"
        }
      ]);
    } else {
      console.log('Products fetched successfully:', data);
      // Transform database products to match the expected format
      const transformedProducts = data.map(dbProduct => ({
        id: dbProduct.id,
        name: dbProduct.name,
        price: dbProduct.price,
        image: dbProduct.image_url || "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
        description: dbProduct.description || "",
        category: dbProduct.category || "Produtos",
        video_url: dbProduct.video_url || undefined
      }));
      setProducts(transformedProducts);
    }
    setLoading(false);
  };

  return (
    <section className="py-8 px-4 bg-white">
      <div className="container mx-auto">
        {loading ? (
          <div className="text-center py-8">
            <div className="text-lg">Carregando produtos...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">Nenhum produto encontrado.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
