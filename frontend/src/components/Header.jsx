import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,11,0.8)] backdrop-blur-[10px] border-b border-[rgba(39,39,42,0.5)] transition-all duration-300 ease-in-out">
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
        
        <div className="text-[1.5rem] font-black text-[#e4e4e7] flex items-center gap-1">
          <span className="text-[#e4e4e7]">JR</span>
          <span className="text-[#00ff88] text-[2rem] leading-none">.</span>
        </div>

        <nav className="hidden md:flex gap-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.href)}
              className="bg-transparent border-none text-[#a1a1aa] px-4 py-2 text-[0.95rem] font-medium cursor-pointer transition-all duration-300 rounded-lg hover:text-[#00ff88] hover:bg-[rgba(0,255,136,0.1)]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a 
          href="https://github.com/detossj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center text-[#a1a1aa] transition-all duration-300 p-2 rounded-lg hover:text-[#00ff88] hover:bg-[rgba(0,255,136,0.1)]"
        >
          <Github className="w-5 h-5" />
        </a>

        <button
          className="flex md:hidden text-[#e4e4e7] p-2 hover:bg-white/5 rounded-md transition-colors cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col px-8 py-4 border-t border-[rgba(39,39,42,0.5)] bg-[rgba(10,10,11,0.95)] md:hidden">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.href)}
              className="bg-transparent border-none text-[#a1a1aa] px-4 py-3 text-base font-medium cursor-pointer transition-all duration-300 text-left rounded-lg hover:text-[#00ff88] hover:bg-[rgba(0,255,136,0.1)]"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;