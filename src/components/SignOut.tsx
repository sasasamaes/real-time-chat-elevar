import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext';

const SignOut: React.FC = () => {
  const { logout, auth } = useContext(AuthContext)
  return (
    auth && auth.currentUser && (
      <button className="sign-out" onClick={() => logout()}>
        Sign Out
      </button>
    )
  );
};

export default SignOut;
