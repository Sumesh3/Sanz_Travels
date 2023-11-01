import React from 'react'

export default function Cta() {
    return (
        <div className="cta">
            <div className="cta_background" style={{ backgroundImage: 'url(/Assets/images/cta_img.jpg)' }} />
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* CTA Slider */}
                        <div className="cta_slider_container">
                            <div className="owl-carousel owl-theme cta_slider">
                                {/* CTA Slider Item */}
                                <div className="owl-item cta_item text-center">
                                    <div className="cta_title">Are you ready to go to bangalore</div>
                                    <div className="rating_r rating_r_4">
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                    </div>
                                    <p className="cta_text">Bangalore is a metropolitan city and the capital of Karnataka state. It is the third most populous place. The town has a population of more than 8 million.</p>
                                    <div className="button cta_button"><div className="button_bcg" /><a href="#">book now<span /><span /><span /></a></div>
                                </div>
                            </div>
                            {/* CTA Slider Nav - Prev */}
                            <div className="cta_slider_nav cta_slider_prev">
                                <svg version="1.1" id="Layer_4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                                    <defs>
                                        <linearGradient id="cta_grad_prev">
                                            <stop offset="0%" stopColor="#fa9e1b" />
                                            <stop offset="100%" stopColor="#8d4fff" />
                                        </linearGradient>
                                    </defs>
                                    <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
								M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
								C22.545,2,26,5.541,26,9.909V23.091z" />
                                    <polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
								11.042,18.219 " />
                                </svg>
                            </div>
                            {/* CTA Slider Nav - Next */}
                            <div className="cta_slider_nav cta_slider_next">
                                <svg version="1.1" id="Layer_5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                                    <defs>
                                        <linearGradient id="cta_grad_next">
                                            <stop offset="0%" stopColor="#fa9e1b" />
                                            <stop offset="100%" stopColor="#8d4fff" />
                                        </linearGradient>
                                    </defs>
                                    <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
							M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
							C22.545,2,26,5.541,26,9.909V23.091z" />
                                    <polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
							17.046,15.554 " />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
