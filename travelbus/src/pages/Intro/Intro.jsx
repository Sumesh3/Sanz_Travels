import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function Intro() {
    return (
        <div className="intro">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="intro_title text-center">We are ready to go everywhere</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="intro_text text-center">
                            <p>We transport to all major cities in India. All packages are affordable for everyone. Are you ready to go with us?</p>
                        </div>
                    </div>
                </div>
                <div className="row intro_items">

                    <div className="col-lg-4 intro_col">
                        <div className="intro_item">
                            <div className="intro_item_overlay" />

                            <div className="intro_item_background" style={{ backgroundImage: 'url(/Assets/images/bangalore1.jpg)' }} />
                            <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
                                <div className="intro_date">Dec 3rd</div>
                                <div className="button intro_button"><div className="button_bcg" /><a href="#">see more<span /><span /><span /></a></div>
                                <div className="intro_center text-center">
                                    <h1>Bangalore</h1>
                                    <div className="intro_price"><CurrencyRupeeIcon fontSize='1px' />999</div>
                                    <div className="rating rating_4">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 intro_col">
                        <div className="intro_item">
                            <div className="intro_item_overlay" />

                            <div className="intro_item_background" style={{ backgroundImage: 'url(/Assets/images/bangalore3.jpg)' }} />
                            <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
                                <div className="intro_date">Dec 4th</div>
                                <div className="button intro_button"><div className="button_bcg" /><a href="#">see more<span /><span /><span /></a></div>
                                <div className="intro_center text-center">
                                    <h1>Chennai</h1>
                                    <div className="intro_price"><CurrencyRupeeIcon fontSize='1px' />1099</div>
                                    <div className="rating rating_4">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 intro_col">
                        <div className="intro_item">
                            <div className="intro_item_overlay" />

                            <div className="intro_item_background" style={{ backgroundImage: 'url(/Assets/images/hyderabad.jpg)' }} />
                            <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
                                <div className="intro_date">Dec 5th</div>
                                <div className="button intro_button"><div className="button_bcg" /><a href="#">see more<span /><span /><span /></a></div>
                                <div className="intro_center text-center">
                                    <h1>Hyderabad</h1>
                                    <div className="intro_price"><CurrencyRupeeIcon fontSize='1px' />1599</div>
                                    <div className="rating rating_4">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
