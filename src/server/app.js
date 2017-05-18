/* @flow */
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import compression from 'compression';
import uiRoutes from './routes/ui';
import apiRoutes from './routes/api';
import { MORGAN_CONFIG } from '../config';

const app = express();

const appRoot = path.resolve(__dirname);
console.log(appRoot);

app.use(helmet());
app.use(morgan(MORGAN_CONFIG));
app.use(compression());

// FIXME: this doesnt't work when built (yarn start)... or something doesn't...
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/../../views'));
app.set('view engine', 'ejs');

app.use('/api/v1', apiRoutes);
app.use('/', uiRoutes);

export default app;
