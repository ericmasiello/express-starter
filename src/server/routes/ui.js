/* @flow */
import { Router } from 'express';
import {
  main,
  health,
} from '../controllers/uiController';

const router = Router();

router.get('/health', health);
router.get('*', main);

export default router;
