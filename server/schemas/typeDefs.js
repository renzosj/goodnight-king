const { gql } = require('apollo-server-express');
// import { GraphQLScalarType } from 'graphql';
// const { GraphQLScalarType } = require('graphql');

// const Date = new GraphQLScalarType({
//   name: 'Date',
//   description: 'A date scalar type.',
//   parseValue: (value) => new Date(value),
//   serialize: (value) => value.toISOString(),
// });

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        firstName: String!
        lastName: String!
        email: String!
        pronouns: String
        title: String
        friends: [User]
    }

    type Chat {
        _id: ID!
        chatName: String!
        createdAt: String
        messages: [Message]
        users: [User]
    }

    type Message {
        _id: ID!
        messageText: String!
        createdAt: String
        delaySend: Boolean!
        user: User!
        chat: Chat!
    }

    type Query {
        getAllUsers: [User]
        getAllMessages: [Message]
        getAllChats: [Chat]
    }

    type Mutation {
        createUser(username: String!, firstName: String!, lastName: String, email: String!, pronouns: String, title: String): User
    }
`

// getMessages(_id: ID!): [Chat.messages]
module.exports = typeDefs;