import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";



function Footer() {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-md-4 my-container-1 fw-bold'>
                    <h2 className='mb-5'>Browse Tours By Activity</h2>
                    <p>Outdoor Activites</p>
                    <p>Cultural & Thematic Tours</p>
                    <p>Family Friendly</p>
                    <p>Hooliday & Seasonal Tours</p>
                </div>

                <div className='col-12 col-md-4 my-container-2 fw-bold'>
                    <p>City Tours</p>
                    <p>Indulgence & Luxury Tours</p>
                    <p>Relaxation Tours</p>
                    <p>Wild & Adventure Tours</p>
                </div>

                <div className='col-12 col-md-3 my-container-3'>
                    <h2 className='mb-4'>Newsletter</h2>
                    <p>Subscripe for updates & promotions</p>
                    <form className='mt-5'>
                        <input type="text" className='p-2 rounded-3' placeholder='Enter a valid email address' />
                        <button className='btn ms-3'>Submit</button>
                    </form> <br />
                    <div className='myIcons'>
                        <FaFacebookF className='me-4 fs-4' />
                        <FaTwitter className='me-4 fs-4' />
                        <FaInstagram className='me-4 fs-4' />
                        <FaYoutube className='me-4 fs-4' />
                        <FaLinkedinIn className='me-4 fs-4' />
                        <FaGooglePlusG className='me-4 fs-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer