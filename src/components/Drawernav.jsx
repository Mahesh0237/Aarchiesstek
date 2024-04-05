import React from 'react'
import logo from '../assets/logo.jpeg'
import { Stack, Text } from '@mantine/core'
import { NavLink } from 'react-router-dom'

function Drawernav() {
    return (
        <div className='drawernav'>
            <div className='text-center'>
                <img src={logo} width="100%" height="90" alt="logo" />
            </div>
            <Stack py={20} gap="xs">

                <NavLink to="/" activeclassname="active">
                    <Text style={{ fontSize: "18px" }} p={10} fw={500}>Home</Text>
                </NavLink>
                <NavLink to="/aboutus" activeclassname="active">
                    <Text style={{ fontSize: "18px" }} p={10} fw={500}>About</Text>
                </NavLink>
                <NavLink to="/services" activeclassname="active">
                    <Text style={{ fontSize: "18px" }} p={10} fw={500}>Services</Text>
                </NavLink>
                <NavLink to="/industry" activeclassname="active">
                    <Text style={{ fontSize: "18px" }} p={10} fw={500}>Industry</Text>
                </NavLink>
                <NavLink to="/careers" activeclassname="active">
                    <Text style={{ fontSize: "18px" }} p={10} fw={500}>Careers</Text>
                </NavLink>
                <NavLink to="/contactus" activeclassname="active">
                    <Text style={{ fontSize: "18px" }} p={10} fw={500}>Contactus</Text>
                </NavLink>
            </Stack>
        </div>
    )
}

export default Drawernav