import React from 'react'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import NavBar2 from '../../components/navBar/NavBar2'
import Search from './Search'
import FooterB from '../FooterB/FooterB'
import './SearchNormal.css'

export default function SearchNormal() {
    return (
        <>
            <div className='search_head'>
                <div className='log_hed'>
                    <Header></Header>
                </div>
                <div className='log_nav '>
                    <NavBar></NavBar>
                    <NavBar2></NavBar2>
                </div>
            </div>

            <div>
                <img className='bus_search_img1' src="/Assets/images/bus_stoping1.jpg" alt="" />
                <div className='search_level'>
                    <Search></Search>
                </div>
                <img className='bus_search_img2' src="/Assets/images/bus_stoping2.jpg" alt="" />
            </div>

            <div className='reg_foot ser_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}
