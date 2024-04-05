import { Badge, Button, Card, Grid, Group, Image, Stack, Text } from '@mantine/core'
import React from 'react'
import talentbg from '../../assets/talentbg.jpg'
import learningbg from '../../assets/learningbg.jpg'
import digitalbg from '../../assets/digitalbg.jpg'
function ExperienceEcosystem() {
    return (
        <>
            <section className="scrolling-section embracing-total-experience-box reveal active">
                <div className="container full-width">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="total_experience-txt">
                                <h2 className="mb-2">Embracing Total Experience for Enhanced Outcomes</h2>
                                <p className="pt-2">
                                    Integrating customer, employee, and user experiences seamlessly, we foster a comprehensive Total Experience (TX)
                                    that leads to better outcomes across the board. Our TX ecosystem is built on three core pillars: data-driven insights,
                                    forward-looking conversations, and user-centric innovations.
                                    This robust framework empowers us to provide tailored solutions that align with your evolving needs and expectations.
                                </p>
                                <p>
                                    <span className="ui-provider">
                                        At Aarchiesstek, we are committed to continuously enhancing the experiences of our customers,
                                        strategic partners, employees, and community. We embrace innovation and are dedicated to going above and beyond to achieve this goal.
                                    </span>
                                    <br />
                                    We are unafraid to innovate and go the extra mile to achieve this objective.<br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="experiences-journeys-box">
                        <div className="wrapper">
                            <div className="journeys-progress">
                                <div className="journeys-progress-box-1">
                                    <div className="col-md-12 journeys-progress-item">
                                        <div className='row'>
                                            <div className='col-md-6 journeys-progress-item'>
                                                <div className="journeys-progress-item-inner">
                                                    <div className="mt-init-box cx"><span className="spn">C</span></div>
                                                    <h3 style={{ fontWeight: "bold" }}>Enhancing Customer Experience</h3>
                                                    <p>Elevating satisfaction through timely and well-informed responses to inquiries, empathetic dialogues, and punctual delivery of solutions.</p>
                                                </div>
                                                <div className="journeys-progress-item-inner">
                                                    <div className="mt-init-box ux"><span className="spn">U</span></div>
                                                    <h3 style={{ fontWeight: "bold" }}>User Experience</h3>
                                                    <p>Providing streamlined experiences to users across their preferred platforms via intuitive interfaces and cohesive messaging.</p>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="journeys-progress-item-inner">
                                                    <div className="mt-init-box ex"><span className="spn">E</span></div>
                                                    <h3 style={{ fontWeight: "bold" }}>Employee Experience</h3>
                                                    <p>Unlocking the full potential of human capital by fostering personalized engagement using our proprietary talent engagement suite.</p>
                                                </div>
                                                <div className="journeys-progress-item-inner">
                                                    <div className="mt-init-box mx"><span className="spn">M</span></div>
                                                    <h3 style={{ fontWeight: "bold" }}>Multi-Experience</h3>
                                                    <p>Engaging our audiences seamlessly across various digital touchpoints with a comprehensive people-centric approach.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='backgroundimg'>
                <section className="container dta-wrapper dta-text-wrapper reveal active">
                    <div className="dta-wrapper-inner">
                        <div className="intro">
                            <h2>Driving transformation across journeys</h2>
                            <h3>through our Experience Ecosystem</h3>
                        </div>
                    </div>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src={learningbg}
                                        height={260}
                                        alt="Norway"
                                    />
                                </Card.Section>
                                <Group justify="space-between" mt="md" >
                                    <Text fw={700} style={{ fontSize: "30px" }} ta="center">Learning</Text>
                                    <Badge color="pink">view</Badge>
                                </Group>
                                <Text ta="justify" py={20}>We empower your workforce with captivating learning experiences designed to boost engagement with customers and partners.</Text>
                                <Button variant="filled" color='violet' radius="xl" size='lg' component='a' href='/services'>Explore</Button>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src={talentbg}
                                        height={260}
                                        alt="Norway"
                                    />
                                </Card.Section>
                                <Group justify="space-between" mt="md" >
                                    <Text fw={700} style={{ fontSize: "30px" }} ta="center">Talent</Text>
                                    <Badge color="pink">view</Badge>
                                </Group>
                                <Text ta="justify" py={20}>Drawing on our extensive industry expertise, we provide human capital solutions that drive improved business results and elevate overall experiences.</Text>
                                <Button variant="filled" color='violet' radius="xl" size='lg' component='a' href='/services'>Explore</Button>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src={digitalbg}
                                        height={260}
                                        alt="Norway"
                                    />
                                </Card.Section>
                                <Group justify="space-between" mt="md" >
                                    <Text fw={700} style={{ fontSize: "30px" }} ta="center">Digital</Text>
                                    <Badge color="pink">view</Badge>
                                </Group>
                                <Text ta="justify" py={20}>Harnessing innovative solutions, we deliver a cohesive digital experience that empowers you to effectively engage with your customers, workforce.</Text>
                                <Button variant="filled" color='violet' radius="xl" size='lg' component='a' href='/services'>Explore</Button>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </section>
            </div>
        </>
    )
}

export default ExperienceEcosystem