import React, { useEffect, useState } from 'react'
import './AddBus.css'
import NavBar from '../../../components/navBar/NavBar'
import NavBar2 from '../../../components/navBar/NavBar2'
import Header from '../../../components/header/Header'
import FooterB from '../../FooterB/FooterB'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function AddBus() {

  const login_id = localStorage.getItem("login_id")

  const [companyViews, getcompanyViews] = useState({})
  const userid = localStorage.getItem('user_id');

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/single_company_api/${userid}`).then((response) => {
      getcompanyViews(response.data);
      sessionStorage.setItem("cname", response.data.name)
    })
  }, [userid])

  const company_name = sessionStorage.getItem("cname");

  const [input, getInputs] = useState({
    login_id: login_id,
    company_name: company_name
  })

  console.log(input);

  const [file, setFile] = useState()

  const navigate = useNavigate()

  const addDetails = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    getInputs({ ...input, [name]: value });
  }
  // const handeleImage=(event)=>{
  //   const name = event.target.name
  //   setFile({ ...file, [name]:event.target.files[0] })

  // }

  const submit = (event) => {
    event.preventDefault();
    const data = new FormData();
    if (file) {
      data.append("login_id", login_id);
      data.append("img", file);
      ; data.append("company_name", company_name);
      data.append("bus_name", input.bus_name);
      data.append("bus_number", input.bus_number);
      data.append("bording_point", input.bording_point);
      data.append("droppinging_point", input.droppinging_point);
      data.append("start_time", input.start_time);
      data.append("end_time", input.end_time);
      data.append("fare", input.fare);
      ; data.append("total_seats", input.total_seats);
      // data.append("available_dates", input.available_dates)

      axios.post("http://127.0.0.1:8000/api/add_bus_details_api", data).then((response) => {
        console.log(response.data.message);
        toast.success(response.data.message, {
          position: "bottom-center",
          autoClose: 1800,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(error);
        })
    }
    else {
      axios.post("http://127.0.0.1:8000/api/add_bus_details_api", input).then((response) => {
        console.log(response.data.message);
        toast.success(response.data.message, {
          position: "bottom-center",
          autoClose: 1800,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(error);
        })
    }

  }

  return (
    <>
      <ToastContainer />
      <div className='log_hed'>
        <Header></Header>
      </div>

      <div className='log_nav'>
        <NavBar></NavBar>
        <NavBar2></NavBar2>
      </div>
      <div className='add_bus'>
        <div className="container bus_form">
          <div className="text">
            Add Your Vehicle Details
          </div>
          <form className='bus_forms'>
            <div className="form-row row">
              <div className="input-data">
                <input type="text" required name='company_name' value={companyViews.name} />
                <div className="underline" />
                <label htmlFor>Company Name</label>
              </div>
              <div className="input-data">
                <input type="text" required name='bus_name' onChange={addDetails} />
                <div className="underline" />
                <label htmlFor>Bus Name</label>
              </div>
              <div className="input-data">
                <input type="text" required name='bus_number' onChange={addDetails} />
                <div className="underline" />
                <label htmlFor>Bus Number</label>
              </div>
              <div className="input-data">
                <input className="search_inputd" type="text" required list="From" name='bording_point' onChange={addDetails} />
                <datalist id="From">
                  <option>Kozhikode</option>
                  <option>Ernakulam</option>
                  <option>Trivandrum</option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Coimbatore</option>
                </datalist>
                <div className="underline" />
                <label htmlFor>Bording Point</label>
              </div>
              <div className="input-data">
                <input className="search_inputd" type="text" required list="destination" name='droppinging_point' onChange={addDetails} />
                <datalist id="destination">
                  <option>Kozhikode</option>
                  <option>Ernakulam</option>
                  <option>Trivandrum</option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Coimbatore</option>
                </datalist>
                <div className="underline" />
                <label htmlFor>Dropping Point</label>
              </div>
              <div className="input-data">
                <input type="time" required name='start_time' onChange={addDetails} />
                <div className="underline" />
                <label htmlFor>Start Time</label>
              </div>
              <div className="input-data">
                <input type="time" className='aaaw' required name='end_time' onChange={addDetails} />
                <div className="underline" />
                <label htmlFor>End Time</label>
              </div>
              <div className="input-data">
                <input type="text" required name='fare' onChange={addDetails} />
                <div className="underline" />
                <label htmlFor>Fare</label>
              </div>
              <div className="input-data">
                <input type="text" disabled />
                <div className="underline" />
                <label htmlFor>Total Seats : 40</label>
              </div>


              {/* <div className="input-data">
                <input type="text" required name='available_dates' onChange={addDetails}/>
                <div className="underline" />
                <label htmlFor>Available Dates</label>
              </div> */}
            </div>

            <div className="upload_bus">
              <label htmlFor>Vehicle Image</label><br />
              <input type="file" name='img' onChange={(event) => { setFile(event.target.files[0]) }} />

            </div>

            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner" />
                <input type="submit" onClick={submit} />
              </div>
            </div>
          </form>
        </div>
      </div><br /><br />
      <div className='reg_foot'>
        <FooterB></FooterB>
      </div>
    </>
  )
}
