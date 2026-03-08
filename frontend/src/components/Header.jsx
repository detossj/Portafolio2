import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Button } from './ui/button';
import usePortfolioStore from '@/stores/portfolioStore';


const Header = () => {

  const navItems = usePortfolioStore((state) => state.nav);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b]/80 backdrop-blur-[10px] border-b border-zinc-800/50 transition-all duration-300 ease-in-out">
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
        
      <div className="text-2xl font-black flex items-center gap-1 font-mono tracking-tight">
        <span className="text-[#00ff88] animate-pulse">&lt;</span>
        <span className="text-zinc-200">JR</span>
        <span className="text-[#00ff88] animate-pulse">/&gt;</span>
      </div>

        <nav className="hidden md:flex gap-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.href)}
              className="bg-transparent text-zinc-400 px-4 py-2 text-[0.95rem] font-medium rounded-lg transition-all duration-300 hover:text-[#00ff88] hover:bg-[#00ff88]/10"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a 
          href="https://github.com/detossj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center text-zinc-400 p-2 rounded-lg transition-all duration-300 hover:text-[#00ff88] hover:bg-[#00ff88]/10"
        >
          <Github className="w-5 h-5" />
        </a>

        <Button
          variant="ghost"
          size="icon"
          className="flex md:hidden text-zinc-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>


      {isMenuOpen && (
        <nav className="flex flex-col px-8 py-4 border-t border-zinc-800/50 bg-[#0a0a0b]/95">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.href)}
              className="bg-transparent text-left text-zinc-400 px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:text-[#00ff88] hover:bg-[#00ff88]/10"
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