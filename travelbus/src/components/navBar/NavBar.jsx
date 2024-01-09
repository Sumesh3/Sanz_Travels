import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Person from '@mui/icons-material/Person';

export default function NavBar() {

    let data = localStorage.getItem("role")

    const navigate = useNavigate()

    const search = () => {
        navigate('/searchnormal')
    }

    return (
        <nav className="main_nav">
            <div className="container">
                <div className="row">
                    <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
                        <div className="logo_container">
                            <div className="logo"><Link to={'/'} style={{letterSpacing:'1px', fontFamily:'sans-serif'}}><img src="Assets/images/logo.png" height={'40px'} />Stallions</Link></div>
                        </div>
                        <div className="main_nav_container ml-auto">
                            <ul className="main_nav_list">
                                <li className="main_nav_item"><Link to={'/'}>home</Link></li>
                                <>
                                    {
                                        data == 'admin' ?
                                            <li className="main_nav_item dropdown-nav"><a className='dropbtn'>Details</a>
                                                <div class="dropdown-content-nav dropdown-content">
                                                    <Link to={'/userdetails'}>User Details</Link>
                                                    <Link to={'/companydetails'}>Establishment Details</Link>
                                                </div>
                                            </li>
                                            :
                                            <li className="main_nav_item"><Link to={'/about'}>about us</Link></li>
                                    }
                                </>
                                <>
                                    {
                                        data == 'admin' ?

                                            <li className="main_nav_item dropdown-nav"><a className='dropbtn'>Bus Details</a>
                                                <div class="dropdown-content-nav dropdown-content">
                                                    <Link to={'/busdetails'}>Approved Busses</Link>
                                                    <Link to={'/rejectedbusses'}>Rejected Busses</Link>
                                                </div>
                                            </li>
                                            // <li className="main_nav_item">
                                            //     <Link to={'/busdetails'}>Bus Details</Link>
                                            //     </li>
                                            :
                                            data == 'company' ?
                                                <li className="main_nav_item dropdown-nav"><a className='dropbtn'>Bus Details</a>
                                                    <div class="dropdown-content-nav dropdown-content">
                                                        <Link to={'/approvecompanybus'}>Approved / Pending</Link>
                                                        <Link to={'/rejectedcompanybus'}>Rejected</Link>
                                                    </div>
                                                </li>
                                                :
                                                <li className="main_nav_item"><Link to={'/blog'}>Blog</Link></li>
                                    }
                                </>
                                <>
                                    {
                                        data == 'company' ?
                                            <li className="main_nav_item">
                                                <Link to={'/addbus'}>Add your bus</Link>
                                            </li>
                                            : data == 'admin' ?
                                                <li className="main_nav_item">
                                                    <Link to={'/approvebus'}>Confirm Request</Link>
                                                </li>
                                                : data == 'user' ?
                                                    <li className="main_nav_item">
                                                        <Link to={'/viewtickets'}>view ticket</Link>
                                                    </li>
                                                    : ""
                                    }
                                </>
                                <>
                                    {
                                        data == 'company' ?
                                            <li className="main_nav_item">
                                                <Link to={'/bookedticketco'}>Booked Details</Link>
                                            </li>
                                            : data == 'admin' ?
                                                <li className="main_nav_item">
                                                    <Link to={'/bookedticket'}>Booked Details</Link>
                                                </li>
                                                : ""
                                    }
                                </>
                                <>
                                    {
                                        data == null ?
                                            ""
                                            :
                                            data == 'user' ?
                                                <li className="main_nav_item"><Link to={'/viewprofile'}><Person></Person></Link></li>
                                                :
                                                data == 'admin' ?
                                                    <li className="main_nav_item"><Link to={'/adminprofile'}><Person></Person></Link></li>
                                                    :
                                                    data == 'company' ?
                                                        <li className="main_nav_item"><Link to={'/companyprofile'}><Person /></Link></li>
                                                        :
                                                        ''
                                    }
                                </>

                            </ul>
                        </div>

                        <div className="content_search ml-lg-0 ml-auto">
                        </div>
                        {
                            data == 'admin' ?
                            ''
                            :
                            
                            data == 'company' ?
                            ''
                            :
                                <button className="content_search" style={{ backgroundColor: 'transparent', border: 'none' }} onClick={search}>
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <g>
                                                    <path className="mag_glass" fill="#FFFFFF" d="M78.438,216.78c0,57.906,22.55,112.343,63.493,153.287c40.945,40.944,95.383,63.494,153.287,63.494
											s112.344-22.55,153.287-63.494C489.451,329.123,512,274.686,512,216.78c0-57.904-22.549-112.342-63.494-153.286
											C407.563,22.549,353.124,0,295.219,0c-57.904,0-112.342,22.549-153.287,63.494C100.988,104.438,78.439,158.876,78.438,216.78z
											M119.804,216.78c0-96.725,78.69-175.416,175.415-175.416s175.418,78.691,175.418,175.416
											c0,96.725-78.691,175.416-175.416,175.416C198.495,392.195,119.804,313.505,119.804,216.78z" />
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path className="mag_glass" fill="#FFFFFF" d="M6.057,505.942c4.038,4.039,9.332,6.058,14.625,6.058s10.587-2.019,14.625-6.058L171.268,369.98
											c8.076-8.076,8.076-21.172,0-29.248c-8.076-8.078-21.172-8.078-29.249,0L6.057,476.693
											C-2.019,484.77-2.019,497.865,6.057,505.942z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                        }
                        {/* <form id="search_form" className="search_form bez_1">
                            <input type="search" className="search_content_input bez_1" />
                        </form> */}
                        <div className="hamburger">
                            <i className="fa fa-bars trans_200" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
