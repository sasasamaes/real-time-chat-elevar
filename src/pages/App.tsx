import { useState,useEffect} from 'react';
import '../App.css';
import {  CollectionReference, collection } from 'firebase/firestore';


import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from '../components/SignIn';
import Header from '../components/Header';
import ChatRoom from '../components/ChatRoom';
import { auth,firestore } from '../firebase';
interface Message {
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

function App(): JSX.Element {
  const [user] = useAuthState(auth);
  const messagesRef = collection(firestore, 'messages') as CollectionReference<Message>;

  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    if ('standalone' in window.navigator && window.navigator.standalone) {
      // La app ya está instalada en iOS
      setCanInstall(false);
    } else if (window.matchMedia('(display-mode: standalone)').matches) {
      // La app ya está instalada en otros navegadores
      setCanInstall(false);
    } else {
      // La app no está instalada, mostrar mensaje de instalación
      setCanInstall(true);
    }
  }, []);

  const handleInstallClick = () => {
    // Lógica para iniciar la instalación
    // Normalmente, esto involucra mostrar el banner nativo de instalación
    // o redirigir al usuario a una página donde puedan instalar la PWA
  };

  return (
        <div className="App">
      <Header auth={auth} />
      <section>
        {user ? (
          <ChatRoom auth={auth} messagesRef={messagesRef} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section>
      {canInstall && (
        <button onClick={handleInstallClick}>
          Instalar PWA
        </button>
      )}
    </div>
  );
}

export default App;