
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Política de Privacidade</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Informações que Coletamos</h2>
            <p className="text-gray-600 mb-6">
              Na Minha Casa, coletamos informações que você nos fornece diretamente, como nome, endereço de e-mail, 
              endereço de entrega e informações de pagamento quando você faz uma compra. Também coletamos informações 
              automaticamente através de cookies e tecnologias similares quando você visita nosso site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Como Usamos Suas Informações</h2>
            <p className="text-gray-600 mb-6">
              Utilizamos suas informações para processar pedidos, fornecer atendimento ao cliente, enviar comunicações 
              sobre produtos e serviços, melhorar nosso site e para fins de marketing (com seu consentimento). 
              Também podemos usar informações agregadas e anônimas para análises estatísticas.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Compartilhamento de Informações</h2>
            <p className="text-gray-600 mb-6">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing 
              sem seu consentimento explícito. Podemos compartilhar informações com prestadores de serviços que nos 
              ajudam a operar nosso negócio, sempre sob acordos de confidencialidade.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
            <p className="text-gray-600 mb-6">
              Nosso site utiliza cookies para melhorar sua experiência de navegação, personalizar conteúdo e anúncios, 
              e analisar nosso tráfego. Você pode controlar o uso de cookies através das configurações do seu navegador. 
              Também utilizamos o Google AdSense para exibir anúncios relevantes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Segurança dos Dados</h2>
            <p className="text-gray-600 mb-6">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações 
              pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia 
              SSL para transações online e acesso restrito aos dados pessoais.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Seus Direitos</h2>
            <p className="text-gray-600 mb-6">
              Você tem o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais. Também pode 
              optar por não receber comunicações de marketing. Para exercer esses direitos, entre em contato conosco 
              através dos canais fornecidos na seção de contato.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Google AdSense</h2>
            <p className="text-gray-600 mb-6">
              Este site utiliza o Google AdSense para exibir anúncios. O Google pode usar cookies para servir anúncios 
              baseados em suas visitas anteriores a este site. Você pode optar por não participar da publicidade 
              personalizada visitando as Configurações de Anúncios do Google.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Alterações nesta Política</h2>
            <p className="text-gray-600 mb-6">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas 
              através de um aviso em nosso site ou por e-mail. A data da última atualização será sempre indicada no 
              topo da política.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contato</h2>
            <p className="text-gray-600 mb-6">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas informações pessoais, 
              entre em contato conosco através do e-mail: privacy@minhacasa.com.br ou pelo telefone (11) 1234-5678.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
