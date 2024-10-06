// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Create from './components/Create';
import Fetch from './components/Fetch';
import Navbar from './components/Navbar';
import UserState from './components/context/UserState';

function App() {
  const [alert, setalert] = useState(null)
  const showalert = (a,b)=>{
    setalert({
      msg: a,
      type: b
    })
    setInterval(() => {
      setalert(null)
    }, 5000);
  }
  return (
    <>
    <Navbar/>
    <Alert alert={alert} />
    <UserState>
      <Create showalert={showalert} />
    <Fetch showalert={showalert} />
    </UserState>
  
    </>
  );
}

export default App;
