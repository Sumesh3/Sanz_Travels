import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import NavBar from '../../../components/navBar/NavBar'
import NavBar2 from '../../../components/navBar/NavBar2'
import axios from 'axios'
import FooterB from '../../FooterB/FooterB'
import './RejectedCompany.css'

export default function RejectedCompany() {

    const [approveBusses, getApproveBusses] = useState([])
    const [approveBussesFlt, getApproveBussesFlt] = useState([])
    const login_id = localStorage.getItem("login_id")

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/company_all_bus_api/${login_id}`).then((response) => {
            getApproveBusses(response.data.data)
        })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    console.log(approveBusses);

    useEffect(() => {
        const data = approveBusses.filter((data, key) => {
            return data.statuz === '0'
        })
        getApproveBussesFlt(data)
    }, [approveBusses])

    const deletee = (deleteid) => {
        axios.delete(`http://127.0.0.1:8000/api/delete_bus_details/${deleteid}`).then((response) => {
            console.log(response);
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
            <div className="container rejected_com_bus">
                <>
                    {
                        approveBussesFlt[0] == null ?
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
                            <table className="rejected_co_bus_table">
                                <thead>
                                    <tr>
                                        <th>Sl.No</th>
                                        <th>Image</th>
                                        <th>Bus Name / Number</th>
                                        <th>Details</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <>
                                    {
                                        approveBussesFlt.map((data, key) => (
                                            <>
                                                <tbody>
                                                    <tr>
                                                        <td >{key + 1}</td>
                                                        <td>
                                                            <div className='bus_img23' style={{ backgroundImage: `url(/Bustrip/${data.img})` }}>
                                                                {/* <img className='aaaaayyyy' src={`/Bustrip/${data.img}`} alt="" /> */}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {data.bus_name} <br />
                                                            {data.bus_number}
                                                        </td>
                                                        <td style={{ textAlign: 'left' }}>
                                                            <tr className='appr_co_bus'>
                                                                <td>Bording Point</td>
                                                                <td>: {data.bording_point}</td>
                                                            </tr>
                                                            <tr className='appr_co_bus'>
                                                                <td>Dropping Point</td>
                                                                <td>: {data.droppinging_point}</td>
                                                            </tr>
                                                            <tr className='appr_co_bus'>
                                                                <td>Departure Time</td>
                                                                <td>: {data.start_time}</td>
                                                            </tr>
                                                            <tr className='appr_co_bus'>
                                                                <td>Arrival Time</td>
                                                                <td>: {data.end_time}</td>
                                                            </tr>
                                                            <tr className='appr_co_bus'>
                                                                <td>Fare</td>
                                                                <td>: {data.fare}</td>
                                                            </tr>
                                                            <tr className='appr_co_bus'>
                                                                <td>Total Seats</td>
                                                                <td>: {data.total_seats}</td>
                                                            </tr>
                                                        </td>
                                                        <td>
                                                            <p className='rejected_status'>Rejected</p>
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
