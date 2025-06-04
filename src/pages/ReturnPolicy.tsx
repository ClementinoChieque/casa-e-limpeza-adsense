
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Política de Devolução e Reembolso</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Direito de Arrependimento</h2>
            <p className="text-gray-600 mb-6">
              Conforme o Código de Defesa do Consumidor (Art. 49), você tem o direito de desistir da compra 
              em até 7 (sete) dias corridos a partir da data de recebimento do produto, sem necessidade de 
              justificativa. Este prazo inicia-se a partir do recebimento do produto ou do último item em 
              caso de pedidos com múltiplos produtos.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condições para Devolução</h2>
            <p className="text-gray-600 mb-4">Para que a devolução seja aceita, o produto deve atender aos seguintes critérios:</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <ul className="text-gray-600 space-y-2">
                <li>• Estar em perfeito estado de conservação</li>
                <li>• Não ter sido usado ou danificado</li>
                <li>• Estar na embalagem original com todos os acessórios</li>
                <li>• Acompanhar a nota fiscal ou documento de compra</li>
                <li>• Estar dentro do prazo de 7 dias corridos</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Como Solicitar uma Devolução</h2>
            <p className="text-gray-600 mb-4">Para solicitar a devolução de um produto:</p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <ol className="text-gray-600 space-y-2">
                <li>1. Entre em contato conosco através do e-mail: devolucoes@minhacasa.com.br</li>
                <li>2. Informe o número do pedido e o motivo da devolução</li>
                <li>3. Aguarde nosso retorno com as instruções de envio</li>
                <li>4. Embale adequadamente o produto e envie conforme orientações</li>
                <li>5. Acompanhe o status através do código de rastreamento</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Produtos com Defeito</h2>
            <p className="text-gray-600 mb-6">
              Se você receber um produto com defeito de fabricação ou danificado durante o transporte, 
              entre em contato conosco imediatamente. Nestes casos, o prazo para comunicação é de até 
              90 dias para produtos duráveis. Assumiremos todos os custos de frete para devolução e 
              envio de novo produto.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frete de Devolução</h2>
            <p className="text-gray-600 mb-6">
              Os custos de frete para devolução ficam por conta do cliente, exceto nos seguintes casos:
              produto com defeito, produto incorreto enviado por nossa parte, ou produto danificado 
              durante o transporte. Nesses casos, forneceremos um código de postagem gratuita.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Processamento do Reembolso</h2>
            <p className="text-gray-600 mb-6">
              Após recebermos e analisarmos o produto devolvido, o reembolso será processado em até 
              10 dias úteis. O valor será creditado na mesma forma de pagamento utilizada na compra original. 
              Para pagamentos via cartão de crédito, o estorno pode levar até 2 faturas para aparecer.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Troca de Produtos</h2>
            <p className="text-gray-600 mb-6">
              Aceitamos trocas por outros produtos de igual ou maior valor. Em caso de produto de maior valor, 
              você deverá pagar a diferença. Se o produto escolhido for de menor valor, a diferença será 
              reembolsada. As mesmas condições de devolução se aplicam às trocas.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Produtos Não Aceitos para Devolução</h2>
            <p className="text-gray-600 mb-4">Por questões de higiene e segurança, alguns produtos não podem ser devolvidos:</p>
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <ul className="text-gray-600 space-y-2">
                <li>• Produtos de higiene pessoal já abertos</li>
                <li>• Produtos danificados por mau uso</li>
                <li>• Produtos personalizados ou feitos sob encomenda</li>
                <li>• Produtos em promoção final de estoque (quando especificado)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Garantia do Fabricante</h2>
            <p className="text-gray-600 mb-6">
              Nossos produtos possuem garantia do fabricante conforme especificado na embalagem de cada item. 
              A garantia cobre defeitos de fabricação e não se aplica a danos causados por uso inadequado, 
              desgaste natural ou acidentes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cancelamento de Pedidos</h2>
            <p className="text-gray-600 mb-6">
              Pedidos podem ser cancelados sem custos enquanto não forem enviados. Após o envio, aplicam-se 
              as regras de devolução. Para cancelar um pedido, entre em contato conosco o mais rápido possível 
              através do e-mail: cancelamentos@minhacasa.com.br.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contato</h2>
            <p className="text-gray-600 mb-6">
              Para dúvidas sobre devoluções, trocas ou reembolsos, entre em contato conosco:
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <ul className="text-gray-600 space-y-2">
                <li>• E-mail: devolucoes@minhacasa.com.br</li>
                <li>• Telefone: (11) 1234-5678</li>
                <li>• WhatsApp: (11) 91234-5678</li>
                <li>• Horário de atendimento: Segunda a sexta, das 9h às 18h</li>
              </ul>
            </div>

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

export default ReturnPolicy;
