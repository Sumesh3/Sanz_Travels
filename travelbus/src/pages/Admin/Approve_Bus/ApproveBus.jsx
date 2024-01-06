import React, { useEffect, useState } from 'react'
import './ApproveBus.css'
import Header from '../../../components/header/Header'
import NavBar from '../../../components/navBar/NavBar'
import NavBar2 from '../../../components/navBar/NavBar2'
import FooterB from '../../FooterB/FooterB'
import axios from 'axios'

export default function ApproveBus() {

    const [busDetails, getBusrDetails] = useState([])
    const [busDetailsfltr, getBusrDetailsfltr] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/all_bus_details_api').then((response) => {
            getBusrDetails(response.data.data)
        })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    console.log(busDetails);

    useEffect(() => {
        const data = busDetails.filter((data, key) => {
            return data.statuz === '1'
        })
        getBusrDetailsfltr(data)
    }, [busDetails])


    const proceed = (busid) => {
        const Details = {
            statuz: 2
        }
        axios.put(`http://127.0.0.1:8000/api/update_bus_details_api/${busid}`, Details).then((response) => {
            window.location.reload()
        })
    }

    const rejected = (busid) => {
        const Details = {
            statuz: 0
        }
        axios.put(`http://127.0.0.1:8000/api/update_bus_details_api/${busid}`, Details).then((response) => {
            window.location.reload()
        })
    }

    return (
        <>
            <div className='app_hed'>
                <Header></Header>
            </div>

            <div className='app_nav'>
                <NavBar></NavBar>
                <NavBar2></NavBar2>
            </div>
            <div className="container approve_busses">
                <>
                    {
                        busDetailsfltr[0] == null ?
                            <div className='cycle_load'>
                                <span class="loader_cy"></span>
                                <div class="text_cycle">No Pending Request</div>
                            </div>
                            :
                            <table className="approve_bus_table">
                                <thead>
                                    <tr>
                                        <th>Sl.No</th>
                                        <th>Image</th>
                                        <th>Establishment</th>
                                        <th>Details</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <>
                                    {
                                        busDetailsfltr.map((data, key) => (
                                            <>
                                                <tbody>
                                                    <tr>
                                                        <td >{key + 1}</td>
                                                        <td ><div className='bus_img23' style={{ backgroundImage: `url(/Bustrip/${data.img})` }}></div></td>
                                                        <td>{data.company_name}</td>
                                                        <td style={{ textAlign: 'left' }}>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Bus Name</td>
                                                                <td>: {data.bus_name}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Bus Number</td>
                                                                <td>: {data.bus_number}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Bording Point</td>
                                                                <td>: {data.bording_point}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Dropping Point</td>
                                                                <td>: {data.droppinging_point}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Departure Time</td>
                                                                <td>: {data.start_time}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Arrival Time</td>
                                                                <td>: {data.end_time}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Fare</td>
                                                                <td>: {data.fare}</td>
                                                            </tr>
                                                            <tr className='approve_bus_tr'>
                                                                <td>Total Seats</td>
                                                                <td>: {data.total_seats}</td>
                                                            </tr>
                                                        </td>

                                                        <td>
                                                            <center>
                                                                <button className="approve_btn" onClick={() => { proceed(data.id) }}>Proceed</button><br />
                                                                <button className="reject_btn" onClick={() => { rejected(data.id) }}>Rejected</button>
                                                            </center>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </>
                                        ))
                                    }
                                </>
                            </table>
                    }
                </>
            </div>
            <div className='app_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}
