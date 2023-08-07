import 'firebase/compat/auth';
import React from 'react';
import { Auth } from '@firebase/auth';

interface SignOutProps {
  auth: Auth;
}

const SignOut: React.FC<SignOutProps> = ({ auth }) => {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};

export default SignOut;
