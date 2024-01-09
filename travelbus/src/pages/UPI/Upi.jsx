import React from 'react'
import './Upi.css'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import NavBar2 from '../../components/navBar/NavBar2'
import FooterB from '../FooterB/FooterB'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Upi() {

    const navigate = useNavigate()

	const busid = sessionStorage.getItem('busid')
	const login_id = localStorage.getItem('login_id')
	const no_of_seat = sessionStorage.getItem('no_of_seat')
	const seat_no = [sessionStorage.getItem('seat_no')].map(String)
	const seat_nos = seat_no[0].split(',')
	console.log(seat_nos);
	const total_fare = sessionStorage.getItem('total_fare')
	const today = sessionStorage.getItem('today')

	const payamount = (event) => {
		event.preventDefault()
		const data = {
			busid: busid,
			login_id: login_id,
			no_of_seat: no_of_seat,
			seat_no: seat_nos,
			total_fare: total_fare,
			today: today
		}
		axios.post("http://127.0.0.1:8000/api/booked_seat_api", data).then((response) => {
			navigate(`/payment_successfull/${response.data.data.id}`)
			window.location.reload()
		}).catch((error) => {
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
            <div className="upi-container">
                <div className="upi-form">
                    <img src="Assets/images/upi-icon.png" className="upi-logo" />
                    <h2>Make a UPI Payment</h2>
                    <center>
                        <div className='upi_amount'>Amount :</div>
                    </center>
                    <div>
                        <div className="input-group">
                            <label>Recipient UPI ID:</label>
                            <input type="text" name="upi_id" placeholder="Enter UPI ID" />
                        </div>
                        <div className="input-group">
                            <label>Optional Note:</label>
                            <input type="text" name="note" placeholder="Add a note (optional)" />
                        </div>
                        <button type="submit" className="pay-btn" onClick={payamount}>Pay Now</button>
                    </div>
                </div>
            </div>
            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}