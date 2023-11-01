import axios from 'axios'
import './Search.css'
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function Search() {

    const [searchDatas, getsearchDatas] = useState({})

    const [searchResult, getsearchResult] = useState([])

    // const navigate = useNavigate()

    const searchdta = (event) => {
        const name = event.target.name
        const value = event.target.value
        getsearchDatas({ ...searchDatas, [name]: value })
    }

    const SearchBtn = (event) => {
        event.preventDefault()
        axios.post("http://127.0.0.1:8000/api/search_bus", searchDatas).then((response) => {
            getsearchResult(response.data.data)
        }).catch((error) => {
        })
    }
    console.log(searchDatas);

    return (
        <>
            <div className="search">
                {/* Search Contents */}
                <div className="container fill_height">
                    <div className="row fill_height">
                        <div className="col fill_height">
                            {/* Search Panel */}
                            <div className="search_panel active">
                                <form className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                    <div className="search_item">
                                        <div>From</div>
                                        <input type="text" className="destination search_input" required="required" name='starting' onChange={searchdta} />
                                    </div>
                                    <div className="search_item">
                                        <div>destination</div>
                                        <input type="text" className="destination search_input" required="required" name='ending' onChange={searchdta} />
                                    </div>
                                    {/* <div className="search_item">
                                    <div>date of travel</div>
                                    <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                </div> */}
                                    {/* <div className="search_item">
                                    <div>check out</div>
                                    <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                </div> */}
                                    <button className="button search_button" onClick={SearchBtn}>search<span /><span /><span /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="offers">
                <div className="container">
                    <div className="row offers_items">
                        {/* Offers Item */}
                        <>
                            {
                                // searchResult[0] == null ?
                                // <div>No buses available</div>
                                // :
                                searchResult.map((data, key) => (
                                    <>
                                        <div className="col-lg-4 offers_col">
                                            <div className="offers_item">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="offers_image_container">
                                                            <div className="offers_image_background" style={{ backgroundImage: 'url(/Assets/image/gallery_1.jpg)' }} />

                                                        </div>
                                                        
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="offers_content">
                                                            <div className='offers_text'>{data.start_time} - {data.end_time}</div>
                                                            <div className='offers_text' style={{ textTransform: 'capitalize' }}>{data.bording_point} to {data.droppinging_point}</div>
                                                            <div className="offers_price">{data.fare}<span>per head</span></div>
                                                            <div className='offers_text'>Total {data.total_seats} Seats</div>
                                                            <div className='offers_text'>Available Seats : {data.available_dates}</div>
                                                            <div className="offer_name"><span className='offer_name_a'>{data.company_name}</span></div>
                                                            <div className="rating_r rating_r_4 offers_rating">
                                                                <i />
                                                                <i />
                                                                <i />
                                                                <i />
                                                                <i />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </>

                    </div>
                </div>
            </div>
        </>
    )
}
