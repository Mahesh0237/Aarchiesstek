import React from 'react'
import Header from '../components/Header'
import Helpbox from '../components/homewrapper.jsx/Helpbox'
import AwardsSection from '../components/homewrapper.jsx/AwardsSection'
import Footer from '../components/Footer'
import Contactusform from '../components/Contactusform'
import contactus from '../assets/contactusbanner.jpg'
function Contactuspage() {
    return (
        <>
            <Header />
            <div>
                <img src={contactus} width="100%" height="400px"/>
                <Contactusform />
            </div>
            <Helpbox />
            <AwardsSection />
            <Footer />
        </>
    )
}

export default Contactuspage