import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración básica 
app.use(cors({
    origin: 'http://localhost:5173', // Conectamos con Vite del frontend
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Primera ruta (como si fuera tu App.jsx)
app.get('/', (req, res) => {
    res.json({ message: '¡Backend del portafolio corriendo al 100%!' });
});

app.listen(PORT, () => {
    console.log(`Servidor volando en http://localhost:${PORT}`);
});