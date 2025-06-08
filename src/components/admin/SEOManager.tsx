
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Save, Globe, Search, Tag } from 'lucide-react';

const SEOManager = () => {
  const [seoData, setSeoData] = useState({
    title: 'Minha Casa - Produtos de Limpeza para sua Casa',
    description: 'Encontre vassouras, esfregonas e produtos de limpeza de alta qualidade em Angola. Entrega rápida via WhatsApp.',
    keywords: 'produtos de limpeza, vassouras, esfregonas, panos, kits limpeza, Angola, Luanda',
    ogTitle: 'Minha Casa - Sua Loja de Produtos de Limpeza',
    ogDescription: 'Produtos de limpeza de qualidade para manter sua casa sempre limpa e organizada.',
    robots: 'index, follow'
  });
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSeoData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    try {
      // Aqui você pode implementar a lógica para salvar no Supabase
      // Por enquanto, vamos simular um salvamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "SEO atualizado!",
        description: "As configurações de SEO foram salvas com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Ocorreu um erro ao salvar as configurações de SEO.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Search className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Configurações de SEO</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Meta Tags Básicas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Meta Tags Básicas</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título da Página (Title Tag)</Label>
              <Input
                id="title"
                name="title"
                value={seoData.title}
                onChange={handleInputChange}
                placeholder="Título otimizado para SEO"
                maxLength={60}
              />
              <p className="text-xs text-gray-500">{seoData.title.length}/60 caracteres</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Meta Description</Label>
              <Textarea
                id="description"
                name="description"
                value={seoData.description}
                onChange={handleInputChange}
                placeholder="Descrição atrativa para os resultados de busca"
                rows={3}
                maxLength={160}
              />
              <p className="text-xs text-gray-500">{seoData.description.length}/160 caracteres</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="keywords">Palavras-chave</Label>
              <Input
                id="keywords"
                name="keywords"
                value={seoData.keywords}
                onChange={handleInputChange}
                placeholder="palavra1, palavra2, palavra3"
              />
              <p className="text-xs text-gray-500">Separe as palavras-chave com vírgulas</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="robots">Meta Robots</Label>
              <Input
                id="robots"
                name="robots"
                value={seoData.robots}
                onChange={handleInputChange}
                placeholder="index, follow"
              />
            </div>
          </CardContent>
        </Card>

        {/* Open Graph */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Tag className="h-5 w-5" />
              <span>Open Graph (Redes Sociais)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ogTitle">OG Title</Label>
              <Input
                id="ogTitle"
                name="ogTitle"
                value={seoData.ogTitle}
                onChange={handleInputChange}
                placeholder="Título para compartilhamento social"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ogDescription">OG Description</Label>
              <Textarea
                id="ogDescription"
                name="ogDescription"
                value={seoData.ogDescription}
                onChange={handleInputChange}
                placeholder="Descrição para compartilhamento social"
                rows={3}
              />
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-sm mb-2">Dicas de SEO:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Use palavras-chave relevantes no título</li>
                <li>• Mantenha a descrição entre 120-160 caracteres</li>
                <li>• Inclua localização (Angola, Luanda) nas palavras-chave</li>
                <li>• Use termos que seus clientes pesquisam</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Preview do Google</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="text-blue-600 text-lg hover:underline cursor-pointer">
              {seoData.title}
            </div>
            <div className="text-green-700 text-sm">
              https://minha-casa.lovable.app/
            </div>
            <div className="text-gray-600 text-sm mt-1">
              {seoData.description}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Botão Salvar */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center space-x-2"
        >
          <Save className="h-4 w-4" />
          <span>{isSaving ? 'Salvando...' : 'Salvar Configurações'}</span>
        </Button>
      </div>
    </div>
  );
};

export default SEOManager;
