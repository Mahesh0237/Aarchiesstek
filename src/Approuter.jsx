import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Image, Loader, Stack, Text } from '@mantine/core'

const Homepage = lazy(() => import('./pages/Homepage'))
const Aboutuspage = lazy(() => import('./pages/Aboutuspage'))
const Industrypage = lazy(() => import('./pages/Industrypage'))
const Careerspage = lazy(() => import('./pages/Careerspage'))
const Contactuspage = lazy(() => import('./pages/Contactuspage'))
const Privacypolicy = lazy(() => import('./pages/Privacypolicy'))
const Copyrightpage = lazy(() => import('./pages/Copyrightpage'))
const Servicepage = lazy(() => import('./pages/Servicespage'))
function Approuter() {
    return (
        <BrowserRouter>
            <Suspense fallback={
                <Stack align='center' justify='center' style={{ height: "100vh" }}>
                    <Loader variant="bars" color="green" />
                    <Text fw={700} size="lg" >Loading please wait....</Text>
                </Stack>
            }>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path='/aboutus' element={<Aboutuspage />} />
                    <Route path='/services' element={<Servicepage />} />
                    <Route path='/industry' element={<Industrypage />} />
                    <Route path='/careers' element={<Careerspage />} />
                    <Route path='/contactus' element={<Contactuspage />} />
                    <Route path='/privacypolicy' element={<Privacypolicy />} />
                    <Route path='/copyright' element={<Copyrightpage />} />

                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Approuter