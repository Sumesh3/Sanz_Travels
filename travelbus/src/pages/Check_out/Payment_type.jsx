import React, { useState } from 'react'
import './Payment_type.css'
import upi_icon from './upi_icon.svg'
import credit_card from './credit_card.svg'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import NavBar2 from '../../components/navBar/NavBar2'
import FooterB from '../FooterB/FooterB'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Payment_type() {



    const navigate = useNavigate()

    const busid = sessionStorage.getItem('busid')
    const login_id = localStorage.getItem('login_id')
    const no_of_seat = sessionStorage.getItem('no_of_seat')
    const seat_no = [sessionStorage.getItem('seat_no')].map(String)
    const seat_nos = seat_no[0].split(',')
    console.log(seat_nos);
    const total_fare = sessionStorage.getItem('total_fare')
    const today = sessionStorage.getItem('today')

    const [paytype, setpaytype] = useState('')
    const Payment_type = (pymenttype) => {
        setpaytype(pymenttype)
    }
    console.log(paytype);

    const payamount = () => {
        if (paytype === 'qr') {
            const data = {
                busid: busid,
                login_id: login_id,
                no_of_seat: no_of_seat,
                seat_no: seat_nos,
                total_fare: total_fare,
                today: today
            }
            axios.post("http://127.0.0.1:8000/api/booked_seat_api", data).then((response) => {
                navigate('/payment_successfull')
                window.location.reload()
            }).catch((error) => {
            })
        }

        if (paytype === 'upi') {
            navigate('/')
        }

        if (paytype === 'debit_card') {
            navigate('/debitCard')
        }
    }

    return (
        <>
            <div className='app_hed'>
                <Header></Header>
            </div>

            <div className='app_nav'>
                <NavBar></NavBar>
                <NavBar2></NavBar2>
            </div>
            <div className='container bill_body'>
                <div className="iphone ">
                    <header className="checkout">
                        <h3 className='pyment_method_sub'>Payment Method</h3>
                    </header>
                    <form className="form_check">
                        <center>
                            <img src="/Bustrip/media/images/QR/upi_qr.png" alt="" width={'60%'} />
                            <input className='pay_type_input qr_pay_ty' name="payment-method" type="radio" onClick={() => { Payment_type("qr") }} />
                        </center>
                        <fieldset className='pyment_method'>
                            <legend className='checkout_h1'>OR</legend>
                            <div className="form__radios">
                                <div className="form__radio">
                                    <label>
                                        <img className="icons" src={upi_icon} />
                                        UPI
                                    </label>
                                    <input className='pay_type_input' name="payment-method" type="radio" onClick={() => { Payment_type("upi") }} />
                                </div>

                                <div className="form__radio">
                                    <label>
                                        <img className="icons" src={credit_card} />
                                        Credit / Debit / ATM Card
                                    </label>
                                    <input className='pay_type_input' name="payment-method" type="radio" onClick={() => { Payment_type("debit_card") }} />
                                </div>

                            </div>
                        </fieldset>
                        <div>
                            <center>
                                <button className="button button_bill" onClick={payamount}>
                                    <svg className="icon">
                                        <use xlinkHref="#icon-shopping-bag" />
                                    </svg>Proceed
                                </button>
                            </center>
                        </div>
                    </form>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                    <symbol id="icon-shopping-bag" viewBox="0 0 24 24">
                        <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
                    </symbol>
                </svg>
            </div>
            <div className='app_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}
