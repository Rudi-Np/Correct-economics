import Navigation from './components/Navigation';
import LoginNewUser from './components/Login-newUser';
import UpdateExpense from './components/UpdateExpense';
import UpdateRevenue from './components/UpdateRevenue';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tracking from './components/Tracking';
import Home from './components/home';
import Remark  from './components/Remark';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loginnewuser" element={<LoginNewUser />} />
      <Route path="/navigation" element={<Navigation />} />
      <Route path="/updateExpense" element={<UpdateExpense />} />
      <Route path="/updateRevenue" element={<UpdateRevenue />} />
      <Route path='/remarks' element={<Remark/>}/>
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
  </Router>
  );
}

export default App;
