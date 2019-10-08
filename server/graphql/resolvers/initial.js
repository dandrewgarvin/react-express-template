import InitialRoute from '../../controllers/InitialRoute/InitialRoute';

export default {
  Query: {
    getInitial: async (obj, args, ctx) => {
      const initialRoute = new InitialRoute(ctx.app);

      return initialRoute.getInitialGql(obj, args, ctx);
    },
  },
  Mutation: {
    setInitial: async (obj, args, ctx) => {
      const initialRoute = new InitialRoute(ctx.app);

      return initialRoute.setInitialGql(obj, args, ctx);
    },
  },
};
