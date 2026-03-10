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
    <Card className="group bg-[#1a1a1b] border border-[#27272a] overflow-hidden transition-all duration-300 ease-in-out hover:border-[#00ff88] hover:-translate-y-[5px] hover:shadow-[0_10px_40px_rgba(0,255,136,0.2)]">
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
                className="bg-zinc-800 hover:bg-[#00ff88] text-zinc-200 hover:text-black transition-colors"
              >
                <Github className="w-4 h-4" />
              </Button>
            )}
            {project.liveUrl && (
              <Button 
                size="sm" 
                variant="secondary"
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="bg-zinc-800 hover:bg-[#00ff88] text-zinc-200 hover:text-black transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-[#00ff88] transition-colors">{project.title}</h3>
        <p className="text-zinc-400 leading-relaxed mb-4 text-[0.95rem]">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/40 text-[0.8rem] px-3 py-1"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const GithubRepoCard = ({ repo }) => (
    <Card className="bg-[#1a1a1b] border border-[#27272a] transition-all duration-300 ease-in-out hover:border-[#00ff88] hover:-translate-y-[3px] hover:shadow-[0_5px_25px_rgba(0,255,136,0.15)]">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3 gap-4">
          <h3 className="text-xl font-bold text-zinc-100 break-words">{repo.name}</h3>
          <div className="flex items-center gap-1 text-[#00ff88] font-semibold whitespace-nowrap">
            <Code2 className="w-4 h-4" />
          </div>
        </div>
        <p className="text-zinc-400 leading-relaxed mb-4 text-sm">{repo.description}</p>
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <Badge variant="secondary" className="bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/40 text-[0.8rem]">
            {repo.language}
          </Badge>
          
          <Button 
            size="sm" 
            variant="ghost"
            onClick={() => window.open(repo.url, '_blank')}
            className="text-zinc-300 hover:text-[#00ff88] hover:bg-transparent px-2 transition-colors duration-300"
          >
            Ver repositorio
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-16 px-6 md:py-24 md:px-8 bg-[#0f0f10]">
      <div className="section-container">

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-[1400px] mx-auto">
          <TabsList className="flex gap-2 mb-12 justify-center bg-[#141415] border border-zinc-800 p-1.5 rounded-full w-fit mx-auto shadow-inner">
            <TabsTrigger 
              value="featured"
              className="rounded-full px-6 py-3 text-sm font-semibold transition-all data-[state=active]:bg-black data-[state=active]:text-[#00ff88] text-zinc-400 hover:text-white data-[state=active]:shadow-[0_0_15px_rgba(0,255,136,0.3)]"
            >
              Destacados
            </TabsTrigger>
            <TabsTrigger 
              value="github"
              className="rounded-full px-6 py-3 text-sm font-semibold transition-all data-[state=active]:bg-black data-[state=active]:text-[#00ff88] text-zinc-400 hover:text-white data-[state=active]:shadow-[0_0_15px_rgba(0,255,136,0.3)]"
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