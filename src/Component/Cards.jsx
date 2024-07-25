import React from 'react'
import img1 from '../imgs/img-1.jpeg';
import img2 from '../imgs/img-2.jpeg';
import img3 from '../imgs/img-3.jpeg';
import img4 from '../imgs/img-4.jpeg';
import img5 from '../imgs/img-5.jpeg';
import img6 from '../imgs/img-6.jpeg';
import { FaLocationDot } from "react-icons/fa6";


function Cards() {
    return (
        <>
            <div className='container my-container-two'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1 className='text-color'>Start Your Jorney</h1>
                        <p className='text-color fst-italic'>The most searched countries in March</p>
                    </div>
                </div>

                <div className='cards'>
                    <div className='row d-flex justify-content-around'>
                        <div className='col-12 col-md-6 col-xl-4' style={{ width: 375 }}>
                            <img src={img1} style={{ height: 400 }} className='img-fluid mb-5 mt-5' alt='Image1' />
                            <div className='icon1'>
                                <FaLocationDot />
                                <p className='paragraf'>Santorini, Greece</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-xl-4' style={{ width: 375 }}>
                            <img src={img2} style={{ height: 400 }} className='img-fluid mb-5 mt-5' alt="Image2" />
                            <div className='icon2'>
                                <FaLocationDot />
                                <p className='paragraf'>Vernazza, Italy</p>
                            </div>

                        </div>
                        <div className='col-12 col-md-6 col-xl-4' style={{ width: 375 }}>
                            <img src={img3} style={{ height: 400, }} className='img-fluid mb-5 mt-5' alt="Image3" />
                            <div className='icon3'>
                                <FaLocationDot />
                                <p className='paragraf'>San Francisco</p>
                            </div>

                        </div>
                        <div className='col-12 col-md-6 col-xl-4 mt-5' style={{ width: 375 }}>
                            <img src={img4} style={{ height: 400 }} className='img-fluid' alt="Image4" />
                            <div className='icon4'>
                                <FaLocationDot />
                                <p className='paragraf2'>Navagio, Greence</p>
                            </div>

                        </div>
                        <div className='col-12 col-md-6 col-xl-4 mt-5' style={{ width: 375 }}>
                            <img src={img5} style={{ height: 400 }} className='img-fluid' alt="Image5" />
                            <div className='icon5'>
                                <FaLocationDot />
                                <p className='paragraf2'>Ao Nang, Thailand</p>
                            </div>

                        </div>
                        <div className='col-12 col-md-6 col-xl-4 mt-5' style={{ width: 375 }}>
                            <img src={img6} style={{ height: 400 }} className='img-fluid' alt="Image6" />
                            <div className='icon6'>
                                <FaLocationDot />
                                <p className='paragraf2'>Phi Phi Islands, Thailand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards