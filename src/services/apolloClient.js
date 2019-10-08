import ApolloClient from 'apollo-boost';

import { authHeader } from '../utils';

export const api = {
  url: process.env.REPLACE_WITH_BACKEND_URL,
};

export const apolloClient = new ApolloClient({
  uri: api.url,
  request: async operation => {
    const token = authHeader();
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
});
