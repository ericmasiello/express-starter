/* @flow */
// eslint-disable-next-line import/prefer-default-export
export function stub(request: express$Request, response: express$Response): void {
  response.json({
    replace: 'me',
  });
}
