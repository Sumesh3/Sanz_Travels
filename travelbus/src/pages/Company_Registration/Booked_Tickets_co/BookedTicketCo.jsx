import React, { useEffect, useState } from 'react'
import FooterB from '../../FooterB/FooterB'
import NavBar2 from '../../../components/navBar/NavBar2'
import NavBar from '../../../components/navBar/NavBar'
import Header from '../../../components/header/Header'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios'
import './BookedTicketCo.css'

export default function BookedTicketCo() {

    const [fullTicket, getFullTicket] = useState([])
    const [filterCom, getfilterCom] = useState([])
    const [filterComTicket, getfilterComTicket] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/all_booked_ticket_api').then((response) => {
            getFullTicket(response.data.data)
        })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const userid = localStorage.getItem('user_id');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/single_company_api/${userid}`).then((response) => {
            sessionStorage.setItem("cname", response.data.name)
        })
    }, [userid])

    const company_name = sessionStorage.getItem("cname");

    useEffect(() => {
        const data = fullTicket.filter((data, key) => {
            return data.company_name === company_name
        })
        getfilterCom(data)
    }, [fullTicket])

    useEffect(() => {
        const data = filterCom.filter((data, key) => {
            return data.statuz === '1'
        })
        getfilterComTicket(data)
    }, [filterCom])

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
                    filterComTicket[0] == null ?
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
                                    filterComTicket.map((data, key) => (

                                        <tbody>
                                            <tr>
                                                <td>{key + 1}</td>
                                                <td style={{ textAlign: 'left' }}>
                                                    
                                                    <tr className='details_tick'>
                                                        <td style={{fontWeight:'700', fontSize:'15px', color:'#c60101'}}>Bus Name</td>
                                                        <td style={{fontWeight:'700', fontSize:'15px', color:'#c60101'}}>: {data.bus_name}</td>
                                                    </tr>
                                                    <tr className='details_tick'>
                                                        <td style={{fontWeight:'700', fontSize:'12px'}}>Bus Number</td>
                                                        <td style={{fontWeight:'700', fontSize:'12px'}}>: {data.bus_number}</td>
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
