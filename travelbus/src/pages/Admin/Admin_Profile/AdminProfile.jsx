import React, { useEffect, useState } from 'react'
import './AdminProfile.css'
import axios from 'axios';
import EditAdminpro from './EditAdminpro';
import Header from '../../../components/header/Header';
import NavBar from '../../../components/navBar/NavBar';
import NavBar2 from '../../../components/navBar/NavBar2';
import FooterB from '../../FooterB/FooterB';

export default function AdminProfile() {

    const [adprviews, getadprviews] = useState({})

    const userid = localStorage.getItem('user_id')

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/single_admin_api/${userid}`).then((response) => {
            getadprviews(response.data);
        })
    }, [])

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
                <div className='qqqt'>
                    <div className="profile-containert">
                        <img className="profile-picturet" src='/Assets/images/profile3.png' />
                        <div className="user-infot">
                            <h1 className="user-namet">{adprviews.name}</h1>
                        </div>
                        <div className="user-contactt">
                            <table>
                                <tr>
                                    <td>
                                        Email
                                    </td>
                                    <td>
                                        : {adprviews.email}
                                    </td>
                                </tr>
                                <tr className='profile_ww'>
                                    <td>
                                        Phone
                                    </td>
                                    <td>
                                        : {adprviews.number}
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <center>
                            <button className="editbuttont">
                                <EditAdminpro></EditAdminpro>
                            </button>
                        </center>
                    </div>
                </div>
            </div>
            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}
