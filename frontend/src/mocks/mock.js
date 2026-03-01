import { FileCode2, Database, Smartphone, LayoutTemplate, Server, Palette, Code, TerminalSquare, Send } from 'lucide-react';
// Mock data for Jorge Rubilar Portfolio
// This will be replaced with API calls later

export const personalInfo = {
  name: "Jorge Rubilar",
  title: "Estudiante de Ingeniería Civil Informática",
  university: "Universidad Católica de la Santísima Concepción (UCSC)",
  email: "jrubilar@ing.ucsc.cl",
  phone: "+56989088185",
  github: "detossj",
  githubUrl: "https://github.com/detossj",
  bio: "Apasionado por el desarrollo de software y la resolución de problemas. Combino una gran capacidad de autoaprendizaje con la facilidad para dominar nuevas herramientas y frameworks, adaptándome rápidamente a los desafíos técnicos de cada proyecto.",
  description: "Desarrollador de software y estudiante de Ingeniería Civil Informática con fuerte enfoque en ecosistemas web y móviles. Disfruto construyendo desde el backend e interfaces dinámicas, hasta aplicaciones nativas. Mi objetivo es integrarme a un equipo dinámico donde pueda aportar mi capacidad de autoaprendizaje y versatilidad para crear productos tecnológicos de alto impacto.",
  avatar: "https://avatars.githubusercontent.com/detossj",
  location: "Chile"
};

export const skills = {
  "Frontend": [
    { name: "React", icon: FileCode2 }, 
    { name: "Tailwind CSS", icon: Palette },
    { name: "HTML/CSS", icon: LayoutTemplate }
  ],
  "Backend": [
    { name: "Laravel", icon: Server },
    { name: "Express.js", icon: TerminalSquare },
    { name: "MySQL", icon: Database }
  ],
  "Mobile": [
    { name: "Kotlin (Android)", icon: Smartphone },
    { name: "Android Studio", icon: Smartphone }
  ],
  "Herramientas": [
    { name: "Git", icon: Code },
    { name: "Postman", icon: Send }
  ]
};
  
export const softSkills = [
  "Aprendizaje Autodidacta",
  "Trabajo en equipo",
  "Adaptabilidad",
  "Pensamiento Analítico",
  "Resolución de problemas"
];
  
export const education = [
  {
    id: 1,
    degree: "Ingeniería Civil Informática",
    institution: "Universidad Católica de la Santísima Concepción (UCSC)",
    status: "En curso",
    startDate: "2020",
    endDate: "Presente",
    description: "Formación integral en desarrollo de software, bases de datos, algoritmos y estructuras de datos, ingeniería de software y desarrollo multiplataforma."
  }
];
  
export const experience = [
  {
      id: 1,
      title: "Desarrollador en Formación",
      company: "Proyectos Académicos",
      startDate: "2020",
      endDate: "Presente",
      description: "Desarrollo de aplicaciones web y móviles como parte de la formación universitaria. Implementación de soluciones utilizando Laravel, React y Kotlin.",
      technologies: ["Laravel", "React", "Kotlin", "MySQL"]
  }
];
  
// Mock projects - Will be fetched from API later
export const featuredProjects = [
  {
    id: 1,
    title: "Sistema de Gestión Académica",
    description: "Aplicación web completa para gestión de estudiantes, cursos y calificaciones. Implementada con Laravel en el backend y React en el frontend.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/detossj",
    liveUrl: null,
    featured: true,
    category: "Web"
  },
  {
    id: 2,
    title: "App Móvil de Tareas",
    description: "Aplicación nativa Android desarrollada en Kotlin para gestión de tareas con recordatorios, categorías y sincronización local.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    technologies: ["Kotlin", "Android Studio", "Room Database", "Material Design"],
    githubUrl: "https://github.com/detossj",
    liveUrl: null,
    featured: true,
    category: "Mobile"
  },
  {
    id: 3,
    title: "API RESTful con Laravel",
    description: "Backend robusto con autenticación JWT, manejo de relaciones complejas y documentación con Swagger.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    technologies: ["Laravel", "PostgreSQL", "JWT", "Swagger"],
    githubUrl: "https://github.com/detossj",
    liveUrl: null,
    featured: true,
    category: "Backend"
  },
  {
    id: 4,
    title: "Portfolio Interactivo",
    description: "Sitio web personal desarrollado con React, diseño responsive y animaciones modernas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/detossj",
    liveUrl: "https://jorgerubilar.dev",
    featured: false,
    category: "Web"
  }
];
  
// Mock blog posts - Will be fetched from API later
export const blogPosts = [
  {
    id: 1,
    title: "Introducción a Kotlin para Android",
    excerpt: "Descubre por qué Kotlin se ha convertido en el lenguaje preferido para desarrollo Android y cómo empezar a utilizarlo en tus proyectos.",
    content: "Contenido completo del artículo...",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop",
    author: "Jorge Rubilar",
    publishedAt: "2024-03-15",
    tags: ["Kotlin", "Android", "Mobile Development"],
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Laravel vs Django: ¿Cuál elegir?",
    excerpt: "Comparación detallada entre dos de los frameworks web más populares. Analizamos ventajas, desventajas y casos de uso.",
    content: "Contenido completo del artículo...",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    author: "Jorge Rubilar",
    publishedAt: "2024-02-28",
    tags: ["Laravel", "Django", "Backend"],
    readTime: "8 min"
  },
  {
    id: 3,
    title: "Mi experiencia aprendiendo React",
    excerpt: "Lecciones aprendidas, recursos útiles y consejos para desarrolladores que están comenzando con React.",
    content: "Contenido completo del artículo...",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    author: "Jorge Rubilar",
    publishedAt: "2024-02-10",
    tags: ["React", "JavaScript", "Frontend"],
    readTime: "6 min"
  }
];
  
export const contact = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  github: personalInfo.githubUrl,
  linkedin: null,
  location: "Concepción, Chile"
};