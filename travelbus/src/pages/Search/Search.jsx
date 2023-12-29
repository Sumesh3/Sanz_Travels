import axios from 'axios'
import './Search.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search() {

    let data = localStorage.getItem("user_id")

    const [searchDatas, getsearchDatas] = useState({})
    const [searchDatasy, getsearchDatasy] = useState(
        true
    )

    const [searchResult, getsearchResult] = useState([])

    const navigate = useNavigate()

    const searchdta = (event) => {
        const name = event.target.name
        const value = event.target.value
        getsearchDatas({ ...searchDatas, [name]: value })
    }

    const SearchBtn = (event) => {
        event.preventDefault()
        axios.post("http://127.0.0.1:8000/api/search_bus", searchDatas).then((response) => {
            getsearchDatasy(false)
            getsearchResult(response.data.data)
        }).catch((error) => {
        })
    }
    console.log(searchDatas);

    const book = (busid) => {
        sessionStorage.setItem('busid', busid)
        data ?
            navigate('/SeatChart')
            :
            navigate('/login')
        window.location.reload()
    }

    const [searchResultFilter, getSearchResultFilter] = useState([])

    useEffect(() => {
        const data = searchResult.filter((data, key) => {
            return data.statuz === '2'
        })
        getSearchResultFilter(data)
    }, [searchResult])

    // const aaa = (e) => {
    //     e.target.src = '/Bustrip/media/images/istockphoto-540124958-1024x1024.jpg'
    // };

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
                                        <input className="destination search_input" list="From" placeholder="Select the recommended option..." name='starting' onChange={searchdta}/>
                                        <datalist id="From">
                                            <option>Kozhikode</option>
                                            <option>Ernakulam</option>
                                            <option>Trivandrum</option>
                                            <option>Chennai</option>
                                            <option>Bangalore</option>
                                            <option>Coimbatore</option>
                                        </datalist>
                                        {/* <input type="text" className="destination search_input" required="required" name='starting' onChange={searchdta} /> */}
                                    </div>
                                    <div className="search_item">
                                        <div>destination</div>
                                        <input className="destination search_input" list="destination" placeholder="Select the recommended option..." name='ending' onChange={searchdta}/>
                                        <datalist id="destination">
                                        <option>Kozhikode</option>
                                            <option>Ernakulam</option>
                                            <option>Trivandrum</option>
                                            <option>Chennai</option>
                                            <option>Bangalore</option>
                                            <option>Coimbatore</option>
                                        </datalist>
                                        {/* <input type="text" className="destination search_input" required="required" name='ending' onChange={searchdta} /> */}
                                    </div>

                                    <button className="button search_button" onClick={SearchBtn}>search<span /><span /><span /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <>
                {
                    searchDatasy == true ?
                        ''
                        :
                        <>
                            <div className="offers">
                                <div className="container">
                                    <div className="row offers_items" >
                                        {/* Offers Item */}
                                        {
                                            searchResult[0] == null ?
                                                <div className='not_available'>Not   available</div>
                                                :
                                                searchResultFilter.map((data, key) => (
                                                    <>
                                                        <div className="col-lg-4 offers_col">
                                                            <div className="offers_item">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="offers_image_container">
                                                                            <img className="offers_image_background" src={`/Bustrip${data.img}`} alt="" onError={(e) => { e.target.src = '/Bustrip/media/images/istockphoto-540124958-1024x1024.jpg' }} />
                                                                            {/* <div className="offers_image_background" style={{ backgroundImage: `url(/Bustrip${data.img})`}} onError={aaa}/> */}
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

                                                                            <button className='btnbooknow' onClick={() => { book(data.id) }}>Book Now</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </>
        </>
    )
}
