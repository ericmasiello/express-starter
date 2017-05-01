export function main(request, response) {
  response.send('Okay!');
}

export function health(request, response) {
  response.json({
    status: 'ok',
  });
}
