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
    mutation signUp($username: String!, $email: String!, $password: String!, $firstName: String!) {
        signUp(username: $username, email: $email, password: $password, firstName: $firstName) {
        token
        user {
            _id
            username
            firstName
            lastName
            email
            pronouns
            title
        }
        }
    }
`
