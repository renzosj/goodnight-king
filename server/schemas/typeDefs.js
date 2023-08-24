const { gql } = require('apollo-server-express');
import { GraphQLScalarType } from 'graphql';

const Date = new GraphQLScalarType({
  name: 'Date',
  description: 'A date scalar type.',
  parseValue: (value) => new Date(value),
  serialize: (value) => value.toISOString(),
});

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
        createdAt: Date
        messages: [Message]
        users: [User]
    }

    type Message {
        _id: ID!
        messagetext: String!
        createdAt: Date
        delaySend: Boolean!
        user: User
        chat: Chat
    }

    type Query {
        getAllUsers: [User]
        getMessages: [Chat.messages]
        getAllChats: [Chat]
    }

    type Mutation {
        createMessage(messageText: String!, delaySend: Boolean, user: )
    }
`

module.exports = typeDefs;