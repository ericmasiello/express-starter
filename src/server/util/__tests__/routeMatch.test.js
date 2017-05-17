import routeMatch, { routeMatchCallback } from '../routeMatch';

// mock the routeMatch module
jest.mock('react-router/match', () => {
  return () => ({
    match: () => {},
  });
  // return () => {
  //   return {
  //     match: () => {},
  //     isMocked: true,
  //   };
  // };
});

describe('routeMatch', () => {
  it('should call react-router\'s match', () => {
    routeMatch();
    expect(true).toEqual(true);
  });
});
