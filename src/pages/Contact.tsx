
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
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
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Nome Completo
                  </label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    E-mail
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Telefone (opcional)
                  </label>
                  <Input id="phone" placeholder="+244 123 456 789" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Assunto
                  </label>
                  <Input id="subject" placeholder="Como podemos ajudar?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva sua dúvida ou sugestão..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full gradient-bg text-white hover:opacity-90">
                  Enviar Mensagem
                </Button>
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
