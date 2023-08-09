// reducer.ts

import { SET_MESSAGES_REF, SET_CAN_INSTALL, AppActionTypes, SET_USER, CLEAR_USER } from './actions';

export interface AppState {
  messagesRef: unknown; // Puede que desees definir un tipo más específico más adelante
  canInstall: boolean;
  auth:unknown
}

const initialState: AppState = {
  messagesRef: null,
  canInstall: false,
  auth: null
};

export function appReducer(
  state = initialState,
  action: AppActionTypes
): AppState {
  switch (action.type) {
    case SET_MESSAGES_REF:
      return {
        ...state,
        messagesRef: action.payload,
      };
    case SET_CAN_INSTALL:
      return {
        ...state,
        canInstall: action.payload,
      };
    
    case SET_USER:
      return {
        ...state,
        auth: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        auth: null,
      };
    default:
      return state;
    
  }
}
