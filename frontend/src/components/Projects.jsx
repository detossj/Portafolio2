import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Github, ExternalLink, Code2, Globe } from 'lucide-react';
import usePortfolioStore from '@/stores/portfolioStore'; 

const Projects = () => {
  const projectsData = usePortfolioStore((state) => state.projects);
  const [activeTab, setActiveTab] = useState('featured');

  const featured = projectsData?.featured || [];
  const githubRepos = projectsData?.github || [];

  const ProjectCard = ({ project }) => (
    <Card className="group bg-brand-surface border border-brand-border overflow-hidden transition-all duration-300 ease-in-out hover:border-brand-primary hover:-translate-y-[5px] hover:shadow-xl hover:shadow-brand-primary/20">
      <div className="relative w-full h-[200px] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <div className="flex gap-4">
            {project.githubUrl && (
              <Button 
                size="sm" 
                variant="secondary" 
                onClick={() => window.open(project.githubUrl, '_blank')} 
                className="bg-brand-surface-alt hover:bg-brand-primary text-brand-text-primary hover:text-brand-bg transition-colors"
              >
                <Github className="w-4 h-4" />
              </Button>
            )}
            {project.liveUrl && (
              <Button 
              size="sm" 
              variant="secondary" 
              onClick={() => window.open(project.liveUrl, '_blank')} 
              className="bg-brand-surface-alt hover:bg-brand-primary text-brand-text-primary hover:text-brand-bg transition-colors"
            >
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-brand-text-primary mb-3 group-hover:text-brand-primary transition-colors">{project.title}</h3>
        <p className="text-brand-text-secondary leading-relaxed mb-4 text-[0.95rem]">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-brand-primary/10 text-brand-primary border border-brand-primary/40 text-[0.8rem] px-3 py-1"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const GithubRepoCard = ({ repo }) => (
    <Card className="bg-brand-surface border border-brand-border transition-all duration-300 ease-in-out hover:border-brand-primary hover:-translate-y-[3px] hover:shadow-lg hover:shadow-brand-primary/15">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3 gap-4">
          <h3 className="text-xl font-bold text-brand-text-primary break-words">{repo.name}</h3>
          <div className="flex items-center gap-1 text-brand-primary font-semibold whitespace-nowrap">
            <Code2 className="w-4 h-4" />
          </div>
        </div>
        <p className="text-brand-text-secondary leading-relaxed mb-4 text-sm">{repo.description}</p>
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <Badge variant="secondary" className="bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/40 text-[0.8rem]">
            {repo.language}
          </Badge>
          
          <Button 
            size="sm" 
            variant="ghost"
            onClick={() => window.open(repo.url, '_blank')} 
            className="text-brand-text-secondary hover:text-brand-primary hover:bg-transparent px-2 transition-colors duration-300"
          >
            Ver repositorio
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-16 px-6 md:py-24 md:px-8 bg-brand-surface-alt">
      <div className="section-container">
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-[1400px] mx-auto">
          <TabsList className="flex gap-2 mb-12 justify-center bg-brand-surface border border-brand-border p-1.5 rounded-full w-fit mx-auto shadow-inner">
            <TabsTrigger 
              value="featured"
              className="rounded-full px-6 py-3 text-sm font-semibold transition-all data-[state=active]:bg-brand-bg data-[state=active]:text-brand-primary text-brand-text-secondary hover:text-brand-text-primary data-[state=active]:shadow-lg data-[state=active]:shadow-brand-primary/30"
            >
              Destacados
            </TabsTrigger>
            <TabsTrigger 
              value="github"
              className="rounded-full px-6 py-3 text-sm font-semibold transition-all data-[state=active]:bg-brand-bg data-[state=active]:text-brand-primary text-brand-text-secondary hover:text-brand-text-primary data-[state=active]:shadow-lg data-[state=active]:shadow-brand-primary/30"
            >
              GitHub
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-0 outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            {featured.length === 0 && (
              <div className="text-center text-zinc-400 p-12">No hay proyectos destacados aún.</div>
            )}
          </TabsContent>

          <TabsContent value="github" className="mt-0 outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {githubRepos.map((repo) => (
                <GithubRepoCard key={repo.id} repo={repo} />
              ))}
            </div>
            {githubRepos.length === 0 && (
              <div className="text-center text-zinc-400 p-12">No hay repositorios disponibles.</div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;