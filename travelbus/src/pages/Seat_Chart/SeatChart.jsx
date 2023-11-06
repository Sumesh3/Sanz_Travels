import React, { useEffect, useState } from 'react'
import './SeatChart.css'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import NavBar2 from '../../components/navBar/NavBar2'
import FooterB from '../FooterB/FooterB'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function SeatChart() {

    const navigate = useNavigate()

    const [seat, setSeat] = useState(40)

    const [count, setcount] = useState([])

    console.log(count);

    console.log(count);

    const decrement = (event) => {
        if (event.target.checked) {
            const name = event.target.name
            setcount([...count, event.target.name])
            setSeat(seat - 1)
        }
        else {
            const name = event.target.name
            const fdata = count.filter((data) => {
                return data != name

            })
            setcount(fdata)
            setSeat(seat + 1)
        }
    }

    const [busDetails, getBusrDetails] = useState([])

    const busid = sessionStorage.getItem('busid')
    const login_id = localStorage.getItem('login_id')


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/single_bus_details_api/${busid}`).then((response) => {
            getBusrDetails(response.data)
            console.log(response.data);
        })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    console.log(busDetails);

    const total_fare = (count.length) * (busDetails.fare)

    const [date, setDate] = useState({})

    const tdate = (event) => {
        const name = event.target.name
        const value = event.target.value
        setDate({ ...date, [name]: value })
    }
    console.log(date.today);

    const Proceed = (event) => {
        // event.preventDefault()
        const data = {
            busid: busid,
            login_id: login_id,
            no_of_seat: count.length,
            seat_no: count,
            total_fare: total_fare,
            today: date.today
        }
        console.log(data);
        axios.post("http://127.0.0.1:8000/api/booked_seat_api", data).then((response) => {
            navigate('/')
        }).catch((error) => {
        })
    }

    const [bookedSeat, getBookedSeat] = useState([])


    useEffect(() => {
        const data ={
            today:String(date.today)
        }
        axios.get(`http://127.0.0.1:8000/api/view_seat_book_api/${busid}`,data).then((response) => {
            getBookedSeat(response.data.data)
        })
            .catch((error) => {
                console.log(error);
            })
    }, [bookedSeat])

    console.log(bookedSeat);

    return (
        <>
            <div className='log_hed'>
                <Header></Header>
            </div>

            <div className='log_nav'>
                <NavBar></NavBar>
                <NavBar2></NavBar2>
            </div>
            <div className='row seat_outer'>
                <div className="container plane col-lg-6">
                    <h1 className="seat_head">Select Your Seat</h1>
                    <div className="fuselage">
                    </div>
                    <ol className="cabin fuselage">
                        <li className="row row--1">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" id="1A" name='1A' onClick={decrement} />
                                    <label htmlFor="1A">1A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled id="1B" onClick={decrement} />
                                    <label htmlFor="1B">Occupied</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="1C" name='1C' onClick={decrement} />
                                    <label htmlFor="1C">1C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="1D" name='1D' onClick={decrement} />
                                    <label htmlFor="1D">1D</label>
                                </li>
                            </ol>
                        </li>
                        <li className="row row--2">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" id="2A" name='2A' onClick={decrement} />
                                    <label htmlFor="2A">2A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="2B" name='2B' onClick={decrement} />
                                    <label htmlFor="2B">2B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="2C" name='2C' onClick={decrement} />
                                    <label htmlFor="2C">2C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="2D" name='2D' onClick={decrement} />
                                    <label htmlFor="2D">2D</label>
                                </li>
                            </ol>
                        </li>
                        <li className="row row--3">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" id="3A" name='3A' onClick={decrement} />
                                    <label htmlFor="3A">3A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="3B" name='3B' onClick={decrement} />
                                    <label htmlFor="3B">3B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="3C" name='3C' onClick={decrement} />
                                    <label htmlFor="3C">3C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="3D" name='3D' onClick={decrement} />
                                    <label htmlFor="3D">3D</label>
                                </li>
                            </ol>
                        </li>
                        <li className="row row--4">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" id="4A" name='4A' onClick={decrement} />
                                    <label htmlFor="4A">4A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="4B" name='4B' onClick={decrement} />
                                    <label htmlFor="4B">4B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="4C" name='4C' onClick={decrement} />
                                    <label htmlFor="4C">4C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="4D" name='4D' onClick={decrement} />
                                    <label htmlFor="4D">4D</label>
                                </li>
                            </ol>
                        </li>
                        <li className="row row--5">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" id="5A" name='5A' onClick={decrement} />
                                    <label htmlFor="5A">5A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="5B" name='5B' onClick={decrement} />
                                    <label htmlFor="5B">5B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="5C" name='5C' onClick={decrement} />
                                    <label htmlFor="5C">5C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="5D" name='5D' onClick={decrement} />
                                    <label htmlFor="5D">5D</label>
                                </li>
                            </ol>
                        </li>
                        <li className="row row--6">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" id="6A" name='6A' onClick={decrement} />
                                    <label htmlFor="6A">6A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="6B" name='6B' onClick={decrement} />
                                    <label htmlFor="6B">6B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="6C" name='6C' onClick={decrement} />
                                    <label htmlFor="6C">6C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="6D" name='6D' onClick={decrement} />
                                    <label htmlFor="6D">6D</label>
                                </li>
                            </ol>
                        </li>
                        <li className="row row--7">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" id="7A" name='7A' onClick={decrement} />
                                    <label htmlFor="7A">7A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="7B" name='7B' onClick={decrement} />
                                    <label htmlFor="7B">7B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="7C" name='7C' onClick={decrement} />
                                    <label htmlFor="7C">7C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="7D" name='7D' onClick={decrement} />
                                    <label htmlFor="7D">7D</label>
                                </li>
                            </ol>
                        </li>
                        <li className="row row--8">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" id="8A" name='8A' onClick={decrement} />
                                    <label htmlFor="8A">8A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="8B" name='8B' onClick={decrement} />
                                    <label htmlFor="8B">8B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="8C" name='8C' onClick={decrement} />
                                    <label htmlFor="8C">8C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="8D" name='8D' onClick={decrement} />
                                    <label htmlFor="8D">8D</label>
                                </li>
                            </ol>
                        </li>
                        <li className="row row--9">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" id="9A" name='9A' onClick={decrement} />
                                    <label htmlFor="9A">9A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="9B" name='9B' onClick={decrement} />
                                    <label htmlFor="9B">9B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="9C" name='9C' onClick={decrement} />
                                    <label htmlFor="9C">9C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="9D" name='9D' onClick={decrement} />
                                    <label htmlFor="9D">9D</label>
                                </li>
                            </ol>
                        </li>
                        <li className="row row--10">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" id="10A" name='10A' onClick={decrement} />
                                    <label htmlFor="10A">10A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="10B" name='10B' onClick={decrement} />
                                    <label htmlFor="10B">10B</label>
                                </li>
                                <li className="seat seatx">
                                    <input type="checkbox" id="10C" name='10C' onClick={decrement} />
                                    <label htmlFor="10C">10C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="10D" name='10D' onClick={decrement} />
                                    <label htmlFor="10D">10D</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" id="10E" name='10E' onClick={decrement} />
                                    <label htmlFor="10E">10E</label>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
                <div className='seat_booking col-lg-6'>
                    <h3>Booking Details</h3>
                    <p>Date : <input type="date" name='today' onChange={tdate} /> </p>
                    <p>Total Seats : {busDetails.total_seats}</p>
                    <p>Available Seats : {seat}</p>
                    <p>No. of booked seates : {count.length}</p>
                    <p>One Seat Fare : {busDetails.fare}</p>
                    <p>Total Fare : {total_fare}</p>
                    <button onClick={Proceed} className='continue_button'>Continue Booking</button>
                </div>
            </div>

            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>
        </>
    )
}
