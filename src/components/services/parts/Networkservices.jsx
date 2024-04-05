import { Card, Grid, List, Stack, Text } from '@mantine/core'
import React from 'react'
import networkservice from '../../../assets/technology/networkservice.jpg'
import network1 from '../../../assets/technology/network1.jpg'
import network2 from '../../../assets/technology/network2.jpg'
import network3 from '../../../assets/technology/network3.jpg'
function Networkservices() {
    return (
        <Stack>
            <Text style={{ fontSize: "35px", fontWeight: "600", textAlign: "center" }} py={20}>Network Services</Text>
            <Grid>
                <Grid.Col span={{base:12, md:8, lg:8}}>
                    <Text ta="justify">
                        The communications industry is entering the next phase of revolution fueled by 5G,
                        Hyper-Automation, Artificial Intelligence/Machine Learning, and Private/Public Cloud.
                        The convergence of these technological and business model transformations is creating
                        a whole new possibilities for our customers - to reimagine and reshape the future of consumer
                        and enterprise services. The challenges in this new world cannot be solved with traditional
                        processes and redundant practices, instead requires skilled partners who can provide solutions.
                        Tech Mahindra is the world's largest independent network services provider with a proven track record
                        in delivering best-in-class services.Telecom Networks is Tech Mahindra’s forte. We have been transforming
                        and modernizing networks for our customer for over 25 years, and are ready to reimagine, reinvent and reshape the future.
                    </Text>
                </Grid.Col>
                <Grid.Col span={{base:12, md:4, lg:4}}>
                    <img src={networkservice} width="100%" height="200px" alt='networkservice' />
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
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Building the City of the Future</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={network2} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>LTE Network Technology Services</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={network3} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Enterprise Managed Services</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
            </Grid>
        </Stack>
    )
}

export default Networkservices