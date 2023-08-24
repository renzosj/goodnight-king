const db = require('../config/connection');
const { User, Chat, Message } = require('../models');

const { userSeeds, chatSeeds, messageSeeds } = require('./data');

db.on('error', (err) => err);

db.once('open', async () => {
    await User.deleteMany({});
    await Chat.deleteMany({});
    await Message.deleteMany({});
    console.log('\n Collections dropped...');

    try {
        //Create and save Users
        const createdUsers = await User.create(userSeeds);
        console.log('Users seeded successfully');

        // Create and save Chats, modifying the chatSeeds array to include relations with users through username field
        const createdChats = await Chat.create(
            chatSeeds.map(chatSeed => ({
                chatName: chatSeed.chatName,
                users: chatSeed.users.map(username =>
                    createdUsers.find(user =>
                        user.username === username)._id)
            }))
        );

        console.log('Chats seeded successfully');

        const createdMessages = await Message.create(
            messageSeeds.map(messageSeed => ({
                messageText: messageSeed.messageText,
                user: createdUsers.find(user =>
                    user.username === messageSeed.user)._id,
                chat: createdChats.find(chat =>
                    chat.chatName === messageSeed.chat)._id
            }))
        );

        // update Chat documents with Message _ids
        try {
            for (const message of createdMessages) {
                await Chat.findOneAndUpdate(
                    { _id: message.chat},
                    { $push: { messages: message._id}}
                )
            }
        } catch (err) {
            console.log(err);
        }

        // Debug version of Message create
        // await Message.create(
        //     messageSeeds.map(messageSeed => {
        //       const user = createdUsers.find(user => user.username === messageSeed.user);
        //       const chat = createdChats.find(chat => chat.chatName === messageSeed.chat);
          
        //       console.log('Processing messageSeed:', messageSeed);
        //       console.log('Found user:', user);
        //       console.log('Found chat:', chat);
          
        //       if (user && chat) {
        //         return {
        //           messageText: messageSeed.messageText,
        //           user: user._id,
        //           chat: chat._id
        //         };
        //       } else {
        //         console.log('User or chat not found for:', messageSeed);
        //       }
        //     })
        //   );
          
        console.log('Message seeded successfully');

    } catch (err) {
        console.log("Error with seeding data: " + err);
    }
    console.log('\n 🌱 Seeding complete! 🌱');

    process.exit(0);
});