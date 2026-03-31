import api_url from "@/config/axiosConfig";


export const getAll = async () => {
  try {
    const response = await api_url.get('/portfolio/all');
    return response.data;
  } catch (error) {
    console.error("Error cargando all:", error);
    throw error;
  }
};

export const getCV = async () => {
  try {
    const response = await api_url.get('/portfolio/download-cv', {
      responseType: 'blob' 
    });
    return response.data; 
  } catch (error) {
    console.error("Error cargando all:", error);
    throw error;
  }
};