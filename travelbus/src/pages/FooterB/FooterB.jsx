import React from 'react'

export default function FooterB() {
    return (
        <div className="container">
            <div className="row">
                {/* Footer Column */}
                <div className="col-lg-3 footer_column">
                    <div className="footer_col">
                        <div className="footer_content footer_about">
                            <div className="logo_container footer_logo">
                                <div className="logo"><a href="/"><img src="Assets/images/logo.png" height={'40px'}/>sanz travel</a></div>
                            </div>
                            <p className="footer_about_text">Our service and packages are affordable for everyone, book your seat and enjoy with us.</p>
                            <ul className="footer_social_list">
                                <li className="footer_social_item"><a href="#"><i className="fa fa-facebook-f" /></a></li>
                                <li className="footer_social_item"><a href="#"><i className="fa fa-instagram" /></a></li>
                                <li className="footer_social_item"><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li className="footer_social_item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Footer Column */}
                <div className="col-lg-3 footer_column">
                    <div className="footer_col">
                        <div className="footer_title">blog posts</div>
                        <div className="footer_content footer_blog">
                            {/* Footer blog item */}
                            <div className="footer_blog_item clearfix">
                                <div className="footer_blog_image"><img src="/Assets/images/bangalore.jpg" height={'45px'}/></div>
                                <div className="footer_blog_content">
                                    <div className="footer_blog_title"><a href="blog.html">Travel with us this year</a></div>
                                    <div className="footer_blog_date">Oct 17, 2023</div>
                                </div>
                            </div>
                            {/* Footer blog item */}
                            <div className="footer_blog_item clearfix">
                                <div className="footer_blog_image"><img src="/Assets/images/night.jpg" height={'45px'}/></div>
                                <div className="footer_blog_content">
                                    <div className="footer_blog_title"><a href="blog.html">New destinations for you</a></div>
                                    <div className="footer_blog_date">Oct 16, 2023</div>
                                </div>
                            </div>
                            {/* Footer blog item */}
                            <div className="footer_blog_item clearfix">
                                <div className="footer_blog_image"><img src="/Assets/images/explore.png" height={'45px'}/></div>
                                <div className="footer_blog_content">
                                    <div className="footer_blog_title"><a href="blog.html">Are you ready to go</a></div>
                                    <div className="footer_blog_date">Oct 15, 2023</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Column */}
                <div className="col-lg-3 footer_column">
                    <div className="footer_col">
                        <div className="footer_title">tags</div>
                        <div className="footer_content footer_tags">
                            <ul className="tags_list clearfix">
                                <li className="tag_item"><a href="">travel</a></li>
                                <li className="tag_item"><a href="">adventure</a></li>
                                <li className="tag_item"><a href="">explore</a></li>
                                <li className="tag_item"><a href="">music</a></li>
                                <li className="tag_item"><a href="">video</a></li>
                                <li className="tag_item"><a href="">party</a></li>
                                <li className="tag_item"><a href="">photography</a></li>
                                <li className="tag_item"><a href="">sleep</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Footer Column */}
                <div className="col-lg-3 footer_column">
                    <div className="footer_col">
                        <div className="footer_title">contact info</div>
                        <div className="footer_content footer_contact">
                            <ul className="contact_info_list">
                                <li className="contact_info_item d-flex flex-row">
                                    <div><div className="contact_info_icon"><img src="/Assets/images/placeholder.svg" /></div></div>
                                    <div className="contact_info_text">Kozhikode, Kerala</div>
                                </li>
                                <li className="contact_info_item d-flex flex-row">
                                    <div><div className="contact_info_icon"><img src="/Assets/images/phone-call.svg" alt="" /></div></div>
                                    <div className="contact_info_text">+91 9539451245</div>
                                </li>
                                <li className="contact_info_item d-flex flex-row">
                                    <div><div className="contact_info_icon"><img src="/Assets/images/message.svg" alt="" /></div></div>
                                    <div className="contact_info_text"><a href="mailto:sumeshmkx@gmail.com?Subject=Hello" target="_top">sumeshmkx@gmail.com</a></div>
                                </li>
                                <li className="contact_info_item d-flex flex-row">
                                    <div><div className="contact_info_icon"><img src="/Assets/images/planet-earth.svg" alt="" /></div></div>
                                    <div className="contact_info_text"><a href="">www.sanztravel.com</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}