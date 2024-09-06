import React, { useEffect } from 'react'
import image from '../images/aboutimg.jpg'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Servicecard from './Servicecard';

export default function Services() {
    // useEffect(() => {
    //     AOS.init({ duration: 2000 });
    // }, []);
    return (
        <>
            <div className='service-main'>
                <h2 className='services-h2'>Hair Treatment</h2>
                <h3 className='services-h3'>Our Services</h3>
                <div className="slider">
                    <div className="slide-track">
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                        <Servicecard servicename={"Service Name"} service={"Lorem ipsum dolor sit, amet consectetur adipisicing elit Adipisci culpa voluptatibus praesentium eos accusamus a doloribus corrupti architecto."} />
                    </div>
                </div>
            </div>
        </>
    )
}
