import { createStore } from 'redux';
import { Auth } from 'firebase/auth';

// Tipos
export interface AppState {
  auth: Auth | null;
  messagesRef: any; // Cambia este tipo por el tipo adecuado para messagesRef
}

// Acciones
export const SET_AUTH = 'SET_AUTH';
export const SET_MESSAGES_REF = 'SET_MESSAGES_REF';

// Acciones creadores
export const setAuth = (auth: Auth | null) => ({
  type: SET_AUTH,
  auth,
});

export const setMessagesRef = (messagesRef: any) => ({
  type: SET_MESSAGES_REF,
  messagesRef,
});

// Reductor
const initialState: AppState = {
  auth: null,
  messagesRef: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, auth: action.auth };
    case SET_MESSAGES_REF:
      return { ...state, messagesRef: action.messagesRef };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
