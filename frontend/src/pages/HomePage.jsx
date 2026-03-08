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


  // Arreglar y mejorar diseño de esta pantalla de carga, que se vea más profesional y acorde al estilo del portafolio
  if (cargando) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#0f0f10] text-[#00ff88]">
        <h2 className="text-2xl font-black">Cargando portafolio...</h2>
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