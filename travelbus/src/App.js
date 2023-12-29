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
import SeatChart from './pages/Seat_Chart/SeatChart';
import CheckOut from './pages/Check_out/CheckOut';
import Payment_type from './pages/Check_out/Payment_type';
import Passenger_Details from './pages/Passenger_Details/Passenger_Details';
import DebitCard from './pages/Debit_Card/DebitCard';
import PaymentSuccessfull from './pages/Payment_Successful/PaymentSuccessfull';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import ViewProfile from './pages/View_Profile/ViewProfile';
import EditProfile from './pages/View_Profile/EditProfile';
import UserDetails from './pages/Admin/User_Details/UserDetails';
import EstablishmentDetails from './pages/Admin/Establishment_Details/EstablishmentDetails';
import RejectedBusses from './pages/Admin/Rejected_Busses/RejectedBusses';
import AdminProfile from './pages/Admin/Admin_Profile/AdminProfile';
import CompanyProfile from './pages/Company_Profile/CompanyProfile';
import ApproveCompany from './pages/Company_Registration/Approve_Company_Bus/ApproveCompany';
import RejectedCompany from './pages/Company_Registration/Rejected_Company_Bus/RejectedCompany';
import EditComBus from './pages/Company_Registration/Approve_Company_Bus/EditComBus';


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
          <Route exact path='/seatchart' element={<SeatChart/>} />
          <Route path='/checkout' element={<CheckOut/>} />
          <Route path='/payment_type' element={<Payment_type/>} />
          <Route path='/passenger_details' element={<Passenger_Details/>} />
          <Route path='/debitCard' element={<DebitCard/>} />
          <Route path='/payment_successfull' element={<PaymentSuccessfull/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/viewprofile' element={<ViewProfile/>} />
          <Route path='/editprofile' element={<EditProfile/>} />
          <Route path='/userdetails' element={<UserDetails/>} />
          <Route path='/companydetails' element={<EstablishmentDetails/>} />
          <Route path='/rejectedbusses' element={<RejectedBusses/>} />
          <Route path='/adminprofile' element={<AdminProfile/>} />
          <Route path='/companyprofile' element={<CompanyProfile/>} />
          <Route path='/approvecompanybus' element={<ApproveCompany/>} />
          <Route path='/rejectedcompanybus' element={<RejectedCompany/>} />
          <Route path='/editcombus/:id' element={<EditComBus/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
