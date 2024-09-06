import React from 'react'
import packimg from '../images/package.jpg'
import Packagecard from './Packagecard'

export default function Package() {
    return (
        <>
            <div className="main-package">
                <div className="package-right">
                    <h2 className="package-h2">About Salon</h2>
                    <h3 className="package-h3">PACKAGE</h3>
                </div>


                <div className="package-left">
                    <Packagecard packagename={"Hair Treatment Package 1"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                    <Packagecard packagename={"Hair Treatment Package 2"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                    <Packagecard packagename={"Hair Treatment Package 3"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                    <Packagecard packagename={"Hair Treatment Package 4"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                </div>
                <div className="bottom"> <img className='package-img' src={packimg} /></div>
            </div>
        </>
    )
}
