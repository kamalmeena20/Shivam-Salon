import React from 'react'
import teamimage1 from '../images/about01.jpg'

export default function Team() {
    return (
        <>
            <div className="team-main">
                <div className="d-flex1">
                    <h3 className='team-h3'>Meet our</h3>
                    <h2 className='team-h2'>TEAM</h2>
                </div>
                <div className="d-flex2">
                    <div className="sub-d-flex-01">
                        <img src={teamimage1} />
                        <h3 className='name-h3'>Member 01</h3>
                    </div>
                    <div className="sub-d-flex-02">
                        <img src={teamimage1} />
                        <h3 className='name-h3'>Member 02</h3>
                    </div>
                    <div className="sub-d-flex-03">
                        <img src={teamimage1} />
                        <h3 className='name-h3'>Member 03</h3>
                    </div>
                    <div className="sub-d-flex-04">
                        <img src={teamimage1} />
                        <h3 className='name-h3'>Member 04</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
