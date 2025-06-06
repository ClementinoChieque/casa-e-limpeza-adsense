
import React from 'react';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section Simplificado */}
      <section className="clean-gradient py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Produtos de Limpeza
            <span className="text-primary block">Para Sua Casa</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Encontre vassouras, esfregonas e todos os produtos essenciais para manter sua casa sempre limpa e organizada.
          </p>
        </div>
      </section>
      
      {/* Produtos movidos para cima - logo após o hero simplificado */}
      <ProductGrid />
      
      {/* AdSense - Meio da página */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gray-100 p-4 rounded-lg border-2 border-dashed border-gray-300 max-w-md mx-auto">
            <p className="text-gray-500 text-sm">Google AdSense - Banner Quadrado 300x250</p>
          </div>
        </div>
      </div>
      
      {/* Seção de Benefícios */}
      <section className="py-16 px-4 clean-gradient">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Por que escolher a Minha Casa?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm hover-scale">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Frete Grátis</h3>
              <p className="text-gray-600">
                Frete grátis para compras acima de R$ 99,00 em todo o Brasil
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-sm hover-scale">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Compra Segura</h3>
              <p className="text-gray-600">
                Pagamento 100% seguro com as principais bandeiras de cartão
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-sm hover-scale">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Qualidade Garantida</h3>
              <p className="text-gray-600">
                Produtos selecionados com garantia de qualidade e durabilidade
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* AdSense - Final da página */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gray-100 p-4 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-sm">Google AdSense - Banner Inferior 728x90</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
