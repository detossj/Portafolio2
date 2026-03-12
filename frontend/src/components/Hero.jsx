import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';
import usePortfolioStore from '@/stores/portfolioStore';
import Aurora from './ui/Aurora'; 

const Hero = () => {
  const hero = usePortfolioStore((state) => state.hero);
  const [auroraColors, setAuroraColors] = useState(['', '', '']);
  useEffect(() => {
    const getRealColor = (cssVar, fallbackHex) => {
      let color = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
      
      if (!color || color.includes('var(')) {
        return fallbackHex;
      }
      return color;
    };

    const primary = getRealColor('--color-brand-primary', '');
    const secondary = getRealColor('--color-brand-secondary', '');
    const bg = getRealColor('--color-brand-bg', '');
    
    setAuroraColors([primary, secondary, bg]);
  }, [hero]); 
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-bg px-6 py-24 md:px-8"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Aurora
          colorStops={auroraColors}
          blend={0.5}
          amplitude={1}
          speed={1}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div className="max-w-[800px] ml-[10%]">
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
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-8 py-3 font-semibold text-brand-bg transition-all duration-300 hover:opacity-90 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Contactar
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => window.open(hero?.githubUrl, '_blank')}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-brand-primary bg-brand-bg/50 px-8 py-3 font-semibold text-brand-primary backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-brand-primary/10 sm:w-auto"
            >
              <Github className="h-4 w-4" />
              Ver GitHub
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout} 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer border-none bg-transparent p-2 text-brand-primary transition-all duration-300 hover:-translate-x-1/2 hover:translate-y-1 hover:brightness-110 z-10"
      >
        <ArrowDown className="h-10 w-10 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;