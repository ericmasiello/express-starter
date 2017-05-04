import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import uiRoutes from './routes/ui';
import apiRoutes from './routes/api';
import { MORGAN_CONFIG } from '../config';

const app = express();

app.use(helmet());
app.use(morgan(MORGAN_CONFIG));

app.use('/api/v1', apiRoutes);
app.use('/', uiRoutes);

export default app;
