import React from 'react';

import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Circle } from 'lucide-react';
import usePortfolioStore from '@/stores/portfolioStore';

const Experience = () => {

  const experience = usePortfolioStore((state) => state.experience);

  return (
    <section 
      id="experience" 
      className="py-16 px-6 md:py-24 md:px-8 md:min-h-screen bg-[#0a0a0b]"
    >
      <div className="section-container">

        <div className="max-w-[900px] mx-auto relative before:content-[''] before:absolute before:left-[20px] md:before:left-[30px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[#00ff88] before:to-[#00d4ff]">
          {experience?.map((exp, index) => (
            <div key={exp?.id} className="relative pl-[60px] md:pl-[80px] pb-12">
              
              <div className="absolute left-[9px] md:left-[14px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00ff88] flex items-center justify-center z-[2] border-4 border-[#0f0f10]">
                <Circle className="w-3 h-3 md:w-4 md:h-4 text-[#0a0a0b]" />
              </div>

              <Card className="bg-[#1a1a1b] border border-[#27272a] transition-all duration-300 ease-in-out hover:border-[#00ff88] hover:translate-x-[5px] hover:shadow-[0_10px_30px_rgba(0,255,136,0.1)]">
                <div className="p-6">
                  
                  <div className="flex justify-between items-start mb-2 gap-4 flex-wrap">
                    <h3 className="text-2xl font-bold text-[#e4e4e7]">{exp?.title}</h3>
                    <span className="text-[#00ff88] text-sm font-semibold whitespace-nowrap">
                      {exp?.startDate} - {exp?.endDate}
                    </span>
                  </div>
                  
                  <p className="text-[#a1a1aa] text-lg font-medium mb-4">{exp?.company}</p>
                  
                  <p className="text-[#71717a] leading-relaxed mb-4">{exp?.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp?.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30 text-[0.85rem] px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </div>
              </Card>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;