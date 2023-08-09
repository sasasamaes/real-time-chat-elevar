import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux'; // Asegúrate de importar combineReducers
import { Auth } from 'firebase/auth';
import { CollectionReference } from 'firebase/firestore';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ReactNode } from 'react';

// Tipos
interface Message {
  id: string;
  text: string;
  uid: string;
  photoURL: string;
  name: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}

export interface AppState {
  auth: Auth | null;
  messagesRef: CollectionReference<Message> | null;
  messages: Message[];
}

// Acciones
export const SET_AUTH = 'SET_AUTH';
export const SET_MESSAGES_REF = 'SET_MESSAGES_REF';

interface SetAuthAction {
  type: typeof SET_AUTH;
  auth: Auth | null;
}

interface SetMessagesRefAction {
  type: typeof SET_MESSAGES_REF;
  messagesRef: CollectionReference<Message> | null;
}

type AppActionTypes = SetAuthAction | SetMessagesRefAction;

// Acciones creadores
export const setAuth = (auth: Auth | null): SetAuthAction => ({
  type: SET_AUTH,
  auth,
});

export const setMessagesRef = (
  messagesRef: CollectionReference<Message> | null
): SetMessagesRefAction => ({
  type: SET_MESSAGES_REF,
  messagesRef,
});

// Reductores
const authReducer = (state: Auth | null = null, action: AppActionTypes): Auth | null => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
};

const messagesReducer = (
  state: CollectionReference<Message> | null = null,
  action: AppActionTypes
): CollectionReference<Message> | null => {
  switch (action.type) {
    case SET_MESSAGES_REF:
      return action.messagesRef;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  messagesRef: messagesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
