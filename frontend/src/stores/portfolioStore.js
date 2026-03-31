import { create } from 'zustand';
import { 
  getAll 
} from '@/services/portfolioService'; 

const usePortfolioStore = create((set, get) => ({
  nav: [],
  hero: null,
  about: null,
  skills: [],
  education: [],
  experience: [],
  projects: [],
  contact: null,
  footer: null,
  theme: null,
  cargando: false,

  // Una función maestra para cargar todo de golpe al entrar a la página
  fetchAll: async () => {
    set({ cargando: true });
    try {
      const data = await getAll();
      set({
        nav: data.nav || [],
        hero: data.hero || null,
        about: data.about || null,
        skills: data.skills || [],
        education: data.education || [],
        experience: data.experience || [],
        projects: data.projects || [],
        contact: data.contact || null,
        footer: data.footer || null,
        theme: data.theme || null,
      });
    } catch (error) {
      console.error("Error cargando toda la data inicial:", error);
    } finally {
      set({ cargando: false });
    }
  }
}));

export default usePortfolioStore;