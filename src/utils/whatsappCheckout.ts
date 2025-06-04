
export const generateWhatsAppCheckoutUrl = (items: any[], totalPrice: number) => {
  const phoneNumber = "+244927156153";
  
  let message = "🛒 *Pedido - Minha Casa*\n\n";
  message += "📋 *Itens do pedido:*\n";
  
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `   Quantidade: ${item.quantity}\n`;
    message += `   Preço unitário: ${item.price.toFixed(2)} AKZ\n`;
    message += `   Subtotal: ${(item.price * item.quantity).toFixed(2)} AKZ\n\n`;
  });
  
  message += `💰 *Total: ${totalPrice.toFixed(2)} AKZ*\n\n`;
  message += "📞 Gostaria de finalizar este pedido. Por favor, entre em contato comigo para confirmar os detalhes de entrega e pagamento.";
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;
};
