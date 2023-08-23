const { Schema, model } = require('mongoose');
// const { messageSchema } = require('./Message.js');
// const { userSchema } = require('./User.js');
const formattedDate = require("../utils/formatDate.js")


const chatSchema = new Schema(
    {
        chatName: {
            type: String,
            required: true,
            trim: true
        },
        users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => formattedDate(date)
        }
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

const Chat = model('Chat', chatSchema);

module.exports = Chat;