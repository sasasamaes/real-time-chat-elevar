import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth' // Importa el servicio de Autenticación
import 'firebase/compat/auth'
import { Auth } from '@firebase/auth';

interface SignInProps {
  auth: Auth
}

const SignIn: React.FC<SignInProps> = ({ auth }): JSX.Element => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Iniciar sesión con Google
      </button>
      <p>No violar las normas de la comunidad o serás baneado de por vida.</p>
    </>
  )
}

export default SignIn
