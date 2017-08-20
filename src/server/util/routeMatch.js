/* @flow */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import logger from '../logger';
import isprod from './isprod';

function renderPage(response: express$Response) {
  return (html: string, isProd: boolean) => {
    response.render('index', {
      html,
      isProd,
    });
  };
}

export function routeMatchCallback(response: express$Response): Function {
  return (error: Error, redirectionLocation: Location, renderProps: {}): void => {
    if (error) {
      logger.error(error);
      response.status(500).send(error.message);
      return;
    }

    if (redirectionLocation) {
      response.redirect(302, `${redirectionLocation.pathname}${redirectionLocation.search}`);
      return;
    }

    if (renderProps) {
      const html = renderToString(
        <RouterContext {...renderProps} />,
      );

      renderPage(response)(html, isprod);
      return;
    }

    // no route match, so 404. In a real app you might render a custom
    // 404 view here
    response.sendStatus(404);
  };
}

export default function routeMatch(request: express$Request, response: express$Response): void {
  if (isprod) {
    /* eslint-disable global-require */
    const routes = require('../../client/routes').default;
    /* eslint-enable global-require */

    match({
      routes,
      location: request.url,
    }, routeMatchCallback(response));
    return;
  }

  renderPage(response)('', isprod);
}
