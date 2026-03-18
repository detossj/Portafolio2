import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import usePortfolioStore from '@/stores/portfolioStore';


const HomePage = () => {
  const { fetchAll, cargando } = usePortfolioStore();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  if (cargando) {
    return (
      <div 
        className="flex min-h-screen w-full items-center justify-center transition-colors duration-300"
        style={{ backgroundColor: 'var(--color-brand-bg, #000000)' }} 
      >
        <div className="relative flex flex-col items-center gap-8">
          <div className="relative h-32 w-32">
            <div
              className="absolute h-full w-full animate-spin rounded-full border-[3px]"
              style={{ 
                animationDuration: '3s',
                borderColor: 'var(--color-brand-surface-alt, rgba(255,255,255,0.1))',
                borderRightColor: 'var(--color-brand-primary, #00b8fc)',
                borderBottomColor: 'var(--color-brand-primary, #00b8fc)'
              }}
            ></div>
            <div
              className="absolute h-full w-full animate-spin rounded-full border-[3px]"
              style={{ 
                animationDuration: '2s', 
                animationDirection: 'reverse',
                borderColor: 'var(--color-brand-surface-alt, rgba(255,255,255,0.1))',
                borderTopColor: 'var(--color-brand-secondary, #3b82f6)'
              }}
            ></div>
            <div
              className="absolute inset-0 animate-pulse rounded-full blur-md opacity-20"
              style={{ 
                background: 'linear-gradient(to top right, var(--color-brand-primary, #00b8fc), transparent)' 
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default HomePage;