import { gql } from 'apollo-boost';

export const INITIAL_QUERY = gql`
  query {
    getInitial {
      test
    }
  }
`;
