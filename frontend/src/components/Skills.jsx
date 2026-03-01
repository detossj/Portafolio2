import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { skills, softSkills } from '@/mocks/mock';

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0b] px-6 py-16 md:px-8 md:pt-32 md:min-h-screen ">
      <div className="mx-auto max-w-[1400px]">
        
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[clamp(2.5rem,5vw,3.5rem)] font-black text-zinc-200">
            Habilidades
          </h2>
          <div className="mx-auto h-1 w-20 rounded-sm bg-gradient-to-r from-[#00ff88] to-[#00d4ff]"></div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card 
              key={category} 
              className="border-zinc-800 bg-[#1a1a1b] transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff88] hover:shadow-[0_10px_30px_rgba(0,255,136,0.1)]"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#00ff88]">
                  {category}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
                {skillList.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 rounded-lg border border-zinc-800/50 bg-[#0a0a0b]/50 p-3 transition-colors hover:border-[#00ff88]/50 hover:bg-[#00ff88]/5"
                    >
                      {IconComponent && (
                        <IconComponent className="h-5 w-5 text-[#00ff88]" />
                      )}
                      <span className="text-[0.95rem] font-medium text-zinc-200">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="mb-8 text-3xl font-bold text-zinc-200">
            Habilidades Blandas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="cursor-default border border-zinc-800 bg-[#1a1a1b] px-6 py-3 text-[0.95rem] font-medium text-[#00ff88] transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff88] hover:bg-[#00ff88]/10"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;