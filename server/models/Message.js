const { Schema, model } = require('mongoose');
const formattedDate = require("../utils/formatDate.js");
// const { userSchema } = require("./User.js");
// const { chatSchema } = require("./Chat.js");

const messageSchema = new Schema(
    {
        messageText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => formattedDate(date)
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        chat: {
            type: Schema.Types.ObjectId,
            ref: 'Chat'
        },
        delaySend: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    {
        toJSON: {
            getters: true,
      }
    }
)


messageSchema.virtual('chatsCount').get(function () {
    return this.chats.length;
});

messageSchema.virtual('userSender').get(function () {
    return this.user;
});

const Message = model('Message', messageSchema);

module.exports = Message;