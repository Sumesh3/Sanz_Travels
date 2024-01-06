import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header';
import NavBar from '../../components/navBar/NavBar';
import NavBar2 from '../../components/navBar/NavBar2';
import FooterB from '../FooterB/FooterB';
import './ViewTickets.css'

export default function ViewTickets() {

    const [views, setViews] = useState([]);
    const [filterViews, setFilterViews] = useState([]);

    const login_id = localStorage.getItem('login_id')

    console.log(Array.isArray(views));

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user_view_ticket_api/${login_id}`)
            .then((response) => {
                setViews(response.data.data);
            }).catch((error) => {
            })
    }, [login_id]);

    useEffect(() => {
        const data = views.filter((item) => item.statuz === '1');
        setFilterViews(data);
    }, [views]);

    console.log(filterViews);

    return (
        <>
            <div className='head_ticket'>
                <div className='app_hed'>
                    <Header></Header>
                </div>
                <div className='app_nav'>
                    <NavBar></NavBar>
                    <NavBar2></NavBar2>
                </div>
            </div>

            <div className="container">
                <div className="main_ticket col-lg-12 row">
                    <>
                        {
                            filterViews[0] == null ?
                                <div class="🤚">
                                    <div class="👉"></div>
                                    <div class="👉"></div>
                                    <div class="👉"></div>
                                    <div class="👉"></div>
                                    <div class="🌴"></div>
                                    <div class="👍"></div>
                                    <div className='empty_ticket'>Empty</div>
                                </div>
                                :
                                filterViews.map((data, key) => (
                                    <div className='main_tick'>
                                        <div class="card-0">
                                            <div className='ticket'>
                                                <div class="ticket-header">
                                                    <h1>{data.bus_name}</h1>
                                                    <p className='bus_number'>Number : {data.bus_number}</p>
                                                </div>
                                                <div class="ticket-info">
                                                    <div class="ticket-section">
                                                        <h2>Travel Details</h2>
                                                        <p><strong>Date : </strong> {data.today}</p>
                                                        <p><strong>Departure : </strong> {data.start_time}</p>
                                                        <p><strong>From : </strong>{data.bording_point} </p>
                                                        <p><strong>To : </strong>{data.droppinging_point} </p>
                                                    </div>
                                                    <div class="ticket-section">
                                                        <h2>Passenger Details</h2>
                                                        <p><strong>Name :</strong> {data.Name}</p>
                                                        <p><strong>Gender : </strong> {data.Gender}</p>
                                                        <p><strong>Age : </strong> {data.Age}</p>
                                                        <p><strong>Seat No : </strong> {data.seat}</p>
                                                        {/* <p><strong>Seat No : </strong> {data.seat_no.replace(/[\[\]']+/g, '')}</p> */}
                                                    </div>
                                                    <p className='fare'><strong>Fare : </strong>{data.fare} </p>
                                                </div>
                                            </div>
                                            <div class="blob"></div>
                                        </div>
                                    </div>

                                ))
                        }
                    </>
                </div>
            </div>

            <div className='app_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}