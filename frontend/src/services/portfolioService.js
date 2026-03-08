import api_url from "@/config/axiosConfig";

export const getNav = async () => {
  try {
    const response = await api_url.get('/portfolio/nav');
    return response.data;
  } catch (error) {
    console.error("Error cargando navegación:", error);
    throw error;
  }
};


export const getHero = async () => {
  try {
    const response = await api_url.get('/portfolio/hero');
    return response.data;
  } catch (error) {
    console.error("Error cargando hero:", error);
    throw error;
  }
};


export const getAbout = async () => {
  try {
    const response = await api_url.get('/portfolio/about');
    return response.data;
  } catch (error) {
    console.error("Error cargando about:", error);
    throw error;
  }
};


export const getSkills = async () => {
  try {
    const response = await api_url.get('/portfolio/skills');
    return response.data;
  } catch (error) {
    console.error("Error cargando habilidades:", error);
    throw error;
  }
};


export const getEducation = async () => {
  try {
    const response = await api_url.get('/portfolio/education');
    return response.data;
  } catch (error) {
    console.error("Error cargando educación:", error);
    throw error;
  }
};


export const getExperience = async () => {
  try {
    const response = await api_url.get('/portfolio/experience');
    return response.data;
  } catch (error) {
    console.error("Error cargando experiencia:", error);
    throw error;
  }
};


export const getProjects = async () => {
  try {
    const response = await api_url.get('/portfolio/projects');
    return response.data;
  } catch (error) {
    console.error("Error cargando proyectos:", error);
    throw error;
  }
};


export const getContact = async () => {
  try {
    const response = await api_url.get('/portfolio/contact');
    return response.data;
  } catch (error) {
    console.error("Error cargando contacto:", error);
    throw error;
  }
};


export const getFooter = async () => {
  try {
    const response = await api_url.get('/portfolio/footer');
    return response.data;
  } catch (error) {
    console.error("Error cargando footer:", error);
    throw error;
  }
};