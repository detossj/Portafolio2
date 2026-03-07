import { apiClient } from '../config/api.config.js';

export const getNav = async (req, res) => {
    try {
        const response = await apiClient.get('/portfolio/nav');
        res.json(response.data);
    } catch (error) {
        console.error("Error real de Axios:", error.message);
        res.status(500).json({ error: 'Error al obtener Nav desde Laravel' });
    }
};

export const getHero = async (req, res) => {
    try {
        const response = await apiClient.get('/portfolio/hero');
        res.json(response.data);
    } catch (error) {
        console.error("Error real de Axios:", error.message);
        res.status(500).json({ error: 'Error al obtener Hero desde Laravel' });
    }
};

export const getAbout = async (req, res) => {
    try {
        const response = await apiClient.get('/portfolio/about');
        res.json(response.data);
    } catch (error) {
        console.error("Error real de Axios:", error.message);
        res.status(500).json({ error: 'Error al obtener About desde Laravel' });
    }
};

export const getSkills = async (req, res) => {
    try {
        const response = await apiClient.get('/portfolio/skills');
        res.json(response.data);
    } catch (error) {
        console.error("Error real de Axios:", error.message);
        res.status(500).json({ error: 'Error al obtener Skills desde Laravel' });
    }
};

export const getEducation = async (req, res) => {
    try {
        const response = await apiClient.get('/portfolio/education');
        res.json(response.data);
    } catch (error) {
        console.error("Error real de Axios:", error.message);
        res.status(500).json({ error: 'Error al obtener Education desde Laravel' });
    }
};

export const getExperience = async (req, res) => {
    try {
        const response = await apiClient.get('/portfolio/experience');
        res.json(response.data);
    } catch (error) {
        console.error("Error real de Axios:", error.message);
        res.status(500).json({ error: 'Error al obtener Experience desde Laravel' });
    }
};

export const getProjects = async (req, res) => {
    try {
        const response = await apiClient.get('/portfolio/projects');
        res.json(response.data);
    } catch (error) {
        // Mantenemos tu línea de debugueo por si acaso
        console.error("Error real de Axios:", error.message); 
        res.status(500).json({ error: 'Error al obtener Projects desde Laravel' });
    }
};

export const getContact = async (req, res) => {
    try {
        const response = await apiClient.get('/portfolio/contact');
        res.json(response.data);
    } catch (error) {
        console.error("Error real de Axios:", error.message);
        res.status(500).json({ error: 'Error al obtener Contact desde Laravel' });
    }
};

export const getFooter = async (req, res) => {
    try {
        const response = await apiClient.get('/portfolio/footer');
        res.json(response.data);
    } catch (error) {
        console.error("Error real de Axios:", error.message);
        res.status(500).json({ error: 'Error al obtener Footer desde Laravel' });
    }
};