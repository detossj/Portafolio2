import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

const api_url = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_MI_CLAVE_SECRETA
  },
});

export default api_url;