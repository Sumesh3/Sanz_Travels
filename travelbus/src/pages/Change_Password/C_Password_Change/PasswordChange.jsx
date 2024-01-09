import React, { useState } from 'react'
import Header from '../../../components/header/Header'
import NavBar from '../../../components/navBar/NavBar'
import NavBar2 from '../../../components/navBar/NavBar2'
import FooterB from '../../FooterB/FooterB'
import './PasswordChange.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function PasswordChange() {

    const [password, getPassword] = useState({})

    const login_id = localStorage.getItem('login_id')

    const navigate = useNavigate()

    const passwordTyping = (event) => {
        const name = event.target.name
        const value = event.target.value
        getPassword({ ...password, [name]: value })
    }
    console.log(password);

    const passSubmit = (event) => {
        event.preventDefault()
        axios.put(`http://127.0.0.1:8000/api/password_change_api/${login_id}`, password).then((response) => {
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
            navigate('/')
            window.location.reload()
        })
            .catch((error) => {
                toast.error(error.response.data.error, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                console.log(error);
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
            <div className='change_pass'>
                <div className='container'>
                    <center>
                        <div className="changepass_main">
                            <form className="changepass_section">
                                <h2 className='changepass_headding'>Change Password</h2><br></br>
                                <input className="changepass-input" type="password" placeholder="Current Password" name='currentpass' onChange={passwordTyping} />
                                <input className="changepass-input" type="password" placeholder="New Password" name='newpass' onChange={passwordTyping} />
                                <input className="changepass-input" type="password" placeholder="Confirm New Password" name='confirmpass' onChange={passwordTyping} />
                                <button className="changepass_button" onClick={passSubmit}>Save Password</button>
                            </form>
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
