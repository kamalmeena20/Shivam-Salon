import React from 'react'
import logoimg from '../images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';    

export default function Contact() {
    return (
        <>
            <div className="contact-main">
                <img className='contact-logo' src={logoimg} />
                <h2 className='contact-h2'>Thanks for</h2>
                <h1 className='contact-h1'>TRUSTING US</h1>
                <div className="contact-sec-01">
                    <h3>Shivam</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat voluptatibus voluptatum mollitia pariatur, est non quaerat
                        dolorem harum!</p>
                    {/* <div className="contact-icons">
                        <a href="#"><FacebookIcon /></a>
                        <a href="#"><InstagramIcon /></a>
                        <a href="#"><TwitterIcon /></a>
                        <a href="#"><TelegramIcon /></a>
                    </div> */}
                </div>
                <div className="contact-sec-02">
                    <h3>Working Hours</h3>
                    <h6>Mon - Sat</h6>
                    <p>9:00AM - 11:00PM</p>
                    <h6>Sunday</h6>
                    <p>We're closed</p>
                </div>

                <div className="contact-sec-03">
                    <h3>Contact us</h3>
                    <p className='c-01'><LocationOnIcon sx={{ color: '#693D14' }} />Shop No.1,Jethibai Road, Government Quarters, Diu - 362520, (Gujrat)</p>
                    <p className='c-02'><MailIcon sx={{ color: '#693D14' }} /> shivamunisexsalon@gmail.com</p>
                    <p className='c-03'><PhoneIcon sx={{ color: '#693D14' }} />+91 6356231659</p>
                    <div className="contact-icons">
                        <a href="#"><FacebookIcon /></a>
                        <a href="#"><InstagramIcon /></a>
                        <a href="#"><TwitterIcon /></a>
                        <a href="#"><TelegramIcon /></a>
                    </div>

                </div>
                <div className="contact-sec-04">
                    <p className='p-01'>Copyright @Shivam. All Right reserved</p>
                    <p className='p-02'>Designed By @ Radhe Meena</p>
                </div>
            </div>
        </>
    )
}


