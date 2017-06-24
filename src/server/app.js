/* @flow */
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import hotMiddleware from './middleware/hot';
import uiRoutes from './routes/ui';
import apiRoutes from './routes/api';
import { MORGAN_CONFIG } from '../config';
import isprod from './util/isprod';

const app = express();
app.use(helmet());
app.use(morgan(MORGAN_CONFIG));
app.use(compression());
app.use(express.static('public'));
app.set('view engine', 'ejs');

if (!isprod) {
  app.use(hotMiddleware);
}

app.use('/api/v1', apiRoutes);
app.use('/', uiRoutes);

export default app;
