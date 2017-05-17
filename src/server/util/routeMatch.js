/* @flow */
import React from 'react';
import { renderToString } from 'react-dom/server';
import RouterContext, { match } from 'react-router';
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
      // const currentPath = props.routes[1].path;
      const html = renderToString(
        <RouterContext {...renderProps} />,
      );

      // https://medium.com/@dai_shi/express-react-redux-server-side-rendering-with-router-v4-and-webpack-v2-plus-hmr-43418b85a0d4
      // const preloadedState =
      // `<script>window.__PRELOADED_STATE__=${serialize(store.getState())}</script>`;
      // const html = getHtml(appHtml, preloadedState);
      response.set('content-type', 'text/html');
      response.send(html);
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
