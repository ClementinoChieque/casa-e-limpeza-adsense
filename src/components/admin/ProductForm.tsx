
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Upload, X } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  video_url: string;
}

interface ProductFormProps {
  product?: Product | null;
  onSave: () => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || 0,
    category: product?.category || '',
    image_url: product?.image_url || '',
    video_url: product?.video_url || '',
  });
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Arquivo muito grande",
          description: "A imagem deve ter no máximo 5MB",
          variant: "destructive",
        });
        return;
      }
      setImageFile(file);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        toast({
          title: "Arquivo muito grande",
          description: "O vídeo deve ter no máximo 50MB",
          variant: "destructive",
        });
        return;
      }
      
      // Check video duration
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => {
        if (video.duration < 4) {
          toast({
            title: "Vídeo muito curto",
            description: "O vídeo deve ter pelo menos 4 segundos",
            variant: "destructive",
          });
          return;
        }
        setVideoFile(file);
      };
      video.src = URL.createObjectURL(file);
    }
  };

  const uploadFile = async (file: File, bucket: string): Promise<string | null> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) {
      toast({
        title: "Erro no upload",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }

    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = formData.image_url;
      let videoUrl = formData.video_url;

      // Upload new image if selected
      if (imageFile) {
        const uploadedImageUrl = await uploadFile(imageFile, 'product-images');
        if (uploadedImageUrl) {
          imageUrl = uploadedImageUrl;
        } else {
          setLoading(false);
          return;
        }
      }

      // Upload new video if selected
      if (videoFile) {
        const uploadedVideoUrl = await uploadFile(videoFile, 'product-videos');
        if (uploadedVideoUrl) {
          videoUrl = uploadedVideoUrl;
        } else {
          setLoading(false);
          return;
        }
      }

      const productData = {
        ...formData,
        image_url: imageUrl,
        video_url: videoUrl,
      };

      let error;
      if (product) {
        // Update existing product
        const { error: updateError } = await supabase
          .from('products')
          .update(productData)
          .eq('id', product.id);
        error = updateError;
      } else {
        // Create new product
        const { error: insertError } = await supabase
          .from('products')
          .insert([productData]);
        error = insertError;
      }

      if (error) {
        toast({
          title: "Erro ao salvar produto",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Produto salvo!",
          description: `Produto ${product ? 'atualizado' : 'criado'} com sucesso.`,
        });
        onSave();
      }
    } catch (error) {
      toast({
        title: "Erro inesperado",
        description: "Ocorreu um erro ao salvar o produto",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Nome do Produto</label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          placeholder="Digite o nome do produto"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Descrição</label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Descreva o produto"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Preço (AKZ)</label>
          <Input
            name="price"
            type="number"
            step="0.01"
            min="0"
            value={formData.price}
            onChange={handleInputChange}
            required
            placeholder="0.00"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Categoria</label>
          <Input
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Ex: Vassouras"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Imagem do Produto</label>
        <div className="space-y-2">
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="cursor-pointer"
          />
          {(formData.image_url || imageFile) && (
            <div className="relative w-32 h-32">
              <img
                src={imageFile ? URL.createObjectURL(imageFile) : formData.image_url}
                alt="Preview"
                className="w-full h-full object-cover rounded border"
              />
              <Button
                type="button"
                size="sm"
                variant="destructive"
                className="absolute -top-2 -right-2 h-6 w-6 p-0"
                onClick={() => {
                  setImageFile(null);
                  setFormData(prev => ({ ...prev, image_url: '' }));
                }}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Vídeo do Produto (mínimo 4 segundos)
        </label>
        <div className="space-y-2">
          <Input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="cursor-pointer"
          />
          {(formData.video_url || videoFile) && (
            <div className="relative">
              <video
                src={videoFile ? URL.createObjectURL(videoFile) : formData.video_url}
                controls
                className="w-full max-w-xs h-32 object-cover rounded border"
                muted
              />
              <Button
                type="button"
                size="sm"
                variant="destructive"
                className="absolute -top-2 -right-2 h-6 w-6 p-0"
                onClick={() => {
                  setVideoFile(null);
                  setFormData(prev => ({ ...prev, video_url: '' }));
                }}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <Button type="submit" disabled={loading} className="flex-1">
          {loading ? 'Salvando...' : product ? 'Atualizar Produto' : 'Criar Produto'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
