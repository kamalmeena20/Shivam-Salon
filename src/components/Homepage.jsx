import React, { useEffect, useState } from 'react'
import logoimg from '../images/logo.png'
import gridimage from '../images/about01.jpg'
import MenuIcon from '@mui/icons-material/Menu';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [classs, setclass] = useState("d-none")
    const [show, setshow] = useState(false)
    const handleclick = () => {
        if (!show) {
            setclass(" menubar position-absolute top-0 mt-5 end-0 text-start bg bg-white show")
            setshow(true)
        }
        else {
            setclass("menubar position-absolute top-0 mt-5 end-0 p-0 text-start bg bg-white hide")
            setshow(false)
        }
    }
    return (
        <div className='main-box'>
            <div className="left-box" data-aos="slide-right">
                <a href="#" class="nav-logo" data-aos="slide-left">ShIvam</a>
                <h4 className='home-h4' data-aos="slide-left">_____unisex salon</h4>


                <div className='right-content'>
                    <h2 className='right-h2' data-aos="slide-right">Hair Treatment</h2>
                    <h1 className='right-h1' data-aos="slide-left">SALON</h1>
                    <p className='right-p' data-aos="slide-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo adipisci,
                        nulla dolorem quam, perspiciatis, repellendus id architecto quasi culp
                    </p>
                    <button className='right-button' >Book Now</button>

                </div>

            </div>

            <div className="right-box" data-aos="slide-left">
                <nav class="navbar">
                    <a href="#" data-aos="slide-up">Home</a>
                    <a href="#" data-aos="slide-down">Services</a>
                    <a href="#" data-aos="slide-up">Package</a>
                    <a href="#" data-aos="slide-down">Team</a>
                    <a href="#" data-aos="slide-up">Review</a>
                    <button className='nav-button' data-aos="fade-down">Contact</button>
                </nav>
                <a className='hamburgur ' onClick={() => handleclick()}><MenuIcon /></a>
                <div class={classs}>
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Packages</a>
                    <a href="#">Team</a>
                    <a href="#">Review</a>
                    {/* <hr className='m-0' /> */}
                </div>
                <div className="box">
                    <section><img src={gridimage} width={400} height={400} alt="" /></section>
                    <section><img src={gridimage} width={400} height={400} alt="" /></section>
                    <section><img src={gridimage} width={400} height={400} alt="" /></section>
                    <section><img src={gridimage} width={400} height={400} alt="" /></section>
                </div>
            </div>

        </div>

    )
}
