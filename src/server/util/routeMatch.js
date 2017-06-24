/* @flow */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import logger from '../logger';
import routes from '../../client/routes';
import isprod from './isprod';
import configFactory from '../../../webpack.config';
import type { Namespace$WebpackConfig } from '../../types';

const distConfig = configFactory('dist');

export function getBuildPath(isprodEnv: boolean, webpackConfig: Namespace$WebpackConfig) {
  if (isprodEnv) {
    // remove trailing slash
    return webpackConfig.output.publicPath.replace(/(.+)(\/$)/gm, '$1');
  }
  return null;
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

      const buildPath = getBuildPath(isprod, distConfig);

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
