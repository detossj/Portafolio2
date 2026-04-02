import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_LARAVEL_API_URL, 
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_MI_CLAVE_SECRETA
  },
});