import React, { useState } from 'react'
import './NewPassword.css'
import Header from '../../../components/header/Header'
import NavBar from '../../../components/navBar/NavBar'
import NavBar2 from '../../../components/navBar/NavBar2'
import FooterB from '../../FooterB/FooterB'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

export default function NewPassword() {

    const [password, getPassword] = useState({})

    const navigate = useNavigate()

    const PassTyping = (event) => {
        const name = event.target.name
        const value = event.target.value
        getPassword({ ...password, [name]: value })
    }

    const savepassword = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/update_Password_API", password).then((response) => {
            console.log(response)
            toast.success(response.data.message, {
                position: "bottom-center",
                autoClose: 1800,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
            navigate('/login')
            window.location.reload()
        })
            .catch((err) => {
                toast.error(err.response.data.error, {
                    position: "bottom-center",
                    autoClose: 800,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
                console.log(err);
            })
    }

    return (
        <>
            <ToastContainer />
            <div className='log_hed'>
                <Header></Header>
            </div>

            <div className='log_nav'>
                <NavBar></NavBar>
                <NavBar2></NavBar2>
            </div>
            <div className='npassword_typing'>
                <div className='container'>
                    <center>
                        <div class="newpass_main">
                            <h1 className='change_head'>Change Password</h1>
                            <center>
                                <input class="textnewpass" type="password" name='pass' placeholder="New Password" onChange={PassTyping}></input>
                                <input class="textnewpass" type="password" name='cpass' placeholder="Confirm New Password" onChange={PassTyping}></input>
                            </center>
                            <center>
                                <button class="newpass_submit" onClick={savepassword}>Save Password</button><br></br><br></br>
                            </center>
                        </div>
                    </center>
                </div>
            </div>
            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}
