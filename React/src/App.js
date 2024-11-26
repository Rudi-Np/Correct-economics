
import LoginNewUser from './components/Login-newUser';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <LoginNewUser></LoginNewUser>
    </div>
    </Router>
  );
}

export default App;
