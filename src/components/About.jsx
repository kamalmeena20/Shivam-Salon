import React, { useEffect } from 'react'
import image from '../images/about01.jpg'
import flower from '../images/flower.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className='about-main' data-aos="slide-right">
                <div className="about-left-box">
                    <img className='about-img' src={image} />
                </div>
                <div className='about-right-box'>
                    <img className='flower-img' src={flower} />
                    <h2 className='about-h2'>Our Story</h2>
                    <h3 className='about-h3'>About Shivam Salon</h3>
                    <p className='about-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo adipisci,
                        nulla dolorem quam, perspiciatis, repellendus id architecto quasi culp Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo adipisci,
                        nulla dolorem quam, perspiciatis, repellendus id architecto quasi culp Lorem ipsum dolor sit amet</p>
                    <h4 className='harsh-h4'>.Harsh</h4>
                    <button className='about-button'>Get Started →</button>
                </div>
            </div>
        </>
    )
}
