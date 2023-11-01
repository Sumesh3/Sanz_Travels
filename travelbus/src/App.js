import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Registration_bus from './pages/Company_Registration/Registration_bus';
import AddBus from './pages/Company_Registration/Add_bus/AddBus';
import ApproveBus from './pages/Admin/Approve_Bus/ApproveBus';
import BusDetails from './pages/Admin/Bus_Details/BusDetails';

import Search from './pages/Search/Search';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registrationbus' element={<Registration_bus/>} />
          <Route path='/addbus' element={<AddBus/>} />
          <Route path='/approvebus' element={<ApproveBus/>} />
          <Route path='/busdetails' element={<BusDetails/>} />
          <Route path='/search' element={<Search/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
