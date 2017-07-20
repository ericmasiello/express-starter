/* @flow */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import logger from '../logger';
import isprod from './isprod';
import { CSS_MODULE_PATTERN } from '../../../webpack/config';

function renderPage(response: express$Response, viewName = 'index') {
  return (html: string, isProd: boolean) => {
    response.render(viewName, {
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
    const hook = require('css-modules-require-hook');
    hook({
      generateScopedName: CSS_MODULE_PATTERN,
      extensions: ['.scss', '.css'],
    });

    const routes = require('../../client/routes').default;
    /* eslint-enable global-require */

    match({
      routes,
      location: request.url,
    }, routeMatchCallback(response));
    return;
  }

  renderPage(response, 'index.dev.ejs')('', isprod);
}
