import React from 'react';
import { Github, Mail, Heart } from 'lucide-react';
import usePortfolioStore from '@/stores/portfolioStore';


const Footer = () => {
  const footer = usePortfolioStore((state) => state.footer);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f10] border-t border-[#27272a] pt-12 px-6 pb-6 md:pt-12 md:px-8 md:pb-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-black flex items-center gap-1 font-mono tracking-tight">
              <span className="text-[#00ff88] animate-pulse">&lt;</span>
              <span className="text-zinc-200">JR</span>
              <span className="text-[#00ff88] animate-pulse">/&gt;</span>
            </div>
            <p className="text-[#71717a] text-[0.9rem] leading-relaxed">
            Desarrollador Full Stack construyendo experiencias web y móviles.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-[#e4e4e7] mb-2">Navegación</h4>
            <ul className="list-none flex flex-col gap-2">
              <li><a href="#about" className="text-[#71717a] no-underline text-[0.9rem] transition-colors duration-300 hover:text-[#00ff88]">Sobre mí</a></li>
              <li><a href="#skills" className="text-[#71717a] no-underline text-[0.9rem] transition-colors duration-300 hover:text-[#00ff88]">Habilidades</a></li>
              <li><a href="#projects" className="text-[#71717a] no-underline text-[0.9rem] transition-colors duration-300 hover:text-[#00ff88]">Proyectos</a></li>
              <li><a href="#experience" className="text-[#71717a] no-underline text-[0.9rem] transition-colors duration-300 hover:text-[#00ff88]">Experiencia</a></li>
              <li><a href="#contact" className="text-[#71717a] no-underline text-[0.9rem] transition-colors duration-300 hover:text-[#00ff88]">Contacto</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-[#e4e4e7] mb-2">Conecta conmigo</h4>
            <div className="flex gap-4">
              <a 
                href={footer?.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1a1b] border border-[#27272a] flex items-center justify-center text-[#a1a1aa] transition-all duration-300 hover:bg-[#00ff88]/10 hover:border-[#00ff88] hover:text-[#00ff88] hover:-translate-y-[2px]"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${footer?.email}`}
                className="w-10 h-10 rounded-lg bg-[#1a1a1b] border border-[#27272a] flex items-center justify-center text-[#a1a1aa] transition-all duration-300 hover:bg-[#00ff88]/10 hover:border-[#00ff88] hover:text-[#00ff88] hover:-translate-y-[2px]"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#27272a] flex flex-col md:flex-row justify-between items-center flex-wrap gap-4 text-center md:text-left">
          <p className="text-[#71717a] text-[0.85rem]">
            © {currentYear} {footer?.name}. Todos los derechos reservados.
          </p>
        
        </div>
      </div>

    </footer>
  );
};

export default Footer;