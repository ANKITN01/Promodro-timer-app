// src/App.js
import {React,useState} from 'react';
import SignIn from './Component/SignIn';
import Timer from './Component/Timer';

function App() {
  const [value,setValue] = useState('');
  function getDataSignIn(data){
setValue(data);

  }

  return (
    <div>
      <SignIn data={getDataSignIn}/>
     {value?<Timer/>:null}
    </div>
  );
}

export default App;
