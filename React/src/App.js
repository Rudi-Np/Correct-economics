import Navigation from './components/Navigation';
import CreateUser from './components/user/CreateUser';
import UpdateExpense from './components/expenses/UpdateExpense';
import LoginUser from './components/user/Login-user'
import UpdateRevenue from './components/UpdateRevenue';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tracking from './components/Tracking';
import Home from './components/home';
import Remark  from './components/Remark';
import  Connect from './server/Connect'
import Welcome from './components/welcome';
import DeleteUser from './components/user/deleteUser';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Connect" element={<Connect />} />
      <Route path="/loginuser" element={<LoginUser />} />
      <Route path="/createuser" element={<CreateUser />} />
      <Route path="/navigation" element={<Navigation />} />
      <Route path="/updateExpense" element={<UpdateExpense />} />
      <Route path="/updateRevenue" element={<UpdateRevenue />} />
      <Route path='/remarks' element={<Remark/>}/>
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/deleteuser" element={<DeleteUser />} />
    </Routes>
  </Router>
  );
}

export default App;
