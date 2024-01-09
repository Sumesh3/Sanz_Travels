import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const [input, getInputs] = useState({})

    const addDetails = (event) => {
        const name = event.target.name
        const value = event.target.value
        getInputs({ ...input, [name]: value })
    }
    console.log(input);

    const navigate = useNavigate()

    const submit = (event) => {
        // event.preventDefault()
        axios.post("http://127.0.0.1:8000/api/enquiry_message_api", input).then((response) => {
            toast.success(response.data.message, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }).catch((error) => {
            toast.error(error.response.data.message, {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
    }


    return (
        <>
            <ToastContainer />
            <div className="contact">
                <div className="contact_background" style={{ backgroundImage: 'url(/Assets/images/contact.png)' }} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact_image">
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact_form_container">
                                <div className="contact_title">get in touch</div>
                                <form className="contact_form">
                                    <input type="text" name='name' id="contact_form_name" className="contact_form_name input_field" placeholder="Name" required="required" data-error="Name is required." onChange={addDetails} />
                                    <input type="text" name='email' id="contact_form_email" className="contact_form_email input_field" placeholder="E-mail" required="required" data-error="Email is required." onChange={addDetails} />
                                    <input type="text" name='subject' id="contact_form_subject" className="contact_form_subject input_field" placeholder="Subject" required="required" data-error="Subject is required." onChange={addDetails} />
                                    <textarea id="contact_form_message" className="text_field contact_form_message" name="message" rows={4} placeholder="Message" required="required" data-error="Please, write us a message." defaultValue={""} onChange={addDetails} />
                                    <button type="submit" onClick={submit} id="form_submit_button" className="form_submit_button button">send message<span /><span /><span /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
