import React from 'react'
import './PaymentSuccessfull.css'
import { useNavigate, useParams } from 'react-router-dom'

export default function PaymentSuccessfull() {

    const { id } = useParams()

    const navigate = useNavigate()

    const backToHome = ()=>{
        navigate('/')
        window.location.reload()
    }

    return (
        <>
            <div className='back_layer'>
                <div class="container pay_succ_p">
                    <div class="printer-top"></div>

                    <div class="paper-container">
                        <div class="printer-bottom"></div>

                        <div class="paper">
                            <div class="main-contents-pay">
                                <div class="success-icon">&#10004;</div>
                                <div class="success-title">
                                    Payment Complete
                                </div>
                                <div class="success-description">
                                    Thank you for completing the payment! You will shortly receive an email of your payment.
                                </div>
                                <div class="order-details-pay">
                                    <div class="order-number-label">Transaction ID</div>
                                    <div class="order-number-pay">SANZ {id}143{id}</div>
                                    <div class="complement-pay">Thank You!</div>
                                </div>
                                <button className='back_home_btn' onClick={backToHome}>Back to Home Page</button>
                            </div>
                            <div class="jagged-edge"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
