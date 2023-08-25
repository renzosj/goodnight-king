const { User, Message, Chat } = require('../models');

const resolvers = {
    Query: {
        getAllUsers: async () => {
            return await User.find({});
        },
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
        }
    }
};

module.exports = resolvers;