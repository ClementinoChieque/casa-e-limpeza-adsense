
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/267df6d9-d0ec-44e6-9b66-94a8529cefff.png" 
                alt="Minha Casa Logo" 
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-xl font-bold">Minha Casa</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Sua loja de confiança para produtos de limpeza e organização doméstica.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Produtos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vassouras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Esfregonas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Panos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kits</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Políticas</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Minha Casa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
