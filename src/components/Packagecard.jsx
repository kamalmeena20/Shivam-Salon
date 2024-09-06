import React from 'react'

export default function Packagecard({ packagename, description }) {
    return (
        <>
            <div className="package-01">
                <h4>{packagename}</h4>
                <p>{description}</p>
                <button className="package-btn">Book Now</button>
            </div>
        </>
    )
}
