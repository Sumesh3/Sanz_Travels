import React, { useState } from 'react'
import './DebitCard.css'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import NavBar2 from '../../components/navBar/NavBar2'
import FooterB from '../FooterB/FooterB'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function DebitCard() {

	const [input, getInputs] = useState({})
	const addDetails = (event) => {
		const name = event.target.name
		const value = event.target.value
		getInputs({ ...input, [name]: value })
	}
	const handleChange = (e) => {
		const value = e.target.value.replace(/\D/g, "");
		const { name } = e.target
		getInputs({ ...input, [name]: value })
	};
	const [card, setCard] = useState(false)

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
			<div className='log_hed'>
				<Header></Header>
			</div>

			<div className='log_nav'>
				<NavBar></NavBar>
				<NavBar2></NavBar2>
			</div>
			<div className='container'>
				<form className="datpayment-form">
					<div className="dpf-title">
						Payment by Credit / Debit / ATM Card
						<div className="accepted-cards-logo" />
					</div>

					{
						card === false ?
							<div className="container debit_main">
								<header className='header_debit'>
									<span className="logo_debit">
										<img src="Assets\Images\credit_card.png" alt="" />
										<h5 className='debit_card_name'>Debit Card</h5>
									</span>
									<img src="Assets\Images\chip.jpg" alt="" className="debit_chip" />
								</header>
								<div className="card-details">
									<div className="name-number">
										<h6 className='debit_card_name'>Card Number</h6>
										<input type="text" className='debit_number' placeholder='0000 0000 0000 0000' value={input.cardnumber} />
										<input type="text" className='debit_name' placeholder='CARD HOLDER' value={input.cardholder} />
									</div>
									<div className="debit_valid-date">
										<h6 className='debit_valid'>Valid Thru</h6>
										<h5 className='debit_card_name' placeholder='MM/YY'>  {input.validmonth}/{input.validyear}</h5>
									</div>
								</div>
							</div>
							:
							<div className="container ccv_debit_main">
								<div className="ccv_black"></div>
								<div className="ccv_white"></div>
								<input type="text" className='input_ccv' placeholder='cvv' value={input.cardccv} />
							</div>
					}

					<br />
					<div className="dpf-card-placeholder" />
					<div className="dpf-input-container">
						<div className="dpf-input-row">
							<label className="dpf-input-label">Card Number</label>
							<div className="dpf-input-container with-icon">
								<span className="dpf-input-icon"><i className="fa fa-credit-card" aria-hidden="true" /></span>
								<input type="text" className="dpf-input" name='cardnumber' onChange={handleChange} value={input.cardnumber} onClick={() => { setCard(false) }} />
							</div>
						</div>
						<div className="dpf-input-row">
							<div className="dpf-input-column">
								<label className="dpf-input-label">Valid upto</label>
								<div className="dpf-input-container">
									<input size={2} className='card_valid-upto' placeholder="MM" name='validmonth' onChange={addDetails} onClick={() => { setCard(false) }} />
									<input size={2} className='card_valid-upto' placeholder="YY" name='validyear' onChange={addDetails} onClick={() => { setCard(false) }} />
								</div>
							</div>
							<div className="dpf-input-column">
								<label className="dpf-input-label">CCV</label>
								<div className="dpf-input-container">
									<input type="text" className="dpf-input" size={4} name='cardccv' onChange={addDetails} onClick={() => { setCard(true) }} />
								</div>
							</div>
						</div>
						<div className="dpf-input-row">
							<label className="dpf-input-label">Card Holder</label>
							<div className="dpf-input-container">
								<input type="text" className="dpf-input" name='cardholder' onChange={addDetails} onClick={() => { setCard(false) }} />
							</div>
						</div>
						<button type="submit" className="dpf-submit" onClick={payamount}>Procced Payment</button><br />
					</div>
				</form>
			</div>
			<div className='reg_foot'>
				<FooterB></FooterB>
			</div>
		</>
	)
}
