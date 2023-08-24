const teamName = "Debug Thugs";

const userSeeds = [
    {
        username: "user1",
        firstName: "Melanie",
        pronouns: "She/her",
        title: "Miss",
        email: "test1@test.com"
    },
    {
        username: "user2",
        firstName: "Johnny",
        pronouns: "He/him",
        title: "Mr",
        email: "test2@test.com"
    },
    {
        username: "user3",
        firstName: "Leslie",
        pronouns: "They/them",
        title: "Mx",
        email: "test3@test.com",
    },
    {
        username: "user4",
        firstName: "Jordan",
        lastName: "Lockhart",
        pronouns: "He/him",
        title: "Warlock",
        email: "test4@test.com",
    },
    {
        username: "user5",
        firstName: "Shiva",
        pronouns: "She/her",
        title: "Queen",
        email: "test5@test.com",
    },
    {
        username: "user6",
        firstName: "Bob",
        lastName: "Bob",
        pronouns: "Bob",
        title: "Big",
        email: "test6@test.com",
    }
]

const messageSeeds = [
    {
        user: 'user4',
        chat: `Chat with ${teamName}`,
        messageText: "Get ready to present our project.",
    },
    {
        user: 'user3',
        chat: `Chat with ${teamName}`,
        messageText: "I'm not ready for this project!",

    },
    {
        user: 'user1',
        chat: `Chat with Melanie and Johnny`,
        messageText: "Hi can you approve my pr?",

    },
    {
        user: 'user2',
        chat: `Chat with Melanie and Johnny`,
        messageText: "This is just spaghetti",

    },
    {
        user: "user5",
        chat: `Chat with Shiva and Leslie`,
        messageText: "Goodnight QUEEN<3",
 
    },
    {
        user: "user6",
        chat: `Chat with Jordan and Bob`,
        messageText: "gn king stay flexy",

    }
]

const chatSeeds = [
    {
        users: ['user1', 'user2'],
        chatName: `Chat with Melanie and Johnny`,
        messages: []
    },
    {
        users: ['user4', 'user6'],
        chatName: `Chat with Jordan and Bob`,
        messages: []
    },
    {
        users: ['user3', 'user5'],
        chatName: `Chat with Shiva and Leslie`,
        messages: []
    },
    {
        users: ['user4', 'user5', 'user6'],
        chatName: `Chat with ${teamName}`,
        messages: []
    }
]

module.exports = { userSeeds, chatSeeds, messageSeeds };