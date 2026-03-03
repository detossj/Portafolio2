import React from 'react';

import { Card, CardContent, CardHeader } from './ui/card';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '@/mocks/mock';

const Education = () => {
  return (
    <section 
      id="education" 
      className="py-16 px-6 md:py-24 md:px-8 bg-[#0a0a0b]"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8 max-w-[900px] mx-auto">
          {education.map((edu) => (
            <Card 
              key={edu.id} 
              className="bg-[#1a1a1b] border border-[#27272a] transition-all duration-300 ease-in-out overflow-hidden hover:border-[#00ff88] hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(0,255,136,0.1)]"
            >
              <CardHeader className="bg-gradient-to-br from-[#00ff88]/10 to-[#00d4ff]/10 flex items-center justify-center p-8 border-b border-[#27272a]">
                <div className="w-20 h-20 rounded-full bg-[#00ff88] flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-[#0a0a0b]" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#e4e4e7] mb-3">{edu.degree}</h3>
                <p className="text-[#a1a1aa] text-[1.1rem] font-medium mb-4">{edu.institution}</p>
                
                <div className="flex items-center gap-2 text-[#71717a] text-sm mb-4 flex-wrap">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.startDate} - {edu.endDate}</span>
                  <span className="bg-[#00ff88]/10 text-[#00ff88] px-3 py-1 rounded-full font-semibold text-[0.85rem]">
                    {edu.status}
                  </span>
                </div>
                
                <p className="text-[#71717a] leading-relaxed text-[0.95rem]">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;