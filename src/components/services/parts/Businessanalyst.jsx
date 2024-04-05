import { Card, Grid, List, Stack, Text } from '@mantine/core'
import React from 'react'
import businessanalyst from '../../../assets/technology/businessanalyst.jpg'
import businessanalyst1 from '../../../assets/technology/businessanalyst1.jpg'
import businessanalyst2 from '../../../assets/technology/businessanalyst2.jpg'
import qualityanalyst3 from '../../../assets/technology/qualityanalyst1.jpg'
function Businessanalyst() {
    return (
        <Stack>
            <Text style={{ fontSize: "35px", fontWeight: "600", textAlign: "center" }} py={20}>Business Excellence</Text>
            <Grid>
                <Grid.Col span={{base:12, md:8, lg:8}}>
                    <Text ta="justify">
                        We help our clients evolve into the NXT to become a conscious enterprise that focuses on purpose, process, data, and technology.

                        We work with our clients to help create technology and insight-enabled resilient businesses that impact their growth,
                        infuse efficiency, improve agility, enhance stakeholder experience, social impact, and reduce risk.
                    </Text>
                </Grid.Col>
                <Grid.Col span={{base:12, md:4, lg:4}}>
                    <img src={businessanalyst} width="100%" height="200px" alt='networkservice' />
                </Grid.Col>
            </Grid>
            <Text style={{ fontSize: "35px", fontWeight: "600", textAlign: "center" }} py={20}>Focus Areas</Text>
            <Grid>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={businessanalyst1} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Building Better Services Through Service Design</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={businessanalyst2} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Business Analysis Consulting Services - Deep Validation of Your Ideas</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={qualityanalyst3} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Take Your Business to the NXT Frontier with Process Intelligence</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
            </Grid>
        </Stack>
    )
}

export default Businessanalyst