const { User, Message, Chat } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
          },
        messages: async (parent,args) => {
            const message = await Message.findById(args.id)
            return message;
        }

    },
    Mutation: {
        // at least one for posting message

    }
};

module.exports = resolvers;