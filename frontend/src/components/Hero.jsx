import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';
import usePortfolioStore from '@/stores/portfolioStore';
import Aurora from './ui/Aurora'; 

const Hero = () => {
  const hero = usePortfolioStore((state) => state.hero);
  const theme = usePortfolioStore((state) => state.theme); 

  const [auroraColors, setAuroraColors] = useState(['#00b8fc', '#3b82f6', '#000000']);
  
  useEffect(() => {
    const getRealColor = (cssVar, fallbackHex) => {
      let color = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
      
      if (!color || color.includes('var(')) {
        return fallbackHex;
      }
      return color;
    };

    const primary = getRealColor('--color-brand-primary', '#00b8fc');
    const secondary = getRealColor('--color-brand-secondary', '#3b82f6');
    const bg = getRealColor('--color-brand-bg', '#000000');
    
    setAuroraColors([primary, secondary, bg]);
    
  }, [hero, theme]);
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative flex flex-col min-h-screen overflow-hidden bg-brand-bg px-6 pt-24 pb-6 md:px-8"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Aurora
          colorStops={auroraColors}
          blend={0.5}
          amplitude={1}
          speed={1}
        />
      </div>

      <div className="relative z-10 flex-1 flex items-center mx-auto w-full max-w-[1400px]">
        <div className="max-w-[800px] md:ml-[10%] w-full">
          <div className="mb-4 text-xl font-medium tracking-wide text-brand-primary">
            {hero?.greeting}
          </div>
          
          <h1 className="mb-6 flex flex-col gap-2 text-[clamp(3rem,8vw,6rem)] font-bold leading-none">
            <span className="text-brand-text-primary">{hero?.firstName}</span>
            <span className="text-brand-primary">{hero?.lastName}</span>
          </h1>
          
          <p className="mb-6 text-[clamp(1.25rem,3vw,2rem)] font-semibold text-brand-text-secondary">
            {hero?.title}
          </p>
          
          <p className="mb-10 max-w-[600px] text-[1.1rem] leading-relaxed text-brand-text-muted">
            {hero?.bio}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row md:flex-wrap">
            <Button 
              onClick={scrollToContact} 
              className="group flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-brand-primary border border-brand-primary px-8 py-3 font-semibold text-brand-bg transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-brand-primary)] hover:text-white"
            >
              <Mail className="h-4 w-4" />
              Contactar
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => window.open(hero?.githubUrl, '_blank')}
              className="group flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-brand-primary bg-transparent px-8 py-3 font-semibold text-brand-primary backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-brand-primary)]"
            >
              <Github className="h-4 w-4" />
              Ver GitHub
            </Button>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 flex w-full justify-center pb-4 mt-8">
        <button 
          onClick={scrollToAbout} 
          className="cursor-pointer border-none bg-transparent p-2 text-brand-primary transition-all duration-300 hover:translate-y-1 hover:brightness-110"
        >
          <ArrowDown className="h-10 w-10 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;