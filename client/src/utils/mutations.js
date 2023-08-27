import { gql } from '@apollo/client';

export const CREATE_CHAT = gql`
    mutation createChat($chatName: String!) {
        createChat(chatName: $name) {
            chat {
                chatName
            }
        }
    }
`;
export const SIGN_UP = gql`
mutation Mutation($userName: String!, $firstName: String!, $email: String!, $password: String!) {
    signUp(username: $userName, firstName: $firstName, email: $email, password: $password) {
      token
      user {
        email
        firstName
        friends {
          lastName
          pronouns
          title
          username
        }
      }
    }
  } 
`;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        firstName
        friends {
          lastName
          pronouns
          title
          username
        }
      }
    }
  }
  `;
