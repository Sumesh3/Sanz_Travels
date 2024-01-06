import React, { useEffect, useState } from 'react'
import './Passenger_Details.css'
import Header from '../../components/header/Header';
import NavBar from '../../components/navBar/NavBar';
import NavBar2 from '../../components/navBar/NavBar2';
import FooterB from '../FooterB/FooterB';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Component = () => {


    const busid = sessionStorage.getItem('busid')

    const seat_no1 = [sessionStorage.getItem('seat_no')].map(String)
    const seat_nos = seat_no1[0].split(',')


    console.log(typeof (sessionStorage.getItem('seat_no')));

    const seat_count = sessionStorage.getItem("no_of_seat")
    const numberOfComponents = seat_count;

    const [passengerDetails, setPassengerDetails] = useState(
        Array.from({ length: seat_count }, (_, i) => ({
            login_id: localStorage.getItem("login_id"),
            today: sessionStorage.getItem("today"),
            busid: busid,
            seat_no: seat_nos,
            Name: "",
            Gender: "",
            Age: "",
            seat:seat_nos[i]
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

    // for (let i = 0; i < seat_nos.length; i++) {
    //     const aaaa = seat_nos[i];
    //     console.log(aaaa);
    // }


    const components = Array.from({ length: numberOfComponents }, (_, i) => (

        <div key={i}>

            < section className="container pass_details_main" >
                <header>Passenger {1 + i} </header> Seat no. {seat_nos[i]}
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

        axios.post("http://127.0.0.1:8000/api/booked_passenger_details_api", passengerDetails).then((response) => {
            navigate('/payment_type')
            window.location.reload()
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