import React, { useContext, useRef, useState } from 'react';
import { CollectionReference,} from 'firebase/firestore';
import { Auth } from 'firebase/auth';

import ChatMessage from './ChatMessage';
import { MessageContext } from '../context/MessageContext';
import { Message } from 'types';


interface ChatRoomProps {
  auth: Auth;
  messagesRef: CollectionReference<Message>; 
}

const ChatRoom: React.FC<ChatRoomProps> = ({ auth, messagesRef }) => {
  const dummy = useRef<HTMLDivElement | null>(null);
  const { sendMessageFirestore, messages } = useContext(MessageContext)
  const [formValue, setFormValue] = useState<string>('');

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await sendMessageFirestore(auth, messagesRef, formValue)
    dummy.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg: Message, index: number) => <ChatMessage key={`message${msg.id}-${index} `} message={msg} auth={auth} />)}

        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
        />

        <button type="submit" disabled={!formValue}>
          <span role="img" aria-label="Send">
            🕊️
          </span>
        </button>
      </form>
    </>
  );
};

export default ChatRoom;