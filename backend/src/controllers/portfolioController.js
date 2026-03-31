import { apiClient } from '../config/api.config.js';

export const getAll = async (req, res) => {
    try {
        const response = await apiClient.get('/portfolio/all');
        res.json(response.data);
    } catch (error) {
        console.error("Error real de Axios:", error.message);
        res.status(500).json({ error: 'Error al obtener all desde Laravel' });
    }
};

export const getCV = async (req, res) => {
    try {
        const response = await apiClient.get('/portfolio/download-cv', {
            responseType: 'stream'
        });

        res.setHeader('Content-Type', 'application/pdf');
        
        res.setHeader('Content-Disposition', 'attachment; filename="JorgeRubilar_CV.pdf"');

        response.data.pipe(res);
    } catch (error) {
        console.error("Error real de Axios:", error.message);
        res.status(500).json({ error: 'Error al obtener CV desde Laravel' });
    }
};