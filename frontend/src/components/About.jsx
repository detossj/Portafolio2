import React from 'react';
import { User, Code, GraduationCap } from 'lucide-react';
import { personalInfo } from '@/mocks/mock';

const About = () => {
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
                src={personalInfo.avatar} 
                alt={personalInfo.name}
                className="relative z-10 h-full w-full rounded-2xl border-[3px] border-[#00ff88] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 left-4 top-4 z-0 rounded-2xl border-2 border-[#00ff88]/30"></div>
            </div>

            <div className="text-zinc-400">
              <p className="mb-8 text-[1.1rem] leading-relaxed">
                {personalInfo.description}
              </p>
              
              <div className="flex flex-col gap-6">
                
                <div className="flex items-start gap-4">
                  <User className="h-10 w-10 shrink-0 rounded-lg bg-[#00ff88]/10 p-2 text-[#00ff88]" />
                  <div>
                    <h4 className="mb-1 text-[1.1rem] font-semibold text-zinc-200">Perfil</h4>
                    <p className="text-[0.95rem] text-zinc-500">Desarrollador en formación</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <GraduationCap className="h-10 w-10 shrink-0 rounded-lg bg-[#00ff88]/10 p-2 text-[#00ff88]" />
                  <div>
                    <h4 className="mb-1 text-[1.1rem] font-semibold text-zinc-200">Formación</h4>
                    <p className="text-[0.95rem] text-zinc-500">9° Semestre Ing. Civil Informática (UCSC)</p>
                  </div>
                </div>


                <div className="flex items-start gap-4">
                  <Code className="h-10 w-10 shrink-0 rounded-lg bg-[#00ff88]/10 p-2 text-[#00ff88]" />
                  <div>
                    <h4 className="mb-1 text-[1.1rem] font-semibold text-zinc-200">Tecnologías</h4>
                    <p className="text-[0.95rem] text-zinc-500">Laravel, React y Kotlin (Android)</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;