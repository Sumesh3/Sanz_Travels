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

        axios.delete(`http://127.0.0.1:8000/api/delete_login_api/${deleteid}`).then((response) => {
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
                    {
                        userDetails[0] == null ?
                            <div className='loading_est'>
                                <center>
                                    <div class="loading_es">
                                        <span class="l">E</span>
                                        <span class="o">m</span>
                                        <span class="a">p</span>
                                        <span class="d">t</span>
                                        <span class="i">y</span>
                                        <span class="n">.</span>
                                        <span class="g">.</span>
                                        <span class="d1">.</span>
                                        <span class="d2">.</span>
                                        <div class="load_es">
                                            <div class="progress"></div>
                                            <div class="progress"></div>
                                            <div class="progress"></div>
                                            <div class="progress"></div>
                                        </div>
                                    </div>
                                </center>
                            </div>
                            :
                            <table className="table table-admin tab_use_res table-bordered" border={1} cellPadding={20} cellSpacing={0}>
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
                                                                <button style={{ cursor: 'pointer' }} className="btn btn-danger text-#bcbac6" onClick={() => { deletee(data.login_id) }}>Delete</button>
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
                </div>
            </div>

            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}
