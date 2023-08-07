import React, { Component } from 'react';
import { Auth } from 'firebase/auth';

interface Message {
  id: string;
  text: string;
  uid: string;
  photoURL: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}

interface ChatMessageProps {
  message: Message;
  auth: Auth;
}

class ChatMessage extends Component<ChatMessageProps> {
  render() {
    const { message, auth } = this.props;
    const { text, uid, photoURL } = message;
    const messageClass = uid === auth.currentUser?.uid ? 'sent' : 'received';

    return (
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="Avatar" />
        <p>{text}</p>
      </div>
    );
  }
}

export default ChatMessage;
