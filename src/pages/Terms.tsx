
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Termos de Uso</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-600 mb-6">
              Ao acessar e usar este site, você aceita e concorda em ficar vinculado aos termos e condições 
              deste acordo. Se você não concordar com qualquer parte destes termos, não deve usar nosso site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Descrição do Serviço</h2>
            <p className="text-gray-600 mb-6">
              A Minha Casa é uma loja online especializada em produtos de limpeza doméstica, incluindo vassouras, 
              esfregonas, panos e outros itens relacionados. Oferecemos venda online com entrega em todo o território nacional.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Registro e Conta</h2>
            <p className="text-gray-600 mb-6">
              Para fazer pedidos, você pode precisar criar uma conta. Você é responsável por manter a confidencialidade 
              de sua conta e senha, e por todas as atividades que ocorram sob sua conta. Você deve nos notificar 
              imediatamente sobre qualquer uso não autorizado de sua conta.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Pedidos e Pagamentos</h2>
            <p className="text-gray-600 mb-6">
              Todos os pedidos estão sujeitos à disponibilidade e confirmação do preço. Reservamo-nos o direito de 
              recusar qualquer pedido. Os preços estão sujeitos a alterações sem aviso prévio. O pagamento deve ser 
              feito no momento do pedido através dos métodos aceitos em nosso site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Entrega e Frete</h2>
            <p className="text-gray-600 mb-6">
              As entregas são realizadas pelos Correios ou transportadoras parceiras. Os prazos de entrega são estimados 
              e podem variar dependendo da localização. O frete é calculado com base no peso, dimensões e destino do pedido.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Política de Devolução</h2>
            <p className="text-gray-600 mb-6">
              Você tem o direito de devolver produtos dentro de 7 dias corridos após o recebimento, conforme o Código 
              de Defesa do Consumidor. Os produtos devem estar em perfeitas condições, na embalagem original. 
              As despesas de devolução ficam por conta do cliente, exceto em casos de defeito ou erro nosso.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Propriedade Intelectual</h2>
            <p className="text-gray-600 mb-6">
              Todo o conteúdo deste site, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade 
              da Minha Casa ou de seus fornecedores de conteúdo e é protegido por leis de direitos autorais e outras 
              leis de propriedade intelectual.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Uso Aceitável</h2>
            <p className="text-gray-600 mb-6">
              Você concorda em usar nosso site apenas para fins legais e de forma que não infrinja os direitos de 
              terceiros ou restrinja ou impeça o uso e aproveitamento do site por qualquer terceiro. É proibido 
              usar o site para atividades ilegais, fraudulentas ou prejudiciais.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Limitação de Responsabilidade</h2>
            <p className="text-gray-600 mb-6">
              Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais, especiais, 
              consequenciais ou punitivos, incluindo perda de lucros, dados ou outros benefícios econômicos.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Modificações dos Termos</h2>
            <p className="text-gray-600 mb-6">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As modificações entrarão em 
              vigor imediatamente após a publicação no site. O uso continuado do site após as modificações 
              constitui aceitação dos novos termos.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Lei Aplicável</h2>
            <p className="text-gray-600 mb-6">
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais 
              competentes da comarca de São Paulo, SP.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contato</h2>
            <p className="text-gray-600 mb-6">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail: 
              contato@minhacasa.com.br ou pelo telefone (11) 1234-5678.
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

export default Terms;
