
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Política de Cookies</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">O que são Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies são pequenos arquivos de texto que são colocados no seu dispositivo (computador, smartphone ou tablet) 
              quando você visita nosso site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais 
              eficiente e fornecer informações aos proprietários do site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Como Usamos os Cookies</h2>
            <p className="text-gray-600 mb-6">
              Utilizamos cookies para várias finalidades, incluindo melhorar sua experiência de navegação, personalizar 
              conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Também compartilhamos 
              informações sobre o uso do nosso site com parceiros de análise e publicidade.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tipos de Cookies que Utilizamos</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Cookies Essenciais</h3>
            <p className="text-gray-600 mb-4">
              Estes cookies são necessários para o funcionamento básico do site. Eles permitem que você navegue pelo 
              site e use recursos essenciais como carrinho de compras e check-out. Sem estes cookies, alguns serviços 
              não podem ser fornecidos.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Cookies de Performance</h3>
            <p className="text-gray-600 mb-4">
              Estes cookies coletam informações sobre como você usa nosso site, como quais páginas você visita mais 
              frequentemente e se recebe mensagens de erro. Estes cookies não coletam informações que o identifiquem 
              e são usados apenas para melhorar o funcionamento do site.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Cookies de Funcionalidade</h3>
            <p className="text-gray-600 mb-4">
              Estes cookies permitem que o site lembre de escolhas que você faz (como idioma ou região) e forneçam 
              recursos aprimorados e mais pessoais. Podem ser definidos por nós ou por terceiros cujos serviços 
              adicionamos às nossas páginas.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Cookies de Marketing/Publicidade</h3>
            <p className="text-gray-600 mb-4">
              Estes cookies são usados para entregar anúncios mais relevantes para você e seus interesses. Também são 
              usados para limitar o número de vezes que você vê um anúncio e ajudar a medir a eficácia das campanhas 
              publicitárias. Incluem cookies do Google AdSense.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Google AdSense</h2>
            <p className="text-gray-600 mb-6">
              Utilizamos o Google AdSense para exibir anúncios em nosso site. O Google pode usar cookies para servir 
              anúncios baseados em suas visitas anteriores ao nosso site ou a outros sites. Você pode optar por não 
              participar da publicidade personalizada visitando as Configurações de Anúncios do Google.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Como Controlar os Cookies</h2>
            <p className="text-gray-600 mb-6">
              Você pode controlar e/ou excluir cookies conforme desejar. Pode excluir todos os cookies que já estão 
              no seu dispositivo e configurar a maioria dos navegadores para impedir que sejam colocados. No entanto, 
              se fizer isso, poderá ter que ajustar manualmente algumas preferências sempre que visitar o site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Configurações do Navegador</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <ul className="text-gray-600 space-y-2">
                <li><strong>Chrome:</strong> Configurações &gt; Privacidade e segurança &gt; Cookies e outros dados do site</li>
                <li><strong>Firefox:</strong> Configurações &gt; Privacidade e Segurança &gt; Cookies e dados de sites</li>
                <li><strong>Safari:</strong> Preferências &gt; Privacidade &gt; Cookies e dados de websites</li>
                <li><strong>Edge:</strong> Configurações &gt; Cookies e permissões de site &gt; Cookies e dados armazenados</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies de Terceiros</h2>
            <p className="text-gray-600 mb-6">
              Nosso site pode conter links para outros sites. Não somos responsáveis pelas práticas de privacidade 
              ou pelo conteúdo desses sites. Recomendamos que leia as políticas de cookies de qualquer site que visite.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Atualizações desta Política</h2>
            <p className="text-gray-600 mb-6">
              Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossos serviços 
              ou por outros motivos operacionais, legais ou regulamentares. Recomendamos que verifique esta página 
              regularmente para se manter informado sobre nossa prática de cookies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contato</h2>
            <p className="text-gray-600 mb-6">
              Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco através do e-mail: 
              cookies@minhacasa.com.br ou pelo telefone (11) 1234-5678.
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

export default Cookies;
