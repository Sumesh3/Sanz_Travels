import React from 'react'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import NavBar2 from '../../components/navBar/NavBar2'
import HomeDup from './HomeDup'
import Search from '../Search/Search'
import Intro from '../Intro/Intro'
import Cta from '../CTA/Cta'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import FooterB from '../FooterB/FooterB'
import { useEffect } from 'react'

export default function Home() {
    let data = localStorage.getItem("role")

    return (

        <div className="super_container">

            <header className="header">
                <Header></Header>
                <NavBar></NavBar>
            </header>
            <NavBar2></NavBar2>
            <HomeDup></HomeDup>
            <>
                {
                    data == 'company' ?
                        ''
                        :
                        data == 'admin' ?
                            ""
                            :
                            <>
                                <Search></Search>
                                <Intro></Intro>
                                <Cta></Cta>
                            </>
                }
            </>

            <Testimonials></Testimonials><br />
            <>
                {
                    data == 'admin' ?
                        ""
                        :
                        <Contact></Contact>
                }
            </>
            <footer className="footer">
                <FooterB></FooterB>
            </footer>
        </div>
    )
}
