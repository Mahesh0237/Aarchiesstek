import { Card, Grid, List, Stack, Text } from '@mantine/core'
import React from 'react'
import qualityanalyst from '../../../assets/technology/qualityanalyst.png'
import network1 from '../../../assets/technology/network1.jpg'
import network2 from '../../../assets/technology/network2.jpg'
import qualityanalyst3 from '../../../assets/technology/qualityanalyst1.jpg'
function Qualityanalyst() {
    return (
        <Stack>
            <Text style={{ fontSize: "35px", fontWeight: "600", textAlign: "center" }} py={20}>Quality Analyst</Text>
            <Grid>
                <Grid.Col span={{base:12, md:8, lg:8}}>
                    <Text ta="justify">
                        Portfolio of solutions that make companies take digital solutions to market faster, drive efficiencies and achieve better quality

                        Our rich portfolio of service offerings provides assurance from Chip-to-Cloud and spans the testing lifecycle
                        encompassing test design, test automation using AI, Continuous testing driving in-sprint automation,
                        intelligent reporting, prediction analytics using machine learning and NLP, test data management, test
                        environment management, Dev-Sec-Ops, test support using BOTs and performance assurance.
                    </Text>
                </Grid.Col>
                <Grid.Col span={{base:12, md:4, lg:4}}>
                    <img src={qualityanalyst} width="100%" height="200px" alt='networkservice' />
                </Grid.Col>
            </Grid>
            <Text style={{ fontSize: "35px", fontWeight: "600", textAlign: "center" }} py={20}>Focus Areas</Text>
            <Grid>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={network1} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Intelligent Test Automation Framework</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={network2} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Automated Test Assurance</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={qualityanalyst3} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Test Data Management Solutions</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
            </Grid>
        </Stack>
    )
}

export default Qualityanalyst