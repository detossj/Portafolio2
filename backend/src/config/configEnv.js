import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  LARAVEL_API_URL: process.env.LARAVEL_API_URL,
};