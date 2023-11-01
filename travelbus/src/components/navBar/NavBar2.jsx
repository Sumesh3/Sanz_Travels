import React from 'react'

export default function NavBar2() {

    let data = localStorage.getItem("role")

    return (
        <div>
            <div className="menu trans_500">
                <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="menu_close_container"><div className="menu_close" /></div>
                    <div className="logo menu_logo"><a href="#"><img src="Assets/images/logo.png" height={'40px'} /></a></div>
                    <ul>
                        <li className="menu_item"><a href="/">Home</a></li>
                        <>
                            {
                                data == 'admin' ?
                                    <>
                                        <li className="menu_item"><a href="#">User Details</a></li>
                                        <li className="menu_item"><a href="#">Establishment Details</a></li>
                                    </>
                                    :
                                    <li className="menu_item"><a href="about.html">About us</a></li>
                            }
                        </>
                        <>
                            {
                                data == 'admin' ?
                                    <li className="menu_item"><a href="#">Bus Details</a></li>
                                    :
                                    <li className="menu_item"><a href="blog.html">Blog</a></li>
                            }
                        </>
                        <>
                            {
                                data == 'admin' ?
                                    <li className="menu_item"><a href="/approvebus">Confirm Request</a></li>
                                    :
                                    data == 'company' ?
                                        <li className="menu_item"><a href="/addbus">Add your bus</a></li>
                                        : data == 'user' ?
                                            <li className="menu_item"><a href="#">View ticket</a></li>
                                            :
                                            ''
                            }
                        </>
                        <>
                            {
                                data == null ?
                                    ""
                                    :
                                    <li className="menu_item"><a href="#">My account</a></li>
                            }
                        </>
                    </ul>
                </div>
            </div>
        </div>
    )
}
