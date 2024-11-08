import React, { useEffect } from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar'
import Footer from '../Footer'


function HomePage() {

    useEffect(() => {
        document.title = 'Zerodha-Front: Invest in everything!'
    })

    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            <Footer/>
        </>
    );
}

export default HomePage;