
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="clean-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Sobre a <span className="text-primary">Minha Casa</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Há mais de 10 anos oferecendo os melhores produtos de limpeza para tornar sua casa um lugar ainda mais aconchegante e organizado.
            </p>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossa História</h2>
                <p className="text-gray-600 mb-6">
                  A Minha Casa nasceu da paixão por lares limpos e organizados. Fundada em 2014, começamos como uma pequena 
                  loja familiar com o objetivo de oferecer produtos de limpeza de alta qualidade a preços justos.
                </p>
                <p className="text-gray-600 mb-6">
                  Ao longo dos anos, crescemos e nos especializamos em vassouras, esfregonas, panos e acessórios de limpeza, 
                  sempre mantendo nosso compromisso com a qualidade e satisfação dos clientes.
                </p>
                <p className="text-gray-600">
                  Hoje, atendemos milhares de famílias em todo o Brasil, levando praticidade e eficiência para a limpeza doméstica.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Imagem da História da Empresa</span>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-16 px-4 clean-gradient">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Qualidade</h3>
                <p className="text-gray-600">
                  Selecionamos cuidadosamente cada produto para garantir durabilidade e eficiência na limpeza.
                </p>
              </div>
              <div className="text-center bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Confiança</h3>
                <p className="text-gray-600">
                  Construímos relacionamentos duradouros baseados na transparência e honestidade com nossos clientes.
                </p>
              </div>
              <div className="text-center bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Inovação</h3>
                <p className="text-gray-600">
                  Sempre buscamos as últimas tendências e tecnologias em produtos de limpeza doméstica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Missão */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Nossa Missão</h2>
            <p className="text-xl text-gray-600 mb-8">
              "Facilitar a vida das pessoas oferecendo produtos de limpeza de qualidade superior, 
              tornando a manutenção do lar mais prática, eficiente e prazerosa."
            </p>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">Por que escolher a Minha Casa?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-600">Produtos testados e aprovados</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-600">Entrega rápida e segura</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-600">Atendimento personalizado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-600">Garantia de satisfação</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
