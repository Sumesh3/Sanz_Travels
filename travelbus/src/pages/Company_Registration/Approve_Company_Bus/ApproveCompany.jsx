import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import NavBar from '../../../components/navBar/NavBar'
import NavBar2 from '../../../components/navBar/NavBar2'
import './ApproveCompany.css'
import FooterB from '../../FooterB/FooterB'
import EditComBus from './EditComBus'
import { Link } from 'react-router-dom'

export default function ApproveCompany() {

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
            return data.statuz != '0'
        })
        getApproveBussesFlt(data)
    }, [approveBusses])

    const deletee = (deleteid) => {
        axios.delete(`http://127.0.0.1:8000/api/delete_bus_details/${deleteid}`).then((response) => {
            console.log(response);
            window.location.reload()
        })
    }
    const [singleBus, getSingleBus] = useState([])

    const editid = (editido) => {
        axios.get(`http://127.0.0.1:8000/api/single_bus_details_api/${editido}`).then((response) => {
            getSingleBus(response.data)
        })
    }
    console.log(singleBus);


    return (
        <>
            <div className='app_hed'>
                <Header></Header>
            </div>

            <div className='app_nav'>
                <NavBar></NavBar>
                <NavBar2></NavBar2>
            </div>
            <div className="container approved_co_bus">
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
                            <table className="approved_co_bus_table">
                                <thead>
                                    <tr>
                                        <th>Sl.No</th>
                                        <th>Image</th>
                                        <th>Bus Name / Number</th>
                                        <th>Details</th>
                                        <th>Status</th>
                                        <th>Action</th>
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
                                                            <div className='bus_img99' style={{ backgroundImage: `url(/Bustrip/${data.img})` }}>
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
                                                            {
                                                                data.statuz == 1 ?
                                                                    <p className='pending_status'>Pending</p>
                                                                    :
                                                                    <p className='approved_status'>Approved</p>
                                                            }
                                                        </td>
                                                        <td>
                                                            <center>
                                                                {/* <Link className="edit_com_button" to={`/editcombus/${data.id}`}></Link> */}
                                                                <button className="edit_com_button" onClick={() => { editid(data.id) }}><EditComBus storage={singleBus.id}></EditComBus></button><br />
                                                                <button className="delete_com_button" onClick={() => { deletee(data.id) }}>Delete</button>
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
