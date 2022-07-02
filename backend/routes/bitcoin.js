import { Router } from 'express';

import { getPrice } from '../services/bitcoin.js';
import { verifyToken } from '../middlewares/validator.js';

const router = Router();

router.get('/bitcoin', verifyToken, getPrice)


export default router;