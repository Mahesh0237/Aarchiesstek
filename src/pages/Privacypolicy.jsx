import React from 'react'
import Header from '../components/Header'
import Helpbox from '../components/homewrapper.jsx/Helpbox'
import Footer from '../components/Footer'
import Privacypolicywrapper from '../components/Privacypolicywrapper'
import privacypolicy from '../assets/privacypolicy.jpg'
function Privacypolicy() {
    return (
        <>
            <Header />
            <div style={{ marginTop: "70px" }}>
                <img src={privacypolicy} width="100%" height="300px" />
                <Privacypolicywrapper />
            </div>
            <Helpbox />
            <Footer />
        </>
    )
}

export default Privacypolicy