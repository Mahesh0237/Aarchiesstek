import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Helpbox from '../components/homewrapper.jsx/Helpbox'
import AwardsSection from '../components/homewrapper.jsx/AwardsSection'
import Aboutuswrapper from '../components/aboutus/Aboutuswrapper'
import { Tabs, Text } from '@mantine/core'
import Ourvisionwrapper from '../components/ourvision/Ourvisionwrapper'
import Contactusform from '../components/Contactusform'
function Aboutuspage() {
    return (
        <>
            <Header />
            <div className='container'>
                <Tabs defaultValue="aboutus" mt={20} color="teal">
                    <Tabs.List mb={50}>
                        <Tabs.Tab value="aboutus" >
                            <Text fw={700} style={{fontSize:"18px"}}>Aboutus</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="ourvision" >
                            <Text fw={700} style={{fontSize:"18px"}}>Our Vision</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="contactus" >
                            <Text fw={700} style={{fontSize:"18px"}}>ContactUs</Text>
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="aboutus">
                        <Aboutuswrapper />
                    </Tabs.Panel>

                    <Tabs.Panel value="ourvision">
                        <Ourvisionwrapper />
                    </Tabs.Panel>
                    <Tabs.Panel value="contactus">
                       <Contactusform/>
                    </Tabs.Panel>
                </Tabs>
            </div>
            <Helpbox />
            <AwardsSection />
            <Footer />
        </>
    )
}

export default Aboutuspage