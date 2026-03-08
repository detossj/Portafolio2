import { create } from 'zustand';
import { 
  getNav, 
  getHero, 
  getAbout, 
  getSkills, 
  getEducation, 
  getExperience, 
  getProjects, 
  getContact, 
  getFooter 
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
  cargando: false,

  fetchNav: async () => {
    if (get().nav.length > 0) return; 
    set({ cargando: true });
    try {
      const data = await getNav();
      set({ nav: data });
    } catch (error) {
      console.error('Error fetching Nav en Zustand:', error);
      set({ nav: [] });
    } finally {
      set({ cargando: false });
    }
  },

  fetchHero: async () => {
    if (get().hero !== null) return; 
    set({ cargando: true });
    try {
      const data = await getHero();
      set({ hero: data });
    } catch (error) {
      console.error('Error fetching Hero en Zustand:', error);
      set({ hero: null });
    } finally {
      set({ cargando: false });
    }
  },

  fetchAbout: async () => {
    if (get().about !== null) return; 
    set({ cargando: true });
    try {
      const data = await getAbout();
      set({ about: data });
    } catch (error) {
      console.error('Error fetching About en Zustand:', error);
      set({ about: null });
    } finally {
      set({ cargando: false });
    }
  },

  fetchSkills: async () => {
    if (get().skills.length > 0) return;
    set({ cargando: true });
    try {
      const data = await getSkills();
      set({ skills: data });
    } catch (error) {
      console.error('Error fetching Skills en Zustand:', error);
      set({ skills: [] });
    } finally {
      set({ cargando: false });
    }
  },

  fetchEducation: async () => {
    if (get().education.length > 0) return;
    set({ cargando: true });
    try {
        const data = await getEducation();
        set({ education: data });
    } catch (error) {
        console.error('Error fetching Education en Zustand:', error);
        set({ education: [] });
    } finally {
        set({ cargando: false });
    }
  },

  fetchExperience: async () => {
    if (get().experience.length > 0) return;
    set({ cargando: true });
    try {
      const data = await getExperience();
      set({ experience: data });
    } catch (error) {
      console.error('Error fetching Experience en Zustand:', error);
      set({ experience: [] });
    } finally {
      set({ cargando: false });
    }
  },

  fetchProjects: async () => {
    if (get().projects.length > 0) return;
    set({ cargando: true });
    try {
      const data = await getProjects();
      set({ projects: data });
    } catch (error) {
      console.error('Error fetching Projects en Zustand:', error);
      set({ projects: [] });
    } finally {
      set({ cargando: false });
    }
  },

  fetchContact: async () => {
    if (get().contact !== null) return;
    set({ cargando: true });
    try {
      const data = await getContact();
      set({ contact: data });
    } catch (error) {
      console.error('Error fetching Contact en Zustand:', error);
      set({ contact: null });
    } finally {
      set({ cargando: false });
    }
  },

  fetchFooter: async () => {
    if (get().footer !== null) return;
    set({ cargando: true });
    try {
      const data = await getFooter();
      set({ footer: data });
    } catch (error) {
      console.error('Error fetching Footer en Zustand:', error);
      set({ footer: null });
    } finally {
      set({ cargando: false });
    }
  },

  // Una función maestra para cargar todo de golpe al entrar a la página
  fetchAll: async () => {
    set({ cargando: true });
    try {
      // Usamos Promise.all para que todas las peticiones salgan al mismo tiempo (mucho más rápido)
      await Promise.all([
        get().fetchNav(),
        get().fetchHero(),
        get().fetchAbout(),
        get().fetchSkills(),
        get().fetchEducation(),
        get().fetchExperience(),
        get().fetchProjects(),
        get().fetchContact(),
        get().fetchFooter()
      ]);
    } catch (error) {
      console.error("Error cargando toda la data inicial:", error);
    } finally {
      set({ cargando: false });
    }
  }
}));

export default usePortfolioStore;