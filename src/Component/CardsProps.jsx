import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

function CardsProps(props) {
    return (
        <div>
            <div className='col-12 col-md-6 col-xl-4' style={{ width: 375 }}>
                <img src={props.img} style={{ height: 400, }} className='img-fluid mb-5 mt-5' alt="Image3" />
                <div className='icon3'>
                    <FaLocationDot />
                    <p className='paragraf'>{props.name}</p>
                </div>
            </div>
        </div>
    )
}

export default CardsProps