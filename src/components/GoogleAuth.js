import React, { useContext } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { auth, provider } from '../firebase';
import AuthContext from '../contexts/AuthContext';

const GoogleAuth = () => {
  const user = useContext(AuthContext);

  const signInWithGoogle = () => signInWithPopup(auth, provider);
  const signOut = () => auth.signOut();

  const renderAuthBtn = () => {
    if (user) {
      return (
        <button className="btn auth-btn" onClick={signOut}>
          <p>Sign out</p>
          <AiFillGoogleCircle className="auth-icon" />
        </button>
      );
    } else {
      return (
        <button className="btn auth-btn" onClick={signInWithGoogle}>
          <p>Sign in</p>
          <AiFillGoogleCircle className="auth-icon" />
        </button>
      );
    }
  };

  return <div>{renderAuthBtn()}</div>;
};

export default GoogleAuth;
