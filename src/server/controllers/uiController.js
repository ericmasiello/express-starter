import logger from '../logger';

export function main(request, response) {
  logger.info('Everything seems okay!');
  response.send('Okay!');
}

export function health(request, response) {
  response.json({
    status: 'ok',
  });
}
