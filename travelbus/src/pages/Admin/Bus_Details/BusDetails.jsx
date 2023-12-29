import React, { useEffect, useState } from 'react'
import './BusDetails.css'
import Header from '../../../components/header/Header'
import NavBar from '../../../components/navBar/NavBar'
import NavBar2 from '../../../components/navBar/NavBar2'
import axios from 'axios'
import FooterB from '../../FooterB/FooterB'

export default function BusDetails() {

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
            return data.statuz === '2'
        })
        getBusrDetailsfltr(data)
    }, [busDetails])

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

            <div className="container approve_bus">
                <>
                    {
                        busDetailsfltr[0] == null ?
                            <div className='no_pending'>Empty</div>
                            :

                            <table className="table approve_table table-bordered">
                                <thead>
                                    <tr className='admin_approve'>
                                        <th>Sl.No</th>
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
                                                        <td>{data.company_name}</td>
                                                        <td>Bus Name : {data.bus_name}<br />
                                                            Bus Number : {data.bus_number}<br />
                                                            Bording Point : {data.bording_point}<br />
                                                            Droppinging Point : {data.droppinging_point}<br />
                                                            Start Time : {data.start_time}<br />
                                                            End Time : {data.end_time}<br />
                                                            Fare : {data.fare}<br />
                                                            Total Seats : {data.total_seats}<br />
                                                            Available Dates : {data.available_dates}
                                                        </td>
                                                        <td>
                                                            <center>
                                                                {/* <button className="approve_button" >Edit</button><br /> */}
                                                                <button className="deleteey_button" onClick={() => { deletee(data.id) }}>Delete</button>
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
