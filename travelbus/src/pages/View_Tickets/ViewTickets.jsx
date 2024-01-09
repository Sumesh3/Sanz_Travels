import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header';
import NavBar from '../../components/navBar/NavBar';
import NavBar2 from '../../components/navBar/NavBar2';
import FooterB from '../FooterB/FooterB';
import './ViewTickets.css'
import SouthIcon from '@mui/icons-material/South';
import PlaceIcon from '@mui/icons-material/Place';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

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

    filterViews.sort((a, b) => {
        const dateA = new Date(a.id);
        const dateB = new Date(b.id);

        return dateB - dateA;
    });

    const now = new Date();

    const millisecondsInTwoDays = 2 * 24 * 60 * 60 * 1000;
    const dayBeforeYesterday = new Date(now.getTime() - millisecondsInTwoDays);
    console.log(dayBeforeYesterday);

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

            <div>
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
                                filterViews.map((data, key) => {
                                    const ticketDate = new Date(data.today);

                                    const isPastDate = ticketDate < dayBeforeYesterday;

                                    if (!isPastDate) {
                                        return (
                                            <div className='main_tick'>
                                                <div class="card-0">
                                                    <div className='ticket_main'>
                                                        <div className='headder_ticket'>
                                                            <div class="hedder_main_ticket">
                                                                <h2><img src="Assets/images/1518547570780.png" alt="" /></h2>
                                                                <img className='headder_tick_log' src="Assets/images/logo.png" alt="" />
                                                                
                                                                <h1>HAPPY JOURNEY</h1>
                                                                <div className='hedder_bus'>
                                                                    <p>{data.bus_name}</p>
                                                                    <p>{data.bus_number}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='ticket_table_main'>
                                                            <table className='ticket_table'>
                                                                <p className='ticket_price'>Fare : <CurrencyRupeeIcon fontSize='.01px' />{data.fare}</p>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <tr>
                                                                                <td>Date</td>
                                                                                <td>:  {data.today}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Departure</td>
                                                                                <td>: {data.start_time}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Name</td>
                                                                                <td>: {data.Name}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Gender</td>
                                                                                <td>: {data.Gender}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Age</td>
                                                                                <td>: {data.Age}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Seat No</td>
                                                                                <td>: {data.seat}</td>
                                                                                {/* <td>: {data.seat_no.replace(/[\[\]']+/g, '')}</td> */}
                                                                            </tr>
                                                                        </td>
                                                                        <td>
                                                                            <div className='ticket_place'>
                                                                                <div className='ticket_place_div'>
                                                                                    <p>{data.bording_point}</p>
                                                                                    <p style={{ justifyContent: 'left', textAlign: 'left', marginLeft: '18px', marginTop: '4px', marginBottom: '-5px' }}><PlaceIcon style={{ color: '9b0f0f' }} /><SouthIcon /></p>
                                                                                    <p>{data.droppinging_point}</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="blob"></div>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })
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