import { useEffect,useContext } from 'react'
import SignIn from '../components/SignIn'
import Header from '../components/Header'

import ChatRoom from '../components/ChatRoom'
import { MessageContext } from '../context/MessageContext'
import { AuthContext } from '../context/AuthContext';

import '../App.css'

function App(): JSX.Element {
  const { auth, user } = useContext(AuthContext)
  const { loadMessage, messagesRef } = useContext(MessageContext)
 
  useEffect(() => {
    loadMessage()
  }, [loadMessage])

  return (
    <div className="App">
      <Header />
      <section>
        {user ? (
          <ChatRoom auth={auth} messagesRef={messagesRef} />
        ) : (
          <SignIn  />
        )}
      </section>
    </div>
  )
}

export default App
