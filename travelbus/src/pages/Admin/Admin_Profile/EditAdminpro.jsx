import React, { useEffect, useState } from 'react'
import './EditAdminpro.css'
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.success(response.data.message, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
            window.location.reload()
        })

    }

    return (
        <>
        <ToastContainer/>
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
