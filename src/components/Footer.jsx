import { Divider, Grid, Group, Image, Stack, Text } from '@mantine/core'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconLocation, IconMail, IconMap, IconMapPin, IconPhoneCall } from '@tabler/icons-react'
import React from 'react'

function Footer() {

    return (
        <div className="footer-wrapper">
            <div className="container ">
                <div className="middle-footer">
                    <div className="row ">
                        <div className="col-md-6 ">
                            <Grid>
                                <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                                    <h2 >Aarchiesstek</h2>
                                    <div className="footer-address">
                                        <div className="address-section footer-addresses">
                                            <h3>India</h3>
                                            <Stack>
                                                <Text size='sm'> Novel Tech Park, #46/4, <br /> Kudlu Gate, Hosur Rd,
                                                    <br />HSR Extension, Bengaluru,<br /> Karnataka 560068.
                                                </Text>
                                                <Text size='sm'><IconMail size={18} /> info@aarchiesstek.com</Text>
                                                <Text size='sm'><IconPhoneCall size={18} /> +91 9353572178</Text>
                                            </Stack>
                                        </div>
                                    </div>
                                </Grid.Col>
                                <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                                    <h3 className='mt-5'>Head office (USA)</h3>
                                    <Stack>
                                        <Text size='sm'><IconMapPin size={18} /> Charlotte, North Carolina,</Text>
                                        <Text size='sm'><IconMail size={18} /> Hr@aarchiesstek.com</Text>
                                        <Text size='sm'><IconPhoneCall size={18} /> +001 980-825-2337</Text>
                                    </Stack>
                                </Grid.Col>
                            </Grid>
                        </div>
                        <div className="col-md-6 ">
                            <Grid mt={20}>
                                <Grid.Col span={{ base: 6, md: 4, lg: 4 }} className='footer-links'>
                                    <h3 className='mb-3'>Aarchiesstek</h3>
                                    <ul>
                                        <li>
                                            <a href="/services">Services</a>
                                        </li>
                                        <li >
                                            <a href="/industry">Industry</a>
                                        </li>
                                        <li >
                                            <a href="/careers">Careers</a>
                                        </li>
                                        <li  >
                                            <a href="/industry">Healthcare</a>
                                        </li>
                                        <li >
                                            <a href="/industry">Manufacturing</a>
                                        </li>
                                    </ul>
                                </Grid.Col>
                                <Grid.Col span={{ base: 6, md: 4, lg: 4 }} className='footer-links'>
                                    <h3 className='mb-3'>About Us</h3>
                                    <ul>
                                        <li>
                                            <a href="/aboutus">our vision</a>
                                        </li>
                                        <li>
                                            <a href="/services">Talent</a>
                                        </li>
                                        <li>
                                            <a href="/services">Learning</a>
                                        </li>
                                        <li>
                                            <a href="/services">Technology</a>
                                        </li>
                                        <li>
                                            <a href="#">Industries</a>
                                        </li>
                                    </ul>
                                </Grid.Col>
                                <Grid.Col span={{ base: 6, md: 4, lg: 4 }} className='footer-links'>
                                    <h3 className='mb-3'>Resources</h3>
                                    <ul>
                                        <li>
                                            <a href="/copyright">copyright</a>
                                        </li>
                                        <li>
                                            <a href="/privacypolicy">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </Grid.Col>
                            </Grid>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="lower-footer">
                    <div className="container">
                        <Group justify='space-between'>
                            <div className="footer-copyrite">
                                <Text>© 2024 Aarchiesstek. All Rights Reserved.</Text>
                            </div>
                            <div>
                                <Group>
                                    <a href='#'><IconBrandInstagram /></a>
                                    <a href='#'> <IconBrandFacebook /></a>
                                    <a href='https://www.linkedin.com/company/aarchiesstek/'><IconBrandLinkedin /></a>
                                </Group>
                            </div>
                        </Group>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer