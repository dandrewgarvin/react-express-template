import { makeExecutableSchema } from 'graphql-tools';

// ==================== TYPEDEFS ==================== //
import defaultTypes from './types/_defaults.graphql';
import initialTypes from './types/initial.graphql';

// =================== RESOLVERS ==================== //
import initialResolver from './resolvers/initial';

// ===================== EXPORT SCHEMA ===================== //
export default makeExecutableSchema({
  typeDefs: [defaultTypes, initialTypes],
  resolvers: {
    Query: Object.assign({}, initialResolver.Query),
    Mutation: Object.assign({}, initialResolver.Mutation),
  },
});
