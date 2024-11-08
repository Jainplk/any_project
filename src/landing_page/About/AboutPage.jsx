import React, { useEffect } from 'react';
import Hero from './Hero';
import History from './History';
import Navbar from '../Navbar'
import Footer from '../Footer'

function AboutPage() {

    useEffect(() => {
        document.title = 'About your Trading Companion!'
    })

    return ( 
        <>
        <Navbar/>
        <Hero/>
        <History/>
        <Footer/>
        </>
     );
}

export default AboutPage;