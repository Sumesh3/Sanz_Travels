import React, { useEffect, useState } from 'react'
import './Editcmpnypro.css'
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

export default function Editcmpnypro() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const userid = localStorage.getItem('user_id')
    const [companyViews, getcompanyViews] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/single_company_api/${userid}`).then((response) => {
            getcompanyViews(response.data);
        })
    }, [])

    const cmpnyeditProf = (event) => {
        const name = event.target.name
        const value = event.target.value
        getcompanyViews({ ...companyViews, [name]: value })
    }

    const cmpupdate = () => {
        axios.put(`http://127.0.0.1:8000/api/update_single_company_api/${userid}`, companyViews).then((response) => {
            console.log(response);
            window.location.reload()
        })

    }

    return (
        <>
            <div>
                <div onClick={handleOpen} >Edit Profile</div>
                <Modal
                    open={open}
                >

                    <div>
                        <div className='container'>
                            <div className='edit_main'>
                                <div className="profile-container_ed">
                                    <img className="profile-picture_ed" src='/Assets/images/profile2.jpg' />
                                    <div className="user-infot">
                                        <h1>
                                            <input className='user-name-input' type="text" name='name' value={companyViews.name} onChange={cmpnyeditProf} />
                                        </h1>
                                    </div>
                                    <div className="user-contactt">
                                        <table>
                                            <tr>
                                                <td>
                                                    Email
                                                </td>
                                                <td>
                                                    : {companyViews.email}
                                                </td>
                                            </tr>
                                            <tr className='profile_ww'>
                                                <td>
                                                    Phone
                                                </td>
                                                <td>
                                                    : <input name='number' className='user-number-input' type="text" value={companyViews.number} onChange={cmpnyeditProf} />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <center>
                                        <button type="submit" className="submit_buttn" onClick={cmpupdate}>Submit</button>
                                    </center>
                                    <button className='close_button_add' onClick={handleClose}>x</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>
            </div>
        </>
    )
}
