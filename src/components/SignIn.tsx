import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext';

const SignIn: React.FC = (): JSX.Element => {
  const { login } = useContext(AuthContext)
  return (
    <>
      <button className="sign-in" onClick={login}>
        Iniciar sesión con Google
      </button>
      <p>No violar las normas de la comunidad o serás baneado de por vida.</p>
    </>
  )
}

export default SignIn
