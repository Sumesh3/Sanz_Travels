import React, { useEffect, useState } from 'react'
import './SeatChart.css'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import NavBar2 from '../../components/navBar/NavBar2'
import FooterB from '../FooterB/FooterB'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SeatChart() {

    const navigate = useNavigate()

    const [seat, setSeat] = useState(40)

    const [count, setcount] = useState([])

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

    const seatnos = count.join(',');

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

    const total_fare = (count.length) * (busDetails.fare)

    const [date, setDate] = useState(0)

    const tdate = (event) => {
        const name = event.target.name
        const value = event.target.value
        setDate({ ...date, [name]: value })
    }

    const Proceed = (event) => {

        const amound = {
            grandTotal: total_fare
        }

        axios.post("http://127.0.0.1:8000/api/generateqr_api", amound).then((response) => {

            sessionStorage.setItem("no_of_seat", count.length)
            sessionStorage.setItem("seat_no", [count])
            sessionStorage.setItem("total_fare", total_fare)
            sessionStorage.setItem("today", date.today)

            navigate('/passenger_details')
            window.location.reload()
        }).catch((error) => {
        })
    }

    const [bookedSeat, getBookedSeat] = useState([])


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/view_seat_book_api/${busid}/${date.today}`).then((response) => {
            console.log(response);
            getBookedSeat(response.data.data)
            // window.location.reload()
        })
            .catch((error) => {
                console.log(error);
            })
    }, [date])

    const [seatNo, getseatNo] = useState([])

    const seatObject = {};

    seatNo.forEach(item => {
        seatObject[item] = true;
    });

    useEffect(() => {
        let details_seat = []
        bookedSeat.map((data, key) => (
            JSON.parse(data.seat_no.replace(/'/g, "\""))
                .map((number) => (
                    details_seat.push((number))
                ))
        ))
        getseatNo(details_seat)
    }, [bookedSeat])

    console.log(date);
    console.log(count);

    const [selectDate, setSelectDate] = useState()
    console.log(selectDate);

    console.log(count.length);

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const [minDate, setMinDate] = useState(getTodayDate());


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
                    {date == 0 ?
                        <p className='selectdatep'>{selectDate}</p>
                        :
                        ''
                    }
                    {
                        date == 0 ?
                            <ol className="cabin fuselage">
                                <li className="row row--1">
                                    <ol className="seats">
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">A1</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled />
                                            <label>Occupied</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">C1</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">D1</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats">
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">A2</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">B2</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">C2</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">D2</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">A3</label>
                                        </li>
                                        <li className="seath">
                                            <input type="checkbox" id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">B3</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">C3</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">D3</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">A4</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">B4</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">C4</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">D4</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">A5</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">B5</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">C5</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">D5</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">A6</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">B6</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">C6</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">D6</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">A7</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">B7</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">C7</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">D7</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">A8</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">B8</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">C8</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">D8</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--9">
                                    <ol className="seats" type="A">
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">A9</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">B9</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">C9</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">D9</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--10">
                                    <ol className="seats" type="A">
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">A10</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">B10</label>
                                        </li>
                                        <li className="seath seatx">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">E10</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">C10</label>
                                        </li>
                                        <li className="seath">
                                            <input type="button" className='hiddenb' id="11A" onClick={() => { setSelectDate('Choose Date First') }} />
                                            <label htmlFor="11A">D10</label>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                            :



                            <ol className="cabin fuselage">
                                <li className="row row--1">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="1A" disabled={seatObject.A1 ? "true" : ''} name='A1' onClick={decrement} />
                                            <label htmlFor="1A">A1</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled id="1B" onClick={decrement} />
                                            <label htmlFor="1B">Occupied</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="1C" name='C1' disabled={seatObject.C1 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="1C">C1</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="1D" name='D1' disabled={seatObject.D1 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="1D">D1</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="2A" name='A2' disabled={seatObject.A2 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="2A">A2</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="2B" name='B2' disabled={seatObject.B2 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="2B">B2</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="2C" name='C2' disabled={seatObject.C2 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="2C">C2</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="2D" name='D2' disabled={seatObject.D2 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="2D">D2</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="3A" name='A3' disabled={seatObject.A3 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="3A">A3</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="3B" name='B3' disabled={seatObject.B3 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="3B">B3</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="3C" name='C3' disabled={seatObject.C3 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="3C">C3</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="3D" name='D3' disabled={seatObject.D3 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="3D">D3</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="4A" name='A4' disabled={seatObject.A4 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="4A">A4</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="4B" name='B4' disabled={seatObject.B4 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="4B">B4</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="4C" name='C4' disabled={seatObject.C4 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="4C">C4</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="4D" name='D4' disabled={seatObject.D4 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="4D">D4</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="5A" name='A5' disabled={seatObject.A5 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="5A">A5</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="5B" name='B5' disabled={seatObject.B5 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="5B">B5</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="5C" name='C5' disabled={seatObject.C5 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="5C">C5</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="5D" name='D5' disabled={seatObject.D5 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="5D">D5</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="6A" name='A6' disabled={seatObject.A6 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="6A">A6</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="6B" name='B6' disabled={seatObject.B6 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="6B">B6</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="6C" name='C6' disabled={seatObject.C6 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="6C">C6</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="6D" name='D6' disabled={seatObject.D6 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="6D">D6</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="7A" name='A7' disabled={seatObject.A7 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="7A">A7</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="7B" name='B7' disabled={seatObject.B7 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="7B">B7</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="7C" name='C7' disabled={seatObject.C7 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="7C">C7</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="7D" name='D7' disabled={seatObject.D7 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="7D">D7</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="8A" name='A8' disabled={seatObject.A8 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="8A">A8</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="8B" name='B8' disabled={seatObject.B8 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="8B">B8</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="8C" name='C8' disabled={seatObject.C8 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="8C">C8</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="8D" name='D8' disabled={seatObject.D8 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="8D">D8</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--9">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="9A" name='A9' disabled={seatObject.A9 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="9A">A9</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="9B" name='B9' disabled={seatObject.B9 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="9B">B9</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="9C" name='C9' disabled={seatObject.C9 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="9C">C9</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="9D" name='D9' disabled={seatObject.D9 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="9D">D9</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--10">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="10A" name='A10' disabled={seatObject.A10 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="10A">A10</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="10B" name='B10' disabled={seatObject.B10 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="10B">B10</label>
                                        </li>
                                        <li className="seat seatx">
                                            <input type="checkbox" id="10C" name='E10' disabled={seatObject.E10 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="10C">E10</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="10D" name='C10' disabled={seatObject.C10 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="10D">C10</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="10E" name='D10' disabled={seatObject.D10 ? "true" : ''} onClick={decrement} />
                                            <label htmlFor="10E">D10</label>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                    }
                </div>
                <div className='seat_booking col-lg-6'>
                    <h3>Booking Details</h3><br />
                    <table className='seat_table'>
                        <tbody>
                            <tr>
                                <td className='seat_td'>
                                    <tr>
                                        <td>Date</td>
                                        <td>:  <input type="date" name='today' onChange={tdate} min={minDate} /></td>
                                    </tr>
                                    <tr>
                                        <td>Total Seats</td>
                                        <td>: {busDetails.total_seats}</td>
                                    </tr>
                                    <tr>
                                        <td>Available Seats </td>
                                        <td>: {seat}</td>
                                    </tr>
                                    <tr>
                                        <td>No. of booked seates </td>
                                        <td>: {count.length}</td>
                                    </tr>
                                    <tr>
                                        <td>Seat nos. </td>
                                        <td>: {seatnos}</td>
                                    </tr>
                                    <tr>
                                        <td>One Seat Fare </td>
                                        <td>: {busDetails.fare}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Fare </td>
                                        <td>: {total_fare}</td>
                                    </tr>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={Proceed} className='continue_button'>PROCEED TO BOOK</button>
                </div>
            </div>
            <div className='reg_foot'>
                <FooterB></FooterB>
            </div>



        </>
    )
}
