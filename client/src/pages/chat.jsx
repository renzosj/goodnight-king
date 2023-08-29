import React from 'react';
import { useQuery, useMutation, useSubscription } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_MESSAGES = gql`
  query GetMessages {
    messages {
      id
      content
      user
    }
  }
`;

const NEW_MESSAGE = gql`
  subscription NewMessage {
    newMessage {
      id
      content
      user
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation SendMessage($content: String!, $user: String!) {
    sendMessage(content: $content, user: $user) {
      id
      content
      user
    }
  }
`;

function ChatPage() {
  const { loading, error, data } = useQuery(GET_MESSAGES);
  const { data: newMessageData } = useSubscription(NEW_MESSAGE);
  const [sendMessage] = useMutation(SEND_MESSAGE);

  const handleSendMessage = (content, user) => {
    sendMessage({ variables: { content, user } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const messages = [...data.messages, newMessageData?.newMessage].filter(Boolean);

  return (
    <div>
      <h2>Chat Room</h2>
      <div className="messages">
        {messages.map(message => (
          <div key={message.id} className="message">
            <strong>{message.user}: </strong>
            {message.content}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input type="text" placeholder="Your message" />
        <button onClick={() => handleSendMessage("Message content", "User")}>Send</button>
      </div>
    </div>
  );
}

export default ChatPage;