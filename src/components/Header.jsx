import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import { useWindowScroll } from '@mantine/hooks';
import { IconMenu2 } from '@tabler/icons-react';
import { Drawer, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import Drawernav from './Drawernav';
function Header() {
  const [scroll, scrollTo] = useWindowScroll();

  const [drawer, setDrawer] = useState(false)
  const openDrawer = () => {
    setDrawer(true)
  }
  const closeDrawer = () => {
    setDrawer(false)
  }
  return (
    <nav className={`navbar header navbar-expand-lg navbar-light sticky-top ${scroll.y > 50 ? 'sticky' : ''}`}>
      <div className="container">
        <div className="title-wrapper" style={{ height: "90px", width: "150px" }}>
          <a href='/'><img src={logo} alt='logo' width="100%" height="100%" /></a>
        </div>
        <div className="header-section-right headeractive">
          <div className="collapse navbar-collapse">
            <div className="primary-menu-wrap navbar-nav mr-auto mt-2 mt-lg-0">
              <ul className="primary-menu list-unstyled list-inline">
                <li >
                  <a href="/" >Home</a>
                </li>
                <li >
                  <NavLink to="/aboutus" activeclassname="active" style={{ color: "white" }}>About</NavLink>
                </li>
                <li>
                  <NavLink to="/services" activeclassname="active" style={{ color: "white" }}>Services</NavLink>
                </li>
                <li >
                  <NavLink to="/industry" activeclassname="active" style={{ color: "white" }}>Industry</NavLink>
                </li>
                <li >
                  <NavLink to="/careers" activeclassname="active" style={{ color: "white" }}>Careers</NavLink>
                </li>
                <li >
                  <NavLink to="/contactus" activeclassname="active" style={{ color: "white" }}>Contactus</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button className="navbar-toggler btn btn-link d-md-none p-0 ml-3" type="button" onClick={openDrawer}>
          <Text component='span' c="white"><IconMenu2 /></Text>
        </button>
      </div>
      <Drawer
        opened={drawer}
        onClose={closeDrawer}
        zIndex={99999}
        size="xs"
        withCloseButton={false}
      >
        <Drawernav />
      </Drawer>
    </nav>
  )
}

export default Header