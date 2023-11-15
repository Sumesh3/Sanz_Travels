import React from 'react'
import './PaymentSuccessfull.css'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import NavBar2 from '../../components/navBar/NavBar2'
import FooterB from '../FooterB/FooterB'

export default function PaymentSuccessfull() {
  return (
    <>
    <div className='log_hed'>
                <Header></Header>
            </div>

            <div className='log_nav'>
                <NavBar></NavBar>
                <NavBar2></NavBar2>
            </div>
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
                                <div class="order-number-pay">123456789</div>
                                <div class="complement-pay">Thank You!</div>
                            </div>
                        </div>
                        <div class="jagged-edge"></div>
                    </div>
                </div>
            </div>
            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>
    </>
  )
}
