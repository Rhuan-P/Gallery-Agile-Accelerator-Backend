import express from 'express';
import { fetchPhotos } from '../controllers/Controller.js';

const router = express.Router();

router.get('/get-photos', fetchPhotos);

export default router;