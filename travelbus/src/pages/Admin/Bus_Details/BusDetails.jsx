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

            <div className="container approved_busses">
                <>
                    {
                        busDetailsfltr[0] == null ?
                        <div className="loading-bar">Empty</div>
                            :

                            <table className="approved_bus_table">
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
                                                            <tr className='approved_bus_tr'>
                                                                <td>Bus Name</td>
                                                                <td>: {data.bus_name}</td>
                                                            </tr>
                                                            <tr className='approved_bus_tr'>
                                                                <td>Bus Number</td>
                                                                <td>: {data.bus_number}</td>
                                                            </tr>
                                                            <tr className='approved_bus_tr'>
                                                                <td>Bording Point</td>
                                                                <td>: {data.bording_point}</td>
                                                            </tr>
                                                            <tr className='approved_bus_tr'>
                                                                <td>Dropping Point</td>
                                                                <td>: {data.droppinging_point}</td>
                                                            </tr>
                                                            <tr className='approved_bus_tr'>
                                                                <td>Departure Time</td>
                                                                <td>: {data.start_time}</td>
                                                            </tr>
                                                            <tr className='approved_bus_tr'>
                                                                <td>Arrival Time</td>
                                                                <td>: {data.end_time}</td>
                                                            </tr>
                                                            <tr className='approved_bus_tr'>
                                                                <td>Fare</td>
                                                                <td>: {data.fare}</td>
                                                            </tr>
                                                            <tr className='approved_bus_tr'>
                                                                <td>Total Seats</td>
                                                                <td>: {data.total_seats}</td>
                                                            </tr>
                                                        </td>
                                                        <td>
                                                            <center>
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
