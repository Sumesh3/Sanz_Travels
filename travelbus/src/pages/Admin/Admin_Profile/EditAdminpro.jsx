import React, { useEffect, useState } from 'react'
import './EditAdminpro.css'
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

export default function EditAdminpro() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const userid = localStorage.getItem('user_id')

    const [adprviews, getadprviews] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/single_admin_api/${userid}`).then((response) => {
            getadprviews(response.data);
        })
    }, [])

    const admeditProf = (event) => {
        const name = event.target.name
        const value = event.target.value
        getadprviews({ ...adprviews, [name]: value })
    }

    const admupdate = () => {
        axios.put(`http://127.0.0.1:8000/api/update_admin_api/${userid}`, adprviews).then((response) => {
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
                                            <input className='user-name-input' type="text" name='name' value={adprviews.name} onChange={admeditProf} />
                                        </h1>
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
                                                    : <input name='number' className='user-number-input' type="text" value={adprviews.number} onChange={admeditProf} />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <center>
                                        <button type="submit" className="submit_buttn" onClick={admupdate}>Submit</button>
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
