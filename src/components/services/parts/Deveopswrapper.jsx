import { Card, Grid, Image, List, Stack, Text } from '@mantine/core'
import React from 'react'
import deveops1 from '../../../assets/technology/deveops1.jpg'
import deveops2 from '../../../assets/technology/deveops2.jpg'
import deveops3 from '../../../assets/technology/deveops3.jpg'
import deveops4 from '../../../assets/technology/deveops4.jpg'
import deveops5 from '../../../assets/technology/deveops5.jpg'
function Deveopswrapper() {
    return (
        <Stack>
            <Text style={{ fontSize: "35px", fontWeight: "600", textAlign: "center" }} py={20}>DevOps and Automation</Text>
            <Text>
                The software development lifecycle (SDLC) has experienced a significant evolution.
                Traditional waterfall development methods operated on fixed release
                schedules with manual integration and deployment processes, leading to lengthy cycle
                times often measured in months. Today's digital products demand agility to swiftly respond to user needs,
                requiring development-to-deployment cycles as short as days or hours. Moreover, the prevalent use of microservices
                architecture adds complexity to integration and deployment tasks, necessitating automation for efficient management.
            </Text>
            <Text>
                To address these challenges, organizations establish DevOps Centers of Excellence (CoEs) to enhance automation levels in integration and deployment processes while ensuring governance, security, and scalability of digital products.
            </Text>
            <Text>The DevOps CoE provides support for:</Text>
            <List type='ordered' spacing={15}>
                <List.Item>
                    <Text>
                        <Text component='span' fw={600}>CI/CD Strategy: </Text>
                        Developing strategies for continuous integration and continuous deployment (CI/CD)
                        pipelines to streamline development and deployment workflows.
                    </Text>
                </List.Item>
                <List.Item>
                    <Text>
                        <Text component='span' fw={600}>Infrastructure Planning: </Text>
                        Collaborating with infrastructure teams to plan and provision resources efficiently,
                        aligning with application deployment requirements.
                    </Text>
                </List.Item>
                <List.Item>
                    <Text>
                        <Text component='span' fw={600}>Automation Opportunities and Requirements: </Text>
                        Identifying automation opportunities across the SDLC and understanding the specific requirements
                        for automation tools and frameworks.
                    </Text>
                </List.Item>
                <List.Item>
                    <Text>
                        <Text component='span' fw={600}>Automation Strategy and Planning: </Text>
                        Creating a roadmap for automation initiatives, including tool selection, implementation phases, and performance metrics.
                    </Text>
                </List.Item>
                <List.Item>
                    <Text>
                        <Text component='span' fw={600}>Automation Implementation: </Text>
                        Executing automation plans, integrating automation tools into development and deployment pipelines,
                        and continuously optimizing automation workflows for efficiency and reliability.
                    </Text>
                </List.Item>
            </List>
            <Text style={{ fontSize: "35px", fontWeight: "600", textAlign: "center" }} py={20}>Focus Areas</Text>
            <Grid>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={deveops1} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{fontSize:"20px", fontWeight:"600", textAlign:"center"}}>Monitering Platforms</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={deveops2} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{fontSize:"20px", fontWeight:"600", textAlign:"center"}}>continous Integration/ Continuos Delivery</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={deveops3} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{fontSize:"20px", fontWeight:"600", textAlign:"center"}}>Automation Tools</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={deveops4} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{fontSize:"20px", fontWeight:"600", textAlign:"center"}}>Infrastructure Automation Consulting</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={deveops5} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{fontSize:"20px", fontWeight:"600", textAlign:"center"}}>Docker Devops Service</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
            </Grid>
        </Stack>
    )
}

export default Deveopswrapper