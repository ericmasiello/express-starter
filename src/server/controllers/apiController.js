// eslint-disable-next-line import/prefer-default-export
export function stub(request, response) {
  response.json({
    replace: 'me',
  });
}
