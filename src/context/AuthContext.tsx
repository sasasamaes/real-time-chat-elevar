import { createContext, useState, useEffect, ReactNode } from 'react';
import { Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth' // Importa el servicio de Autenticación
import 'firebase/compat/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from '../utils/firebase'

interface User {
    
}

interface AuthContextValues {
    auth: Auth ;
    isAuth: boolean;
    user: User | null;
    login: () => void;
    logout: () => void;
}   

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextValues>(null!);

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [ user ] = useAuthState(auth)

    const login = () => {
        signInWithGoogle()
        setIsAuth(true);
    }

    const logout = () => {
        // window.localStorage.removeItem('token');
        auth.signOut()
        setIsAuth(false);
    }
    const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider()
      try {
        if(isAuth){
          const result = await signInWithPopup(auth, provider)
          console.log(result)
          setIsAuth(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
       
    }, []);

    const values = {
        auth,
        isAuth,
        user,
        login,
        logout
    };

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    );
};
