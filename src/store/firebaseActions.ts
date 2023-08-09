// firebaseActions.ts

import { SET_MESSAGES_REF, AppActionTypes } from './actions';
import { onAuthStateChanged } from 'firebase/auth';
import { collection } from 'firebase/firestore';
import { auth, firestore } from '../firebase';  // Importando las instancias desde firebase.ts
import { Dispatch } from 'redux';  // Importando el tipo Dispatch

export const initializeFirebase = () => {
    return (dispatch: Dispatch<AppActionTypes>) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Si el usuario ha iniciado sesión, puedes despachar las acciones necesarias aquí.
                // Por ejemplo, estableciendo el messagesRef:
                const messagesRef = collection(firestore, 'messages');
                dispatch({
                    type: SET_MESSAGES_REF,
                    payload: messagesRef
                });
                // ... cualquier otra acción relacionada con el inicio de sesión del usuario.
            } else {
                // Si el usuario ha cerrado la sesión, puedes despachar las acciones necesarias aquí.
                // ... 
            }
        });
    }
}
