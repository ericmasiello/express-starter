/* @flow */
import logger from '../logger';

export function main(request: express$Request, response: express$Response): void {
  logger.info('Everything seems okay!');
  response.send('Okay!');
}

export function health(request: express$Request, response: express$Response): void {
  response.json({
    status: 'ok',
  });
}
