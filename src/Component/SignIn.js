import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import Timer from './Timer';

const SignIn = (props) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
    });
  };
  props.data(value);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div style={{padding:"10px",backgroundColor:"blue",color:"white"}}>
      {value ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>Welcome, {value}</div>
            <div></div>
            <button onClick={logout}>Sign out</button>
          </div>
        </div>
      ) : (
       <div>
         <button onClick={handleClick}>Sign In with Google</button>
        <h2>Hi, Welcome Please Sign In</h2>
       </div>
      )}
    </div>
  );
};

export default SignIn;
