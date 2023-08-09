// actions.ts

export const SET_MESSAGES_REF = "SET_MESSAGES_REF";
export const SET_CAN_INSTALL = "SET_CAN_INSTALL";
// Add other action types as needed

interface SetMessagesRefAction {
  type: typeof SET_MESSAGES_REF;
  payload: unknown; // Puede que desees definir un tipo más específico más adelante
}

interface SetCanInstallAction {
  type: typeof SET_CAN_INSTALL;
  payload: boolean;
}


// Adding setUser and clearUser action types
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

interface SetUserAction {
  type: typeof SET_USER;
  payload: {
    uid: string;
    displayName: string | null;
    photoURL: string | null;
    email: string | null;
    // ... any other user fields you want to store
  };
}

interface ClearUserAction {
  type: typeof CLEAR_USER;
}

// Updating AppActionTypes to include SetUserAction and ClearUserAction
export type AppActionTypes = SetMessagesRefAction | SetCanInstallAction | SetUserAction | ClearUserAction;
