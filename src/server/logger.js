/* @flow */
import bunyan from 'bunyan';
import {
  APP_NAME,
  LOG_LEVEL,
} from '../config';

const logger = bunyan.createLogger({
  name: APP_NAME,
  level: LOG_LEVEL,
});

export default logger;
