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
import SearchNormal from './pages/Search/SearchNormal';
import ViewTickets from './pages/View_Tickets/ViewTickets';
import AllBookedTickets from './pages/Admin/All_Booked_tickets/AllBookedTickets';
import BookedTicketCo from './pages/Company_Registration/Booked_Tickets_co/BookedTicketCo';
import OtpEmail from './pages/Change_Password/OTP/OtpEmail';
import EnterOtp from './pages/Change_Password/OTP/EnterOtp';
import NewPassword from './pages/Change_Password/OTP/NewPassword';
import PasswordChange from './pages/Change_Password/C_Password_Change/PasswordChange';
import Upi from './pages/UPI/Upi';


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
          <Route path='/payment_type' element={<Payment_type/>} />
          <Route path='/passenger_details' element={<Passenger_Details/>} />
          <Route path='/debitCard' element={<DebitCard/>} />
          <Route path='/payment_successfull/:id' element={<PaymentSuccessfull/>} />
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
          <Route path='/editcombus' element={<EditComBus/>} />
          <Route path='/searchnormal' element={<SearchNormal/>} />
          <Route path='/viewtickets' element={<ViewTickets/>} />
          <Route path='/bookedticket' element={<AllBookedTickets/>} />
          <Route path='/bookedticketco' element={<BookedTicketCo/>} />
          <Route path='/otpemail' element={<OtpEmail/>} />
          <Route path='/enterotp' element={<EnterOtp/>} />
          <Route path='/newpassword' element={<NewPassword/>} />
          <Route path='/changepassword' element={<PasswordChange/>} />
          <Route path='/upi' element={<Upi/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
