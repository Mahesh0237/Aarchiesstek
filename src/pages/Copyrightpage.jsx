import React from 'react'
import Header from '../components/Header'
import Helpbox from '../components/homewrapper.jsx/Helpbox'
import Footer from '../components/Footer'
import Copyrightwrapper from '../components/Copyrightwrapper'
import copyright from '../assets/copyright.jpg'
function Copyrightpage() {
    return (
        <>
            <Header />
            <div style={{ marginTop: "70px" }}>
                <img src={copyright} width="100%" height="300px" />
                <Copyrightwrapper />
            </div>
            <Helpbox />
            <Footer />
        </>
    )
}

export default Copyrightpage