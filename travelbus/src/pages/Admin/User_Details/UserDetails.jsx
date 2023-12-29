import React, { useEffect, useState } from 'react'
import './UserDetails.css'
import Header from '../../../components/header/Header'
import NavBar from '../../../components/navBar/NavBar'
import NavBar2 from '../../../components/navBar/NavBar2'
import FooterB from '../../FooterB/FooterB'
import axios from 'axios'

export default function UserDetails() {

    const [userDetails, getUserDetails] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/all_view_user_api').then((response) => {
            getUserDetails(response.data.data)
        })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    console.log(userDetails);

    const deletee = (deleteid) => {

        axios.delete(`http://127.0.0.1:8000/api/delete_user_api/${deleteid}`).then((response) => {
            console.log(response);
            window.location.reload()
        })
    }

    return (
        <>
            <div className='reg_head'>
                <Header></Header>
            </div>

            <div className='reg_nav'>
                <NavBar></NavBar>
                <NavBar2></NavBar2>
            </div>
            <div className='container'>
                <div className="admin-view-user">
                    <table className="table table-admin table-bordered" border={1} cellPadding={20} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Sl.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <>
                            {
                                userDetails[0] == null ?
                                <div className='no_pending'>Empty</div>
                                :
                                userDetails.map((data, key) => (
                                    <>
                                        <tbody>
                                            <tr>
                                                <td>{key + 1}</td>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.number}</td>
                                                <td>
                                                    <center>
                                                        <button className="btn btn-danger text-dark" onClick={() => { deletee(data.id) }}>Delete</button>
                                                    </center>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </>
                                ))
                            }
                        </>
                    </table>
                </div>
            </div>

            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}
