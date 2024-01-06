import React, { useEffect, useState } from 'react'
import './EditComBus.css'
import Modal from '@mui/material/Modal';
import axios from 'axios';

export default function EditComBus({ storage }) {

    const bus_id = storage
    console.log(bus_id);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [approveBusses, getApproveBusses] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/single_bus_details_api/${bus_id}`).then((response) => {
            getApproveBusses(response.data)
        })
            .catch((error) => {
                console.log(error);
            })
    }, [bus_id])

    const editedr = (event) => {
        const name = event.target.name
        const value = event.target.value
        getApproveBusses({ ...approveBusses, [name]: value })
    }

    // const updatee = () =>{

    //     axios.put(`http://127.0.0.1:8000/api/update_bus_details_api/${bus_id}`, approveBusses).then((response) => {
    //         console.log(response);
    //         window.location.reload()
    //     })
    // }

    const [file, setFile] = useState()

    const updatee = (event) => {
        event.preventDefault()
        const data = new FormData()
        if (file) {
            data.append("img", file)
            data.append('statuz', 1)
            data.append('bus_name', approveBusses.bus_name)
            data.append('bus_number', approveBusses.bus_number)
            data.append('bording_point', approveBusses.bording_point)
            data.append('droppinging_point', approveBusses.droppinging_point)
            data.append('start_time', approveBusses.start_time)
            data.append('end_time', approveBusses.end_time)
            data.append('fare', approveBusses.fare)

            axios.put(`http://127.0.0.1:8000/api/update_bus_details_api/${bus_id}`, data).then((response) => {
                window.location.reload()

            })
        }
        else {
            const details = new FormData()
            details.append('statuz', 1)
            details.append('bus_name', approveBusses.bus_name)
            details.append('bus_number', approveBusses.bus_number)
            details.append('bording_point', approveBusses.bording_point)
            details.append('droppinging_point', approveBusses.droppinging_point)
            details.append('start_time', approveBusses.start_time)
            details.append('end_time', approveBusses.end_time)
            details.append('fare', approveBusses.fare)

            axios.put(`http://127.0.0.1:8000/api/update_bus_details_api/${bus_id}`, details).then((response) => {
                window.location.reload()

            })
        }

    }

    console.log(approveBusses);

    return (
        <>
            <div>
                <div onClick={handleOpen} >Edit</div>
                <Modal
                    open={open}
                >
                    <div>
                        <div className='container'>
                            <div className='edit_main'>
                                <div className="profile-container_edt">
                                    <img className="profile-picture_edt" name='img' src={`/Bustrip/${approveBusses.img}`} />
                                    <input type="file" className='image_file_up' onChange={(event) => { setFile(event.target.files[0]) }} />
                                    {/* <input type="file" name='img' onChange={editedr}/> */}
                                    <div className="user-infott">
                                        <p>
                                            <input className='user-name-inputt' type="text" name='bus_name' value={approveBusses.bus_name} onChange={editedr} /><br />
                                            <input className='user-name-inputt' type="text" name='bus_number' value={approveBusses.bus_number} onChange={editedr} />
                                        </p>
                                        <div className="user-contact_ed">
                                            <table>
                                                <tr>
                                                    <td>
                                                        Bording Point
                                                    </td>
                                                    <td>
                                                        : <input name='bording_point' list="From" className='user-number-inputo' type="text" value={approveBusses.bording_point} onChange={editedr} />
                                                        <datalist id="From">
                                                            <option>Kozhikode</option>
                                                            <option>Ernakulam</option>
                                                            <option>Trivandrum</option>
                                                            <option>Chennai</option>
                                                            <option>Bangalore</option>
                                                            <option>Coimbatore</option>
                                                        </datalist>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Droppinging Point
                                                    </td>
                                                    <td>
                                                        : <input name='droppinging_point' list="destination" className='user-number-inputo' type="text" value={approveBusses.droppinging_point} onChange={editedr} />
                                                        <datalist id="destination">
                                                            <option>Kozhikode</option>
                                                            <option>Ernakulam</option>
                                                            <option>Trivandrum</option>
                                                            <option>Chennai</option>
                                                            <option>Bangalore</option>
                                                            <option>Coimbatore</option>
                                                        </datalist>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Start Time
                                                    </td>
                                                    <td>
                                                        : <input name='start_time' className='user-number-inputo' type="time" value={approveBusses.start_time} onChange={editedr} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        End Time
                                                    </td>
                                                    <td>
                                                        : <input name='end_time' className='user-number-inputo' type="time" value={approveBusses.end_time} onChange={editedr} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Fare
                                                    </td>
                                                    <td>
                                                        : <input name='fare' className='user-number-inputo' type="text" value={approveBusses.fare} onChange={editedr} />
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <center>
                                        <button type="submit" className="submit_buttn" onClick={updatee}>Submit</button>
                                    </center>
                                    <button className='close_button_add' onClick={handleClose}>x</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>
            </div>
        </>
    )
}
