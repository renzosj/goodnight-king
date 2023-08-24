const { User, Message, Chat } = require('../models');

const resolvers = {
    Query: {
        getAllUsers: async () => {
            return User.find({});
        },
        getMessages: async (parent,args) => {
            const chat = await Chat.findById(args.id)
            return chat.messages;
        },
        getAllChats: async () => {
            return Chat.find({});
        }
    },
    Mutation: {
        // at least one for posting message
        createMessage: async (parent, args) => {
            const message = await Message.create(args);
            return message;
        },
        createUser: async (parent,args) => {
            const user = await User.create(args);
            return user;
        },
        createChat: async (parent,args) => {
            const chat = await Chat.create(args);
            return chat;
        }
    }
};

module.exports = resolvers;