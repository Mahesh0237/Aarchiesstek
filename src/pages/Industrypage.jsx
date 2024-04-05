import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Helpbox from '../components/homewrapper.jsx/Helpbox'
import AwardsSection from '../components/homewrapper.jsx/AwardsSection'
import { Tabs, Text } from '@mantine/core'
import Bankingandfinancewrapper from '../components/industry/Bankingandfinancewrapper'
import Manufacturingwrapper from '../components/industry/Manufacturingwrapper'
import Healthcarewrapper from '../components/industry/Healthcarewrapper'
function Industrypage() {
    return (
        <>
            <Header />
            <div className='container'>
                <Tabs defaultValue="banking" mt={20} color="teal">
                    <Tabs.List mb={50}>
                        <Tabs.Tab value="banking" >
                            <Text fw={700} style={{fontSize:"18px"}}>Banking and Finance</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="healthcare" >
                            <Text fw={700} style={{fontSize:"18px"}}>Health Care</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="manufacturing" >
                            <Text fw={700} style={{fontSize:"18px"}}>Manufacturing</Text>
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="banking">
                        <Bankingandfinancewrapper />
                    </Tabs.Panel>

                    <Tabs.Panel value="healthcare">
                        <Healthcarewrapper />
                    </Tabs.Panel>
                    <Tabs.Panel value="manufacturing">
                        <Manufacturingwrapper />
                    </Tabs.Panel>
                </Tabs>
            </div>
            <Helpbox />
            <AwardsSection />
            <Footer />
        </>
    )
}

export default Industrypage