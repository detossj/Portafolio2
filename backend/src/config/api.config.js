import axios from 'axios';
import configEnv from './configEnv.js';

export const apiClient = axios.create({
  baseURL: configEnv.LARAVEL_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': configEnv.MI_CLAVE_SECRETA
  },
});