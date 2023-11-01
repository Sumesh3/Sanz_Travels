import React from 'react'

export default function Header() {

    let user = localStorage.getItem("email")
    console.log(user);

    const clears = () => {
        localStorage.clear()
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
                                <li class="social_list_item"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li class="social_list_item"><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li class="social_list_item"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li class="social_list_item"><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div class="user_box ml-auto">
                            {user ? 
                            <>
                            <div class="user_box_login user_box_link"><a onClick={clears} href="/">log out</a></div>
                            </>
                             : <><div class="user_box_login user_box_link"><a href="/login">login</a></div>
                                <div class="user_box_register user_box_link"><a href="/registration">register</a></div>
                            </>}

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
