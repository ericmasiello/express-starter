import { Router } from 'express';
import {
  main,
  health,
} from '../controllers/uiController.js';

const router = Router();

router.get('/health', health);
router.get('/', main);

export default router;
