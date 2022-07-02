import { Router } from 'express';

import { getPrice } from '../services/ethereum.js';
import { verifyToken } from '../middlewares/validator.js';

const router = Router();

router.get('/ethereum', verifyToken, getPrice)


export default router;