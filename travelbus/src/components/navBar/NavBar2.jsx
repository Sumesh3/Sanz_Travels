import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar2() {

    let data = localStorage.getItem("role")

    return (
        <div>
            <div className="menu trans_500">
                <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="menu_close_container"><div className="menu_close" /></div>
                    <div className="logo menu_logo"><Link to={'/'}><img src="Assets/images/logo.png" height={'40px'} /></Link></div>
                    <ul>
                        <li className="menu_item"><Link to={'/'}>Home</Link></li>
                        <>
                            {
                                data == 'admin' ?
                                    <>
                                        <li className="menu_item">
                                            <Link to={'/userdetails'}>User Details</Link>
                                        </li>
                                        <li className="menu_item">
                                            <Link to={'/companydetails'}>Establishment Details</Link>
                                        </li>
                                    </>
                                    :
                                    <li className="menu_item"><Link to={'/about'}>About us</Link></li>
                            }
                        </>
                        <>
                            {
                                data == 'admin' ?
                                    <>
                                        <li className="menu_item">
                                            <Link to={'/busdetails'}>Approved Busses</Link>
                                        </li>
                                        <li className="menu_item">
                                            <Link to={'/rejectedbusses'}>Rejected Busses</Link>
                                        </li>
                                    </>
                                    :
                                    data == 'company' ?
                                        <>
                                            <li className="menu_item">
                                                <Link to={'/approvecompanybus'}>Approved / Pending</Link>
                                            </li>
                                            <li className="menu_item">
                                                <Link to={'/rejectedcompanybus'}>Rejected</Link>
                                            </li>
                                        </>
                                        :
                                        <li className="menu_item"><Link to={'/blog'}>Blog</Link></li>
                            }
                        </>
                        <>
                            {
                                data == 'admin' ?
                                    <li className="menu_item">
                                        <Link to={'/approvebus'}>Confirm Request</Link>
                                    </li>
                                    :
                                    data == 'company' ?
                                        <li className="menu_item">
                                            <Link to={'/addbus'}>Add your bus</Link>
                                        </li>
                                        : data == 'user' ?
                                            <li className="menu_item">
                                                <Link to={'/viewtickets'}>view ticket</Link>
                                            </li>
                                            :
                                            ''
                            }
                        </>
                        <>
                            {
                                data == 'admin' ?
                                    <li className="menu_item">
                                        <Link to={'/bookedticket'}>Booked Details</Link>
                                    </li>
                                    :
                                    data == 'company' ?
                                        <li className="menu_item">
                                            <Link to={'/bookedticketco'}>Booked Details</Link>
                                        </li>
                                        :
                                        ''
                            }
                        </>
                        <>
                            {
                                data == null ?
                                    ""
                                    :
                                    data == 'user' ?
                                        <li className="menu_item"><Link to={'/viewprofile'}>My account</Link></li>
                                        :
                                        data == 'admin' ?
                                            <li className="menu_item"><Link to={'/adminprofile'}>My account</Link></li>
                                            :
                                            data == 'company' ?
                                                <li className="menu_item"><Link to={'/companyprofile'}>My account</Link></li>
                                                :
                                                ''
                            }
                        </>
                    </ul>
                </div>
            </div>
        </div>
    )
}
