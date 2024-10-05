// import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import Fetch from './components/Fetch';
import UserState from './components/context/UserState';

function App() {
  return (
    <>
    <UserState>
      <Create />
    <Fetch />
    </UserState>
  
    </>
  );
}

export default App;
