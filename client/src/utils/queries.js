import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query getAllUsers {
    user {
      _id
      username
      firstName
    }
  }
`;