import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Github, Download, Send } from 'lucide-react';
import { toast } from "sonner";
import usePortfolioStore from '@/stores/portfolioStore';
import { getCV } from '@/services/portfolioService';

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

  const handleDownloadCV = async () => {
    toast.info("Descargando CV...", {
      description: "El archivo se descargará en breve.",
    });
  
    try {
      const blob = await getCV();
      
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'JorgeRubilar_CV.pdf');
      
      document.body.appendChild(link);
      link.click();
      
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
  
      toast.success("¡Descarga completada!");
  
    } catch (error) {
      console.error("Error al descargar el CV:", error);
      toast.error("Error en la descarga", {
        description: "No se pudo descargar el archivo en este momento.",
      });
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:py-24 md:px-8 bg-brand-bg">
      <div className="section-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 max-w-[1200px] mx-auto items-stretch">
          
          <div className="contact-info h-full">
            <Card className="bg-brand-surface border border-brand-border h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-brand-text-primary mb-8">Información de contacto</h3>
                
                <div className="mb-8">
                  <div className="flex gap-4 mb-6 pb-6 border-b border-brand-border last:border-b-0 last:mb-0 last:pb-0">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[0.85rem] text-brand-text-muted mb-1 uppercase tracking-wider">Email</p>
                      <a href={`mailto:${contact.email}`} className="text-brand-text-primary text-base font-medium break-all no-underline transition-colors duration-300 hover:text-brand-primary">
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 pb-6 border-b border-brand-border last:border-b-0 last:mb-0 last:pb-0">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[0.85rem] text-brand-text-muted mb-1 uppercase tracking-wider">Teléfono</p>
                      <a href={`tel:${contact.phone}`} className="text-brand-text-primary text-base font-medium break-all no-underline transition-colors duration-300 hover:text-brand-primary">
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 pb-6 border-b border-brand-border last:border-b-0 last:mb-0 last:pb-0">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[0.85rem] text-brand-text-muted mb-1 uppercase tracking-wider">Ubicación</p>
                      <p className="text-brand-text-primary text-base font-medium break-all">{contact.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 pb-6 border-b border-brand-border last:border-b-0 last:mb-0 last:pb-0">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[0.85rem] text-brand-text-muted mb-1 uppercase tracking-wider">GitHub</p>
                      <a 
                        href={contact.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-text-primary text-base font-medium break-all no-underline transition-colors duration-300 hover:text-brand-primary"
                      >
                        {contact.github}
                      </a>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleDownloadCV} 
                  variant="outline"
                  className="group w-full mt-auto flex items-center justify-center gap-2 rounded-lg border border-brand-primary bg-transparent py-6 font-semibold text-brand-primary backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-brand-primary)]"
                >
                  <Download className="h-4 w-4" />
                  Descargar CV
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="contact-form-wrapper h-full">
            <Card className="bg-brand-surface border border-brand-border h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <form onSubmit={handleSubmit} className="flex flex-col h-full">
                  
                  <div className="flex flex-col gap-6 flex-1 mb-8">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-brand-text-primary font-medium text-[0.95rem]">Nombre</Label>
                      <Input
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="Tu nombre"
                        value={formData.name} onChange={handleChange} required
                        className="bg-transparent border-brand-border text-brand-text-primary focus-visible:ring-brand-primary/50"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-brand-text-primary font-medium text-[0.95rem]">Email</Label>
                      <Input
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="tu@email.com"
                        value={formData.email} 
                        onChange={handleChange}
                        required
                        className="bg-transparent border-brand-border text-brand-text-primary focus-visible:ring-brand-primary/50"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="subject" className="text-brand-text-primary font-medium text-[0.95rem]">Asunto</Label>
                      <Input
                        id="subject" 
                        name="subject" 
                        type="text" 
                        placeholder="Asunto del mensaje"
                        value={formData.subject} 
                        onChange={handleChange} 
                        required
                        className="bg-transparent border-brand-border text-brand-text-primary focus-visible:ring-brand-primary/50"
                      />
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <Label htmlFor="message" className="text-brand-text-primary font-medium text-[0.95rem]">Mensaje</Label>
                      <Textarea
                        id="message" 
                        name="message" 
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.message} 
                        onChange={handleChange} 
                        required
                        className="bg-transparent border-brand-border text-brand-text-primary focus-visible:ring-brand-primary/50 min-h-[150px] flex-1 resize-none"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group w-full mt-auto flex items-center justify-center gap-2 rounded-lg border border-brand-primary bg-brand-primary py-6 font-semibold text-brand-bg transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-brand-primary)] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:hover:text-brand-bg hover:border-brand-primary"
                  >
                    {isSubmitting ? 'Enviando...' : (
                      <>
                        <Send className="h-4 w-4" />
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