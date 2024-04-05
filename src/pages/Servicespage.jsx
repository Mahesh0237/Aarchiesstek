import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Helpbox from '../components/homewrapper.jsx/Helpbox'
import AwardsSection from '../components/homewrapper.jsx/AwardsSection'
import { Tabs, Text } from '@mantine/core'
import Talentwrapper from '../components/services/Talentwrapper'
import Learningwrapper from '../components/services/Learningwrapper'
import Technologywrapper from '../components/services/Technologywrapper'
function Servicepage() {
    return (
        <>
            <Header />
            <div className='container'>
                <Tabs defaultValue="talent" mt={20} color="teal">
                    <Tabs.List mb={50}>
                        <Tabs.Tab value="talent" >
                            <Text fw={700} style={{fontSize:"18px"}}>Talent</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="learning" >
                            <Text fw={700} style={{fontSize:"18px"}}>Learning</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="technology" >
                            <Text fw={700} style={{fontSize:"18px"}}>Technology</Text>
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="talent">
                        <Talentwrapper />
                    </Tabs.Panel>

                    <Tabs.Panel value="learning">
                        <Learningwrapper />
                    </Tabs.Panel>
                    <Tabs.Panel value="technology">
                       <Technologywrapper/>
                    </Tabs.Panel>
                </Tabs>
            </div>
            <Helpbox />
            <AwardsSection />
            <Footer />
        </>
    )
}

export default Servicepage