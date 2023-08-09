import { Auth } from 'firebase/auth';
import { CollectionReference } from 'firebase/firestore';

export interface Message {
  id: string;
  text: string;
  uid: string;
  photoURL: string;
  name:string
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}



export type MessageState = {
  messagesRef: CollectionReference | null;
  messages: Message[] 
}

export type MessageAction = {
  type: string
  message: Message  | null
}

export type DispatchMessage = (args: MessageAction) => MessageAction

export type AuthState = {
  auth: Auth | null | undefined;
}

export type AuthAction = {
  type: string
  auth: Auth
}

export type DispatchAuth = (args: AuthAction) => AuthAction
