import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Github, Download, Send } from 'lucide-react';
import { toast } from "sonner";
import usePortfolioStore from '@/stores/portfolioStore';

const Contact = () => {
  const contact = usePortfolioStore((state) => state.contact) || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("¡Mensaje enviado!", {
        description: "Gracias por contactarme. Te responderé pronto.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleDownloadCV = () => {
    toast.info("Descargando CV...", {
      description: "El archivo se descargará en breve.",
    });
  };

  return (
    <section id="contact" className="py-16 px-6 md:py-24 md:px-8 bg-[#0a0a0b]">
      <div className="section-container">

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 max-w-[1200px] mx-auto items-stretch">

          <div className="contact-info h-full">
            <Card className="bg-[#1a1a1b] border border-[#27272a] h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#e4e4e7] mb-8">Información de contacto</h3>
                
                <div className="mb-8">
                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#27272a] last:border-b-0 last:mb-0 last:pb-0">
                    <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[0.85rem] text-[#71717a] mb-1 uppercase tracking-wider">Email</p>
                      <a href={`mailto:${contact.email}`} className="text-[#e4e4e7] text-base font-medium break-all no-underline transition-colors duration-300 hover:text-[#00ff88]">
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#27272a] last:border-b-0 last:mb-0 last:pb-0">
                    <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[0.85rem] text-[#71717a] mb-1 uppercase tracking-wider">Teléfono</p>
                      <a href={`tel:${contact.phone}`} className="text-[#e4e4e7] text-base font-medium break-all no-underline transition-colors duration-300 hover:text-[#00ff88]">
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#27272a] last:border-b-0 last:mb-0 last:pb-0">
                    <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[0.85rem] text-[#71717a] mb-1 uppercase tracking-wider">Ubicación</p>
                      <p className="text-[#e4e4e7] text-base font-medium break-all">{contact.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 pb-6 border-b border-[#27272a] last:border-b-0 last:mb-0 last:pb-0">
                    <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[0.85rem] text-[#71717a] mb-1 uppercase tracking-wider">GitHub</p>
                      <a 
                        href={contact.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#e4e4e7] text-base font-medium break-all no-underline transition-colors duration-300 hover:text-[#00ff88]"
                      >
                        {contact.github}
                      </a>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleDownloadCV} 
                  variant="outline"
                  className="w-full mt-auto bg-[#0a0a0b] text-[#00ff88] border-[#00ff88] font-semibold py-6 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#00ff88]/10 hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,255,136,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none hover:text-[#ffffff]"
                >
                  <Download className="w-4 h-4" />
                  Descargar CV
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="contact-form-wrapper h-full">
            <Card className="bg-[#1a1a1b] border border-[#27272a] h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <form onSubmit={handleSubmit} className="flex flex-col h-full">
                  
                  <div className="flex flex-col gap-6 flex-1 mb-8">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-[#e4e4e7] font-medium text-[0.95rem]">Nombre</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-[#27272a] text-[#e4e4e7] focus-visible:ring-[#00ff88]/50"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-[#e4e4e7] font-medium text-[0.95rem]">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-[#27272a] text-[#e4e4e7] focus-visible:ring-[#00ff88]/50"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="subject" className="text-[#e4e4e7] font-medium text-[0.95rem]">Asunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Asunto del mensaje"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-[#27272a] text-[#e4e4e7] focus-visible:ring-[#00ff88]/50"
                      />
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <Label htmlFor="message" className="text-[#e4e4e7] font-medium text-[0.95rem]">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-[#27272a] text-[#e4e4e7] focus-visible:ring-[#00ff88]/50 min-h-[150px] flex-1 resize-none"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full mt-auto bg-[#00ff88] text-[#0a0a0b] font-semibold py-6 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#00e67a] hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,255,136,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {isSubmitting ? 'Enviando...' : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;