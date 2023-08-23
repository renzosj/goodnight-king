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
        const userDoc = await User.insertMany(userSeeds);
        const chatDoc = await Chat.insertMany(chatSeeds);
        const messageDoc = await Message.insertMany(messageSeeds);

        userDoc.forEach(user => {
            // Get array of chat IDs this user belongs to
            const chatIds = [];
            for (const chat of chatDoc) {
                chatIds.push(chat._id);
            }

            Chat.updateOne(
                { _id: { $in: chatIds } },
                { $push: { users: user._id } }
            );
        })

        messageDoc.forEach(message => {
            // Get chat ID this message belongs to 
            const chatId = message.chat;
            Chat.updateOne(
                { _id: chatId },
                { $push: { messages: message._id } }
            )
        });

    } catch (err) {
        console.log("Error with seeding users: " + err);
    }

    console.log('\n 🌱 Seeding complete! 🌱');


    process.exit(0);
});