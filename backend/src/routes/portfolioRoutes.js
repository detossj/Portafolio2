import express from 'express';
import { 
    getNav, 
    getHero, 
    getAbout,
    getSkills,
    getEducation,
    getExperience,
    getProjects,
    getContact,
    getFooter
} from '../controllers/portfolioController.js';

const router = express.Router();

router.get('/nav', getNav);
router.get('/hero', getHero);
router.get('/about', getAbout);
router.get('/skills', getSkills);
router.get('/education', getEducation);
router.get('/experience', getExperience);
router.get('/projects', getProjects);
router.get('/contact', getContact);
router.get('/footer', getFooter);

export default router;