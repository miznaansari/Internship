import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Alert from './components/Alert';
import Create from './components/Create';
import Fetch from './components/Fetch';
import Navbar from './components/Navbar';
import UserState from './components/context/UserState';
import Home from './components/Home'; // Import a Home component if needed
import Image from './components/Image';

function App() {
  const [alert, setalert] = useState(null);
  
  const showalert = (a, b) => {
    setalert({
      msg: a,
      type: b,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  return (
    <Router>
      <Navbar />
      <Alert alert={alert} />
      <UserState>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Default route */}
          <Route path="/img" element={<Image />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<><Create showalert={showalert}  /> <Fetch showalert={showalert} /> </>} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />  {/* 404 route */}
        </Routes>
      </UserState>
    </Router>
  );
}

export default App;
