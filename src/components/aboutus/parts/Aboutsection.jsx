import React from 'react'
import people from '../../../assets/people.jpg'
import digital from '../../../assets/digital.webp'
import focuseed from '../../../assets/focuseed.avif'
import { Card, Grid, Group, Image, Text } from '@mantine/core'
function Aboutsection() {
    return (
        <section className="page-section about-us mb-0 reveal active">
            <div className="container">
                <Text fw={700} style={{ fontSize: "30px" }}>About Aarchiesstek</Text>
                <p>
                    At Aarchiesstek, we take pride in our status as digital natives with a
                    profound sense of empathy. We harness technology to amplify the influence
                    of human expertise, ensuring a harmonious blend of innovation and compassion.
                    With a legacy spanning over three decades, we have earned the trust of esteemed
                    organizations worldwide, from Fortune enterprises to mid-market firms. Our track
                    record speaks volumes about our ability to empower businesses across diverse domains
                    and help them gain a distinct competitive advantage.
                </p>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={digital}
                                    height={260}
                                    alt="digital"
                                />
                            </Card.Section>
                            <Group justify="space-between" mt="md" >
                                <Text fw={600} style={{ fontSize: "20px" }} ta="center">Digital Native Enterprise</Text>
                            </Group>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={people}
                                    height={260}
                                    alt="Norway"
                                />
                            </Card.Section>
                            <Group justify="space-between" mt="md" >
                                <Text fw={600} style={{ fontSize: "20px" }} ta="center">People-first Culture</Text>
                            </Group>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={focuseed}
                                    height={260}
                                    alt="focuseed"
                                />
                            </Card.Section>
                            <Group justify="space-between" mt="md" >
                                <Text fw={600} style={{ fontSize: "20px" }} ta="center">Focused on Excellence</Text>
                            </Group>
                        </Card>
                    </Grid.Col>
                </Grid>
            </div>
        </section>
    )
}

export default Aboutsection