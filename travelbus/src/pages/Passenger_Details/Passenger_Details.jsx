import React, { useEffect, useState } from 'react'
import './Passenger_Details.css'
import Header from '../../components/header/Header';
import NavBar from '../../components/navBar/NavBar';
import NavBar2 from '../../components/navBar/NavBar2';
import FooterB from '../FooterB/FooterB';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Component = ({storages}) => {

    console.log(storages);

    const seat_count = sessionStorage.getItem("no_of_seat")
    const numberOfComponents = seat_count;


    // const [passengerDetails, setPassengerDetails] = useState([{
    //     login_id: localStorage.getItem("login_id"),
    //     Name: "",
    //     Gender: "",
    //     Age: ""
    // }]);

    const [passengerDetails, setPassengerDetails] = useState(
        Array.from({ length: seat_count }, (_, i) => ({
            login_id: localStorage.getItem("login_id"),
            today: sessionStorage.getItem("today"),
            Name: "",
            Gender: "",
            Age: ""
        }))
    );

    const datas = (event, passengerIndex) => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedPassengerDetails = [...passengerDetails];
        updatedPassengerDetails[passengerIndex] = {
            ...updatedPassengerDetails[passengerIndex],
            [name]: value
        };

        setPassengerDetails(updatedPassengerDetails);
    }

    console.log(passengerDetails);


    const components = Array.from({ length: numberOfComponents }, (_, i) => (
        <div key={i}>
            < section className="container pass_details_main" >
                <header>Passenger {1 + i} </header>
                <form className="form form_pass">
                    <div className="input-box input_box_pass">
                        <label>Full Name</label>
                        <input className='input-in' required placeholder="Enter full name" name='Name' onChange={(event) => datas(event, i)} type="text" />
                    </div>
                    <div className="column">
                        <div className="input-box">
                            <label>Gender</label>
                            <div className="gender-option column">
                                <div className="gender">
                                    <input name="Gender" type="radio" value="Male" onChange={(event) => datas(event, i)} />
                                    <label>Male</label>
                                </div>
                                <div className="gender">
                                    <input name="Gender" type="radio" value="Female" onChange={(event) => datas(event, i)} />
                                    <label>Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="input-box">
                            <label>Age</label>
                            <input className='input-in' required placeholder="Enter age" name="Age" type="text" onChange={(event) => datas(event, i)} />
                        </div>
                    </div>
                </form>
            </section ><br />

        </div>
    ));

    const navigate = useNavigate()

    

    const PassengerDetails = () => {

        // passengerDetails.map((data,key)=>(
        // ))
        
        axios.post("http://127.0.0.1:8000/api/booked_passenger_details_api", passengerDetails).then((response) => {
            console.log(response.data.message)
            navigate('/payment_type')
        }).catch((error) => {
        })
    }

    return (
        <>
            <div className='log_hed'>
                <Header></Header>
            </div>

            <div className='log_nav'>
                <NavBar></NavBar>
                <NavBar2></NavBar2>
            </div>
            <h2 className='pass_head_d'>Passenger Details</h2>
            <div className='col-lg-12 row comp'>
                {components}
            </div>
            <center>
                <button onClick={PassengerDetails} className='pass_butn'>Confirm Details</button>
            </center>
            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>
        </>

    );
}

export default Component;