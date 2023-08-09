import React, { useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {  query, orderBy, limit, addDoc ,CollectionReference,serverTimestamp} from 'firebase/firestore';
import { Auth } from 'firebase/auth';
import ChatMessage from './ChatMessage';

interface Message {
  id: string; 
  text: string;
  uid: string;
  photoURL: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  name: string
}

interface ChatRoomProps {
  auth: Auth;
  messagesRef: CollectionReference<Message>; 
}

const ChatRoom: React.FC<ChatRoomProps> = ({ auth, messagesRef }) => {
  const dummy = useRef<HTMLDivElement | null>(null);

  const querys = query(messagesRef, orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData<Message>(querys);
  const [formValue, setFormValue] = useState<string>('');

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const currentUser = auth.currentUser;
    console.log(currentUser)
    const uid = currentUser?.uid;
    const photoURL = currentUser?.photoURL;

    if (uid && photoURL) {
      await addDoc(messagesRef, {
        id: '',
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
        name: currentUser?.displayName || 'Anonymous',
      });
    }

    setFormValue('');
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