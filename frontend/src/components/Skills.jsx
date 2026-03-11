import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import * as LucideIcons from 'lucide-react'; 
import usePortfolioStore from '@/stores/portfolioStore';

const Skills = () => {
  const skills = usePortfolioStore((state) => state.skills);

  return (
    <section id="skills" className="bg-brand-surface-alt px-6 py-16 md:min-h-screen md:px-8">
      <div className="mx-auto max-w-[1400px]">
        
        <div className="mb-16 text-center">
          <h2 className="mb-4 pt-5 text-[clamp(2.5rem,5vw,3.5rem)] font-black text-brand-text-primary">
            Habilidades
          </h2>
          <div className="mx-auto h-1 w-20 rounded-sm bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills?.categories || {}).map(([category, skillList]) => (
            <Card 
              key={category} 
              className="border-brand-border bg-brand-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:shadow-xl hover:shadow-brand-primary/10"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-brand-primary">
                  {category}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
                {skillList.map((skill, index) => {
                  const IconComponent = LucideIcons[skill.icon];
                  
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 rounded-lg border border-brand-border/50 bg-brand-bg/50 p-3 transition-colors hover:border-brand-primary/50 hover:bg-brand-primary/5"
                    >
                      {IconComponent && (
                        <IconComponent className="h-5 w-5 text-brand-primary" />
                      )}
                      <span className="text-[0.95rem] font-medium text-brand-text-primary">
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
          <h3 className="mb-8 text-3xl font-bold text-brand-text-primary">
            Habilidades Blandas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills?.soft_skills?.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="cursor-default border border-brand-border bg-brand-surface px-6 py-3 text-[0.95rem] font-medium text-brand-primary transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:bg-brand-primary/10"
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