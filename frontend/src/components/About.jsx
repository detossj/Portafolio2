import React from 'react';
import * as LucideIcons from 'lucide-react';
import usePortfolioStore from '@/stores/portfolioStore';

const About = () => {

  const about = usePortfolioStore((state) => state.about);
  return (
    <section id="about" className="bg-[#0f0f10] px-6 py-16 md:px-8 md:min-h-screen flex items-center">
      
      <div className="w-full mx-auto max-w-[1400px]">
        
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[clamp(2.5rem,5vw,3.5rem)] font-black text-zinc-200 pt-5">
            Sobre mí
          </h2>
          <div className="mx-auto h-1 w-20 rounded-sm bg-gradient-to-r from-[#00ff88] to-[#00d4ff]"></div>
        </div>

        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[300px_1fr]">
            
            <div className="relative mx-auto h-[250px] w-[250px]">
              <img 
                src={about?.avatar} 
                alt={about?.name}
                className="relative z-10 h-full w-full rounded-2xl border-[3px] border-[#00ff88] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 left-4 top-4 z-0 rounded-2xl border-2 border-[#00ff88]/30"></div>
            </div>

            <div className="text-zinc-400">
              <p className="mb-8 text-[1.1rem] leading-relaxed">
                {about?.description}
              </p>
              
              <div className="flex flex-col gap-6">
                
              {about?.cards?.map((card, index) => {
                const IconComponent = LucideIcons[card.icon]; 
                
                return (
                  <div key={index} className="flex items-start gap-4">
                    {IconComponent ? (
                      <IconComponent className="h-10 w-10 shrink-0 rounded-lg bg-[#00ff88]/10 p-2 text-[#00ff88]" />
                    ) : (
                      /* Un fallback en caso de que el icono no exista o venga mal escrito */
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-red-500/10 p-2 text-red-500">?</div>
                    )}
                    <div>
                      <h4 className="mb-1 text-[1.1rem] font-semibold text-zinc-200">{card?.title}</h4>
                      <p className="text-[0.95rem] text-zinc-500">{card?.text}</p>
                    </div>
                  </div>
                );
              })}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;