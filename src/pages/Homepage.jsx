import React from 'react'
import Header from '../components/Header'
import Banner from '../components/homewrapper.jsx/Banner'
import Footer from '../components/Footer'
import Maximizingcapabilities from '../components/homewrapper.jsx/Maximizingcapabilities'
import Helpbox from '../components/homewrapper.jsx/Helpbox'
import AwardsSection from '../components/homewrapper.jsx/AwardsSection'
import ExperienceEcosystem from '../components/homewrapper.jsx/ExperienceEcosystem'
import { Text } from '@mantine/core'

function Homepage() {
  return (
    <>
      <Header />
      <Banner />
      <ExperienceEcosystem />
      <Maximizingcapabilities />
      <Helpbox/>
      <AwardsSection/>
      <Footer />
    </>
  )
}

export default Homepage