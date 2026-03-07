import axios from 'axios';
import configEnv from './configEnv.js';

export const apiClient = axios.create({
  baseURL: configEnv.LARAVEL_API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Si tu Laravel requiere una API Key para que no cualquiera le pegue, la pondrías aquí:
    // 'X-API-KEY': configEnv.MI_CLAVE_SECRETA
  },
});