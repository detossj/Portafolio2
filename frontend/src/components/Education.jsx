import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { GraduationCap, Calendar } from 'lucide-react';
import usePortfolioStore from '@/stores/portfolioStore';

const Education = () => {

  const education = usePortfolioStore((state) => state.education);
  return (
    <section 
      id="education" 
      className="py-16 px-6 md:py-24 md:px-8 bg-brand-bg"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8 max-w-[900px] mx-auto">
          {education.map((education) => (
            <Card 
              key={education?.id} 
              className="bg-brand-surface border border-brand-border transition-all duration-300 ease-in-out overflow-hidden hover:border-brand-primary hover:-translate-y-[5px] hover:shadow-xl hover:shadow-brand-primary/10"
            >
              <CardHeader className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center p-8 border-b border-brand-border">
                <div className="w-20 h-20 rounded-full bg-brand-primary flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-brand-bg" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-brand-text-primary mb-3">{education?.degree}</h3>
                <p className="text-brand-text-secondary text-[1.1rem] font-medium mb-4">{education?.institution}</p>
                
                <div className="flex items-center gap-2 text-brand-text-muted text-sm mb-4 flex-wrap">
                  <Calendar className="w-4 h-4" />
                  <span>{education?.startDate} - {education?.endDate}</span>
                  <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full font-semibold text-[0.85rem]">
                    {education?.status}
                  </span>
                </div>
                
                <p className="text-brand-text-muted leading-relaxed text-[0.95rem]">{education?.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;