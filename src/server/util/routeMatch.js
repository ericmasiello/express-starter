/* @flow */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import logger from '../logger';
import routes from '../../client/routes';

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

      // TODO: see if '/build' can be pulled off of something in the webpack config?
      // TODO: see if the bundle name (app.js) can also be pulled off the webpack.config
      // so its not hardcoded in index.ejs
      const buildPath = process.env.NODE_ENV !== 'production' ? null : '/build';

      response.render('index', {
        html,
        buildPath,
      });
      return;
    }

    // no route match, so 404. In a real app you might render a custom
    // 404 view here
    response.sendStatus(404);
  };
}

export default function routeMatch(request: express$Request, response: express$Response): void {
  return match({
    routes,
    location: request.url,
  }, routeMatchCallback(response));
}
