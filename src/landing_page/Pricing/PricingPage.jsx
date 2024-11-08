import React, { useEffect } from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'

function PricingPage() {

    useEffect(() => {
        document.title = 'Pricing: Competitive rates, no hidden weights!'
    })

    return ( 
        <>
        <Navbar/>
        <Hero/>
        <OpenAccount/>
        <Brokerage/>
        <Footer/>
        </>
     );
}

export default PricingPage;