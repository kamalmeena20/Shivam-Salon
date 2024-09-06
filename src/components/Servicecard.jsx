import React from 'react'
import image from '../images/aboutimg.jpg'

export default function Servicecard({ servicename, service }) {
    return (
        <>
            <div className='slide' style={{ backgroundImage: `url(${image})` }}>
                <h3 className='slide-h3' >{servicename}</h3>
                <p className='slide-p '>{service}</p>
                <button className='slide-btn'>Book Now</button>
            </div>

        </>
    )
}
