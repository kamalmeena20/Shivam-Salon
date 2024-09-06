import React from 'react'
import Homepage from '../components/Homepage'
import About from '../components/About'
import Services from '../components/Services'
import Package from '../components/Package'
import Choose from '../components/Choose'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Reviews from '../components/Reviews'

export default function Home() {
    return (
        <div>
            <Homepage />
            <About />
            <Services />
            <Package />
            <Choose />
            <Team />
            <Reviews />
            <Contact />
        </div>
    )
}
