const { User, Message, Chat } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getAllUsers: async () => {
            return await User.find({});
        },
        // getUser: async (parent, args, context) => {
        //     if (context.user) {
        //       return User.findOne({ _id: context.user._id });
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        // },
        getAllMessages: async () => {
            return await Message.find({}).populate('user');
        },
        getAllChats: async () => {
            return Chat.find({}).populate('users').populate('messages');
        }
    },
    Mutation: {
        createMessage: async (parent, args) => {
            const message = await Message.create(args);
            return message;
        },
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        createChat: async (parent,args) => {
            const chat = await Chat.create(args);
            return chat;
        },
        updateUser: async (parent, args) => {
            const { id, ...user} = args;
            return User.findOneAndUpdate(
                { _id: id},
                { ...user },
                { new: true }
            );
        },
        updateChat: async (parent, args) => {
            const { id, ...chat} = args;
            return Chat.findOneAndUpdate(
                { _id: id},
                { ...chat },
                { new: true }
            );
        },
        signUp: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user with this email found!');
            }
      
            // const correctPw = await user.isCorrectPassword(password);
      
            // if (!correctPw) {
            //   throw new AuthenticationError('Incorrect password!');
            // }

            // add hash password 

            if (password!==user.password) {
                throw new AuthenticationError('Incorrect password!');
              }
      
            const token = signToken(user);
            return { token, user };
          }

    }
};

module.exports = resolvers;