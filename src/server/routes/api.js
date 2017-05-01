import { Router } from 'express';
import {
  stub,
} from '../controllers/apiController';

const router = Router();

router.get('/stub', stub);

export default router;
