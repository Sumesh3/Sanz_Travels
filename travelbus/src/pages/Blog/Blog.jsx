import React from 'react'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import NavBar2 from '../../components/navBar/NavBar2'
import './Blog.css'
import FooterB from '../FooterB/FooterB'
import { Link } from 'react-router-dom'

export default function Blog() {
    return (
        <>
            <header className="header">
                <Header></Header>
                <NavBar></NavBar>
            </header>
            <NavBar2></NavBar2>
            <div>
                <div className="blog_1">
                    <div className="blog_content">
                        <img className='blog_bg' src="/Assets/images/blog_background.jpg" />
                        <div className="blog_title">The Blog</div>
                    </div>
                    <div className="blog">
                        <div className="container">
                            <div className="row">
                                {/* Blog Content */}
                                <div className="col-lg-8">
                                    <div className="blog_post_container">
                                        {/* Blog Post */}
                                        <div className="blog_post">
                                            <div className="blog_post_image">
                                                <img style={{ width: '100%', height: '100%' }} src="/Assets/images/blog_1.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 sidebar_col">
                                    <div className="sidebar_archives">
                                        <div className="sidebar_title">Archives</div>
                                        <div className="sidebar_list">
                                            <ul>
                                                <li><Link to={''}>March 2023</Link></li>
                                                <li><Link to={''}>April 2023</Link></li>
                                                <li><Link to={''}>May 2023</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar_categories">
                                        <div className="sidebar_title">Categories</div>
                                        <div className="sidebar_list">
                                            <ul>
                                                <li><Link to={''}>Travel</Link></li>
                                                <li><Link to={''}>Exotic Destinations</Link></li>
                                                <li><Link to={''}>City Breaks</Link></li>
                                                <li><Link to={''}>Travel Tips</Link></li>
                                                <li><Link to={''}>Lifestyle & Travel</Link></li>
                                                <li><Link to={''}>City Breaks</Link></li>
                                                <li><Link to={''}>Uncategorized</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}
