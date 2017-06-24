/* @flow */
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
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
  const hotMiddleware = require('./middleware/hot'); // eslint-disable-line global-require
  app.use(hotMiddleware.default);
}

app.use('/api/v1', apiRoutes);
app.use('/', uiRoutes);

export default app;
