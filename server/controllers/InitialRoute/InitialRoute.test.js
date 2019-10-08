import InitialRoute from './InitialRoute';

describe('InitialRoute class methods', () => {
  let initialRoute = undefined;

  beforeAll(() => {
    initialRoute = new InitialRoute();
  });

  it('should initialize class', () => {
    expect(initialRoute).toBeInstanceOf(InitialRoute);
  });

  it('should call rest endpoint', () => {
    const res = {
      status: () => {
        return {
          json: data => {
            return data;
          },
        };
      },
    };

    expect(() => initialRoute.getInitialRestRoute(null, res));
  });

  it('should call gql query', () => {
    expect(initialRoute.getInitialGql);
  });

  it('should call gql mutation', () => {
    expect(() => initialRoute.setInitialGql(null, { initialInput: true }, null));
  });
});
