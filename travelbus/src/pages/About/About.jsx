import React from 'react'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import NavBar2 from '../../components/navBar/NavBar2'
import FooterB from '../FooterB/FooterB'
import './About.css'
import Contact from '../Contact/Contact'

export default function About() {
    return (
        <>
            <header className="header">
                <Header></Header>
                <NavBar></NavBar>
            </header>
            <NavBar2></NavBar2>
            <div>
                <div className="about_us">
                    <div className="about_content">
                        <img className='about_bg' src="/Assets/images/about_background.jpg" />
                        <div className="about_title">About Us</div>
                    </div>
                </div>
                {/* Contact */}
                <div className="contact_form_section contactus_aaa">
                    <Contact></Contact>
                </div>
            </div>
            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}
