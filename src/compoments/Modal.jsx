import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';


export default function Modal({ open, onClose }) {
    const [isLoading, setIsloading] = useState(false);
    const dialog = useRef();
    const API=import.meta.env.VITE_FORM_URL;
    
    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    async function handleFormSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data);
        try {
            setIsloading(true);
            const response = await fetch(`${API}`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            setIsloading(false);

        } catch (error) {
            console.log(error.message);
        }
        onClose();
    }

    return (
        <dialog ref={dialog} onClose={onClose}>
            <div className="pop-up-form" id="pop-up-form">
                <h2 className="mb-3">Talks to us</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Work Email</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="first-name">First name</label>
                            <input type="text" name="firstName" className="form-control" id="first-name" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="last-name">Last name</label>
                            <input type="text" name="lastName" className="form-control" id="last-name" required />
                        </div>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input home-color" id="exampleCheck1" required />
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to Fyle's terms and conditions, and provide consent to send me communication.</label>
                    </div>
                    {isLoading?<button type="button" className="btn-lg contact-us-btn btn-block">Connecting.......</button>:<button type="submit" className="contact-us-btn btn-lg btn-block">Contact Us</button>}
                    
                </form>
            </div>
        </dialog>
    )
}
