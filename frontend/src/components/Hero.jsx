import React from 'react';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';
import usePortfolioStore from '@/stores/portfolioStore';


const Hero = () => {
  const hero = usePortfolioStore((state) => state.hero);
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0b] to-[#1a1a1b] px-6 py-24 md:px-8"
    >
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)
          `
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div className="max-w-[800px]">
          <div className="mb-4 text-xl font-medium tracking-wide text-[#00ff88]">
            {hero?.greeting}
          </div>
          
          <h1 className="mb-6 flex flex-col gap-2 text-[clamp(3rem,8vw,6rem)] font-bold leading-none">
            <span className="text-zinc-200">{hero?.firstName}</span>
            <span className="text-[#00ff88]">{hero?.lastName}</span>
          </h1>
          
          <p className="mb-6 text-[clamp(1.25rem,3vw,2rem)] font-semibold text-zinc-400">
            {hero?.title}
          </p>
          
          <p className="mb-10 max-w-[600px] text-[1.1rem] leading-relaxed text-zinc-500">
            {hero?.bio}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row md:flex-wrap">
            <Button 
              onClick={scrollToContact} 
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#00ff88] px-8 py-3 font-semibold text-[#0a0a0b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00e67a] hover:shadow-[0_10px_30px_rgba(0,255,136,0.3)] sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Contactar
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => window.open(hero?.githubUrl, '_blank')}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#00ff88] bg-transparent px-8 py-3 font-semibold text-[#00ff88] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00ff88]/10 sm:w-auto"
            >
              <Github className="h-4 w-4" />
              Ver GitHub
            </Button>
          </div>
        </div>

      </div>
      <button 
          onClick={scrollToAbout} 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer border-none bg-transparent p-2 text-[#00ff88] transition-all duration-300 hover:-translate-x-1/2 hover:translate-y-1 hover:text-[#00e67a]"
        >
          <ArrowDown className="h-10 w-10 animate-bounce" />
        </button>
    </section>
  );
};

export default Hero;