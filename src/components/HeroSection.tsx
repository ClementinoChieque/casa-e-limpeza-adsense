
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="clean-gradient py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
          Produtos de Limpeza
          <span className="text-primary block">Para Sua Casa</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Encontre vassouras, esfregonas e todos os produtos essenciais para manter sua casa sempre limpa e organizada.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="gradient-bg text-white hover:opacity-90 text-lg px-8 py-3">
            Ver Produtos
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3">
            Saiba Mais
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-float">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🧹</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Qualidade Superior</h3>
            <p className="text-gray-600">Produtos duráveis e eficientes</p>
          </div>
          <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚚</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Entrega Rápida</h3>
            <p className="text-gray-600">Receba em casa rapidamente</p>
          </div>
          <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💰</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Melhor Preço</h3>
            <p className="text-gray-600">Preços competitivos sempre</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
