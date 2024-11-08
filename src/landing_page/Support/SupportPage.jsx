import React, { useEffect } from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';
import Navbar from '../Navbar'
import Footer from '../Footer'

function SupportPage() {

    useEffect(() => {
        document.title = 'Support: Help is near, to calm your trading fear!'
    })

    return ( 
        <>
        <Navbar/>
        <Hero/>
        <CreateTicket/>
        <Footer/>
        </>
     );
}

export default SupportPage;