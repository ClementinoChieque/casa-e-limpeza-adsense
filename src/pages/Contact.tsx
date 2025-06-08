
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const generateWhatsAppContactUrl = () => {
    const phoneNumber = "+244927156153";
    
    let message = "📞 *Nova Mensagem de Contato - Minha Casa*\n\n";
    message += `👤 *Nome:* ${formData.name}\n`;
    message += `📧 *E-mail:* ${formData.email}\n`;
    
    if (formData.phone) {
      message += `📱 *Telefone:* ${formData.phone}\n`;
    }
    
    message += `📝 *Assunto:* ${formData.subject}\n\n`;
    message += `💬 *Mensagem:*\n${formData.message}\n\n`;
    message += `⏰ *Data/Hora:* ${new Date().toLocaleString('pt-BR')}`;
    
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const whatsappUrl = generateWhatsAppContactUrl();
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Mensagem enviada!",
        description: "Você será redirecionado para o WhatsApp para enviar sua mensagem.",
      });
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h1>
            <p className="text-xl text-gray-600">
              Estamos aqui para ajudar! Entre em contato conosco através dos canais abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nome Completo *
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      E-mail *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Telefone (opcional)
                    </label>
                    <Input 
                      id="phone" 
                      placeholder="+244 123 456 789" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Assunto *
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Como podemos ajudar?" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Mensagem *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Descreva sua dúvida ou sugestão..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-bg text-white hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-xl">📧</span>
                    <div>
                      <p className="font-medium text-gray-800">E-mail</p>
                      <p className="text-gray-600">minhacasa@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-xl">📞</span>
                    <div>
                      <p className="font-medium text-gray-800">Telefone</p>
                      <p className="text-gray-600">+244 927 156 153</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-xl">💬</span>
                    <div>
                      <p className="font-medium text-gray-800">WhatsApp</p>
                      <p className="text-gray-600">+244 927 156 153</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-xl">🕒</span>
                    <div>
                      <p className="font-medium text-gray-800">Horário de Atendimento</p>
                      <p className="text-gray-600">Segunda a sexta: 9h às 18h</p>
                      <p className="text-gray-600">Sábado: 9h às 14h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Endereço</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-xl">📍</span>
                    <div>
                      <p className="text-gray-600">
                        Rua das Flores, 123<br />
                        Centro - Luanda, Angola<br />
                        CEP: 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
