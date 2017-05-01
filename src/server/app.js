import express from 'express';
import uiRoutes from './routes/ui';
import apiRoutes from './routes/api';

const app = express();

app.use('/api/v1', apiRoutes);
app.use('/', uiRoutes);

export default app;
