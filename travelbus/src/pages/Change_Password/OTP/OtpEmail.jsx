import React, { useState } from 'react'
import './OtpEmail.css'
import Header from '../../../components/header/Header'
import NavBar from '../../../components/navBar/NavBar'
import NavBar2 from '../../../components/navBar/NavBar2'
import FooterB from '../../FooterB/FooterB'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

export default function OtpEmail() {

    const [emailId, getEmailId] = useState({})

    const navigate = useNavigate()

    console.log(emailId);

    const email = (event) => {
        const name = event.target.name
        const value = event.target.value
        getEmailId({ ...emailId, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/OTP_send_API", emailId).then((response) => {
            console.log(response)
            sessionStorage.setItem("otpemail", response.data.data.email)
            toast.success(response.data.message, {
                icon: '👏',
                position: "bottom-center",
                autoClose: 800,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
            navigate('/enterotp')

        }).catch((err) => {

            toast.error(err.response.data.data, {
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
            <div className='email_typing'>
                <div className='container' >
                    <div class="forgot_main">
                        <h1 className='forgot_head'>Forgot Password</h1>
                        <form>
                            <center>
                                <table>
                                    <tr>
                                        <td className='td_pass'>Email</td>
                                        <td className='td_pass'>: <input class="forgot_text" type="email" placeholder="Enter Your Email" name='email' onChange={email} /></td>
                                    </tr>
                                </table>
                            </center>
                            <center><input class="forgot_submit" type="submit" value="Send" onClick={submit}/></center><br /><br />
                        </form>
                    </div>
                </div>
            </div>
            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}
