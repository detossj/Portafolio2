import React from 'react';
import { Github, Mail } from 'lucide-react';
import usePortfolioStore from '@/stores/portfolioStore';


const Footer = () => {
  const footer = usePortfolioStore((state) => state.footer);
  const navItems = usePortfolioStore((state) => state.nav);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface-alt border-t border-brand-border pt-12 px-6 pb-6 md:pt-12 md:px-8 md:pb-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <div className="flex flex-col gap-4">
            <div className="text-2xl font-black flex items-center gap-1 font-mono tracking-tight">
              <span className="text-brand-primary animate-pulse">&lt;</span>
              <span className="text-brand-text-primary">JR</span>
              <span className="text-brand-primary animate-pulse">/&gt;</span>
            </div>
            <p className="text-brand-text-muted text-[0.9rem] leading-relaxed">
              Desarrollador Full Stack construyendo experiencias web y móviles.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-brand-text-primary mb-2">Navegación</h4>
            <ul className="list-none flex flex-col gap-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a key={index} href={item.href} className="text-brand-text-muted no-underline text-[0.9rem] transition-colors duration-300 hover:text-brand-primary">{item.label}</a>
                 </li>
              ))} 
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-brand-text-primary mb-2">Conecta conmigo</h4>
            <div className="flex gap-4">
              <a 
                href={footer?.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-text-secondary transition-all duration-300 hover:bg-brand-primary/10 hover:border-brand-primary hover:text-brand-primary hover:-translate-y-[2px]"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${footer?.email}`}
                className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-text-secondary transition-all duration-300 hover:bg-brand-primary/10 hover:border-brand-primary hover:text-brand-primary hover:-translate-y-[2px]"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center flex-wrap gap-4 text-center md:text-left">
          <p className="text-brand-text-muted text-[0.85rem]">
            © {currentYear} {footer?.name}. Todos los derechos reservados.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;