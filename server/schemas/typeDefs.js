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
        lastName: String
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
        user: User
        chat: Chat
    }

    type Auth {
        token: ID!
        user: User
    }

    input updateUserInput {
        username: String
        password: String
        firstName: String
        lastName: String
        email: String
        pronouns: String
        title: String
    }

    type Query {
        getAllUsers: [User]
        getAllMessages: [Message]
        getAllChats: [Chat]
    }

    type Mutation {
        createUser(username: String!, password: String, firstName: String!, lastName: String, email: String!, pronouns: String, title: String): User
        createChat(chatName: String!): Chat
        createMessage(messageText: String!): Message

        updateUser(id: ID!, password: String, firstName: String, lastName: String, pronouns: String, title: String) : User
        updateChat(id: ID!, chatName: String!) : Chat

        login(email: String!, password: String!) : Auth
        signUp(username: String!, firstName: String!, email: String!, password: String!): Auth
    }
`
// input: updateUserInput
// getMessages(_id: ID!): [Chat.messages]
module.exports = typeDefs;