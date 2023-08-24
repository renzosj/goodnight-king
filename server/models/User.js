const { Schema, model } = require('mongoose');
// const { messageSchema } = require('./Message');
// const { chatSchema } = require("./Chat");

const userSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            unique: true,
            required: true,
        },
        firstName: {
            type: String,
            trim: true,
            required: true
        },
        lastName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },
        pronouns: {
            type: String,
            trim: true
        },
        title: {
            type: String,
            trim: true
        },
        // messages: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'Message'
        // }],
        // chats: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'Chat'
        // }],
        friends: [{ type: Schema.Types.ObjectId, ref: 'User'}]
    }
);

const User = model('User', userSchema);

module.exports = User;