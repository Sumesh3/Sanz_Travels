import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {

    let user = localStorage.getItem("email")
    console.log(user);

    const navigate = useNavigate()

    const clears = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }

    return (
        <div class="top_bar">
            <div class="container">
                <div class="row">
                    <div class="col d-flex flex-row">
                        <div class="phone">+91 9539451245</div>
                        <div class="social">
                            <ul class="social_list">
                                <li class="social_list_item"><a href="https://www.facebook.com/profile.php?id=100009346163283&mibextid=JRoKGi"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li class="social_list_item"><a href="https://instagram.com/__sumesh____?igshid=YTQwZjQ0NmI0OA=="><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li class="social_list_item"><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li class="social_list_item"><a href="https://linkedin.com/in/sumesh-s-1050b9148"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div class="user_box ml-auto">
                            {user ?
                                <>
                                    <div class="user_box_login user_box_link">
                                        <Link to={'/'} onClick={clears}>log out</Link>
                                    </div>
                                </>
                                : <><div class="user_box_login user_box_link">
                                    <Link to={'/login'}>login</Link>
                                </div>
                                    <div class="user_box_register user_box_link">
                                        <Link to={'/registration'}>register</Link>
                                    </div>
                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
