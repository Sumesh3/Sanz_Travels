import React, { useState } from 'react'
import './EnterOtp.css'
import Header from '../../../components/header/Header'
import NavBar from '../../../components/navBar/NavBar'
import NavBar2 from '../../../components/navBar/NavBar2'
import FooterB from '../../FooterB/FooterB'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function EnterOtp() {

    const [otp, getOtp] = useState({})

    const navigate = useNavigate()

    const otptyping = (event) => {
        const name = event.target.name
        const value = event.target.value
        getOtp({ ...otp, [name]: value })
    }
    console.log(otp);

    const otpsubmit = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/OTP_Checking_API", otp).then((response) => {
            console.log(response)
            navigate('/newpassword')
        })
            .catch((err) => {
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
            <div className='otp_typing'>
                <div className='container'>
                    <div class="otp_main">
                        <h1 className='otp'>OTP Verification</h1>
                        <form>
                            <center><div className='otpemail'>Email : {sessionStorage.getItem("otpemail")}</div></center>
                            <table>
                                <tr>
                                    <td className='otptd'>OTP</td>
                                    <td className='otptd'>: <input class="textotp" type="text" placeholder="Enter Your OTP" name='otp' onChange={otptyping} /></td>
                                </tr>
                            </table>
                            <center><input class="otp_submit" type="submit" value="Send" onClick={otpsubmit} /></center><br /><br />
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
