import React from 'react'
import Header from '../components/Header'
import Helpbox from '../components/homewrapper.jsx/Helpbox'
import AwardsSection from '../components/homewrapper.jsx/AwardsSection'
import Footer from '../components/Footer'
import Ourvisionwrapper from '../components/ourvision/Ourvisionwrapper'

function Ourvisionpage() {
    return (
        <>
            <Header />
            <Ourvisionwrapper />
            <Helpbox />
            <AwardsSection />
            <Footer />
        </>
    )
}

export default Ourvisionpage