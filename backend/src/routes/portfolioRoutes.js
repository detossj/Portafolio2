import express from 'express';
import {
    getAll,
    getCV
} from '../controllers/portfolioController.js';

const router = express.Router();

router.get('/all', getAll);
router.get('/download-cv', getCV);

export default router;