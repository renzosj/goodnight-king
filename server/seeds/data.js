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
        email: "test3@test.com"
    },
    {
        username: "user4",
        firstName: "Jordan",
        last: "Lockhart",
        pronouns: "He/him",
        title: "Warlock",
        email: "test4@test.com"
    },
    {
        username: "user5",
        firstName: "Shiva",
        pronouns: "She/her",
        title: "Queen",
        email: "test5@test.com"
    },
    {
        username: "user6",
        firstName: "Bob",
        lastName: "Bob",
        pronouns: "Bob",
        title: "Big",
        email: "test6@test.com"
    }
]

const chatSeeds = [
    {
        // user: [userSeeds[0], userSeeds[1]],
        chatName: `Chat with `,
        users: [],
        messages: []
    },
    {
        // user: [userSeeds[3], userSeeds[5]],
        chatName: `Chat with `,
        users: [],
        messages: []
    },
    {
        // user: [userSeeds[2], userSeeds[4]],
        chatName: `Chat with `,
        users: [],
        messages: []
    },
    {
        // user: [userSeeds[3], userSeeds[4], userSeeds[5]],
        chatName: `Chat with ${teamName}`,
        users: [],
        messages: []
    }
]

const messageSeeds = [
    {
        // user: userSeeds[3],
        // chat: chatSeeds[4],
        messageText: "Get ready to present our project."
    },
    {
        // user: userSeeds[2],
        // chat: chatSeeds[4],
        messageText: "I'm not ready for this project!"
    },
    {
        // user: userSeeds[0],
        // chat: chatSeeds[0],
        messageText: "Hi can you approve my pr?"
    },
    {
        // user: userSeeds[1],
        // chat: chatSeeds[0],
        messageText: "This is just spaghetti"
    },
    {
        // user: userSeeds[2],
        // chat: chatSeeds[2],
        messageText: "Goodnight QUEEN<3"
    },
    {
        // user: userSeeds[5],
        // chat: chatSeeds[1],
        messageText: "gn king stay flexy"
    }
]

module.exports = { userSeeds, chatSeeds, messageSeeds };