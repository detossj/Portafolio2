import express from 'express';
import cors from 'cors';
import configEnv from './src/config/configEnv.js'; 
import portfolioRoutes from './src/routes/portfolioRoutes.js';

const app = express();
const PORT = configEnv.PORT; 

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/portfolio', portfolioRoutes);

app.get('/', (req, res) => {
    res.json({ message: '¡Backend del portafolio corriendo al 100%!' });
});

app.listen(PORT, () => {
    console.log(`Servidor volando en http://localhost:${PORT}`);
});