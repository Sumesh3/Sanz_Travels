import React, { useEffect, useState } from 'react'
import './AllBookedTickets.css'
import Header from '../../../components/header/Header'
import NavBar from '../../../components/navBar/NavBar'
import NavBar2 from '../../../components/navBar/NavBar2'
import FooterB from '../../FooterB/FooterB'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios'

export default function AllBookedTickets() {

    const [fullTicket, getFullTicket] = useState([])
    const [filterFullTicket, getFilterFullTicket] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/all_booked_ticket_api').then((response) => {
            getFullTicket(response.data.data)
        })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    console.log(fullTicket);

    useEffect(() => {
        const data = fullTicket.filter((data, key) => {
            return data.statuz === '1'
        })
        getFilterFullTicket(data)
    }, [fullTicket])

    return (
        <>
            <div className='app_hed'>
                <Header></Header>
            </div>

            <div className='app_nav'>
                <NavBar></NavBar>
                <NavBar2></NavBar2>
            </div>
            <div className='container main_all_ti'>
                {
                    filterFullTicket[0] == null ?
                        <div class="pyramid-loader">
                            <div class="wrapper_pr">
                                <span class="side side1"></span>
                                <span class="side side2"></span>
                                <span class="side side3"></span>
                                <span class="side side4"></span>
                                <span class="shadow"></span>
                            </div>
                           <div className='pry_text'>Empty...</div>
                        </div>

                        :
                        <table className='all_ticket' >
                            <thead>
                                <tr>
                                    <th>Sl No.</th>
                                    <th>Bus Details</th>
                                    <th>Passenger</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <>
                                {
                                    filterFullTicket.map((data, key) => (

                                        <tbody>
                                            <tr>
                                                <td>{key + 1}</td>
                                                <td style={{ textAlign: 'left' }}>
                                                    <tr className='details_tick'>
                                                        <td>Establishment</td>
                                                        <td>: {data.company_name}</td>
                                                    </tr>
                                                    <tr className='details_tick'>
                                                        <td>Bus Name</td>
                                                        <td>: {data.bus_name}</td>
                                                    </tr>
                                                    <tr className='details_tick'>
                                                        <td>Bus Number</td>
                                                        <td>: {data.bus_number}</td>
                                                    </tr>
                                                    <tr className='details_tick'>
                                                        <td>Bording Point</td>
                                                        <td>: {data.bording_point}</td>
                                                    </tr>
                                                    <tr className='details_tick'>
                                                        <td>Dropping Point</td>
                                                        <td>: {data.droppinging_point}</td>
                                                    </tr>
                                                    <tr className='details_tick'>
                                                        <td>Departure</td>
                                                        <td>: {data.start_time}</td>
                                                    </tr>
                                                </td>
                                                <td style={{ textAlign: 'left' }}>
                                                    <tr className='details_tick'>
                                                        <td>Name</td>
                                                        <td>: {data.Name}</td>
                                                    </tr>
                                                    <tr className='details_tick'>
                                                        <td>Gender</td>
                                                        <td>: {data.Gender}</td>
                                                    </tr>
                                                    <tr className='details_tick'>
                                                        <td>Age</td>
                                                        <td>: {data.Age}</td>
                                                    </tr>
                                                    <tr className='details_tick'>
                                                        <td>Date</td>
                                                        <td>: {data.today}</td>
                                                    </tr>
                                                    <tr className='details_tick'>
                                                        <td>seat</td>
                                                        <td>: {data.seat}</td>
                                                    </tr>
                                                </td>
                                                <td><CurrencyRupeeIcon fontSize='10px' />{data.fare}</td>
                                            </tr>
                                        </tbody>

                                    ))
                                }
                            </>
                        </table>
                }

            </div>
            <div className='app_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}