import { Card, Grid, List, Stack, Text } from '@mantine/core'
import React from 'react'
import deveops3 from '../../../assets/technology/deveops3.jpg'
import fullstack1 from '../../../assets/technology/javafullstack1.jpg'
import fullstack2 from '../../../assets/technology/javafullstack2.jpg'
function DataEngineerwrapper() {
    return (
        <Stack>
            <Text style={{ fontSize: "35px", fontWeight: "600", textAlign: "center" }} py={20}>Data Engineer</Text>
            <Text>
                A data engineer is an IT professional whose primary job is to prepare data for analytical or operational uses.
                This occupation includes duties such as designing and building systems for collecting, storing and analyzing data.
                Data engineers are typically responsible for building data pipelines to bring together information from different source systems.
                These software engineers integrate, consolidate and cleanse data and structure it for use in analytics applications.
                They strive to make data easily accessible and to optimize their organization's big data ecosystem.
            </Text>
            <Text>
                Data engineers often work as part of an analytics team alongside data scientists.
                Data engineers provide data in usable formats to the data scientists who run queries
                and algorithms against the information for predictive analytics, machine learning and
                data mining applications. Data engineers also deliver aggregated data to business executives,
                analysts and other end users so they can analyze it and apply the results to improve business operations.
            </Text>
            <Text>Although exact responsibilities for data engineers differ by organization, other typical responsibilities include the following:</Text>
            <List spacing={15}>
                <List.Item>Build, test and maintain database pipeline architectures.</List.Item>
                <List.Item>Create methods for data validation.</List.Item>
                <List.Item>Acquire data.</List.Item>
                <List.Item>Clean data.</List.Item>
                <List.Item>Develop data set processes.</List.Item>
                <List.Item>Improve data reliability and quality.</List.Item>
                <List.Item>Develop algorithms to make data usable.</List.Item>
                <List.Item>Prepare data for prescriptive and predictive modeling.</List.Item>
            </List>
            <Text style={{ fontSize: "35px", fontWeight: "600", textAlign: "center" }} py={20}>Focus Areas</Text>
            <Grid>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={deveops3} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Automation Tools</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={fullstack1} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Infrastructure Automation Consulting</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{base:12, md:6, lg:4}}>
                    <Card>
                        <Card.Section inheritPadding>
                            <img src={fullstack2} width="100%" height={200} />
                        </Card.Section>
                        <Card.Section inheritPadding py={10}>
                            <Text style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Microservices Architecture</Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
            </Grid>
        </Stack>
    )
}

export default DataEngineerwrapper