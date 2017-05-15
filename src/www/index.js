/* @flow */
import app from '../server/app';
import { PORT } from '../config';
import logger from '../server/logger';

app.set('port', PORT);

app.listen(app.get('port'), () => {
  logger.info(`Server started on port ${app.get('port').toString()}`);
});
