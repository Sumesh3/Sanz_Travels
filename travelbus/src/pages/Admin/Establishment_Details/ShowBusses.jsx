import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import axios from 'axios';
import './ShowBusses.css'

export default function ShowBusses({ data }) {

    console.log(data);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    
    const handleClose = () => {
        setOpen(false);
        window.location.reload();
      };

    const [allBusses, getAllBusses] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/company_all_bus_api/${data}`).then((response) => {
            getAllBusses(response.data.data)
        })
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.message);
                } else if (error.request) {
                    setError('No response received');
                } else {
                    setError(error.message);
                }
            })
    }, [data])

    console.log(allBusses);

    return (
        <>
            <div>
                <div className='show_bus_modal' onClick={handleOpen} >Show</div>
                <Modal
                    open={open}
                >
                    <div>
                        <div className='container main_table_bus'>
                            <div className='edit_main'>
                                <div className="show_busses">
                                    <>
                                        {
                                            allBusses[0] != null ?
                                                <table className="table busses_table table-bordered">
                                                    <thead>
                                                        <tr className='table_bus'>
                                                            <th>Sl.No</th>
                                                            <th>Bus Name</th>
                                                            <th>Bus Number</th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        allBusses.map((data, key) => (
                                                            <>

                                                                <>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td >{key + 1}</td>
                                                                            <td>{data.bus_name}</td>
                                                                            <td>{data.bus_number}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </>
                                                            </>
                                                        ))
                                                    }
                                                </table >
                                                :
                                                error
                                        }

                                    </>
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
