import React from 'react'
import Header from '../components/Header'
import Helpbox from '../components/homewrapper.jsx/Helpbox'
import AwardsSection from '../components/homewrapper.jsx/AwardsSection'
import Footer from '../components/Footer'
import Careerswrapper from '../components/careers/Careerswrapper'

function Careerspage() {
    return (
        <>
            <Header />
            <Careerswrapper />
            <Helpbox />
            <AwardsSection />
            <Footer />
        </>
    )
}

export default Careerspage