import React from 'react'
import Modal from './Modal'
import { useState } from 'react'

export default function Home() {
    const [open,setOpen]=useState(false);
    function handleModalOpen(){
        setOpen(true);
    }
    function handleModalClose(){
        setOpen(false);
    }

    return (
        <>
            {open&&<Modal open={open} onClose={handleModalClose}/>}
            <div className="home">
                <div className="row">
                    <div className="col-lg-6 home-content">
                        <p className="h5 first-title-color">AWARD WINNING</p>
                        <h1 className="display-4 font-weight-bold mb-5 mt-3">DIGITAL MARKETING AGENCY</h1>
                        <p className="mb-5">
                            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum
                        </p>
                        <button className="contact-us-btn" onClick={handleModalOpen}>CONTACT US</button>
                    </div>
                    <div className="col-lg-6 home-image-container">
                        <img src="images/home-image.png" />
                    </div>
                </div>
            </div>
        </>
    )
}
