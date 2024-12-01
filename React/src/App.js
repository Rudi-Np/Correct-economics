import Navigation from './components/Navigation';
import LoginNewUser from './components/Login-newUser';
import LoginUser from './components/Login-user';
import Update from './components/Update';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tracking from './components/Tracking';
import Home from './components/home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loginnewuser" element={<LoginNewUser />} />
      <Route path="/loginuser" element={<LoginUser />} />
      <Route path="/navigation" element={<Navigation />} />
      <Route path="/update" element={<Update />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
  </Router>
  );
}

export default App;
