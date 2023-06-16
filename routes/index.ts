import express from 'express';
import { authMiddleware } from '../middlewares';
import { addSeller } from '../controllers/sellerController';

const router = express.Router();

router.post('/add', addSeller)

export default router;