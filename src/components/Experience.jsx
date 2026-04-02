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
      className="py-16 px-6 md:py-24 md:px-8 md:min-h-screen bg-brand-bg"
    >
      <div className="section-container">

        <div className="max-w-[900px] mx-auto relative before:content-[''] before:absolute before:left-[20px] md:before:left-[30px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-brand-primary before:to-brand-secondary">
          {experience?.map((exp, index) => (
            <div key={exp?.id} className="relative pl-[60px] md:pl-[80px] pb-12">
              
              <div className="absolute left-[9px] md:left-[14px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-primary flex items-center justify-center z-[2] border-4 border-brand-surface-alt">
                <Circle className="w-3 h-3 md:w-4 md:h-4 text-brand-bg" />
              </div>

              <Card className="bg-brand-surface border border-brand-border transition-all duration-300 ease-in-out hover:border-brand-primary hover:translate-x-[5px]  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30">
                <div className="p-6">

                  <div className="flex justify-between items-start mb-2 gap-4 flex-wrap">
                    <h3 className="text-2xl font-bold text-brand-text-primary">{exp?.title}</h3>
                    <span className="text-brand-primary text-sm font-semibold whitespace-nowrap">
                      {exp?.startDate} - {exp?.endDate}
                    </span>
                  </div>
                  
                  <p className="text-brand-text-secondary text-lg font-medium mb-4">{exp?.company}</p>

                  <p className="text-brand-text-muted leading-relaxed mb-4">{exp?.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp?.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="cursor-default bg-brand-primary/10 text-brand-primary border border-brand-primary/30 text-[0.85rem] px-3 py-1 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-primary/20 hover:shadow-lg hover:shadow-brand-primary/30"
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