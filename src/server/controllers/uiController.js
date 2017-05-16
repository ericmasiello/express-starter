/* @flow */
import logger from '../logger';
import routeMatch from '../util/routeMatch';

export function main(request: express$Request, response: express$Response): void {
  logger.info('Called main controller');
  return routeMatch(request, response);
}

export function health(request: express$Request, response: express$Response): void {
  response.json({
    status: 'ok',
  });
}
