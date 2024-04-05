import { Card, Grid, List, Stack, Text } from '@mantine/core'
import React from 'react'
import deveops3 from '../../../assets/technology/deveops3.jpg'
import fullstack1 from '../../../assets/technology/javafullstack1.jpg'
import fullstack2 from '../../../assets/technology/javafullstack2.jpg'
function Javafullstackwrapper() {
    return (
        <Stack>
            <Text style={{ fontSize: "35px", fontWeight: "600", textAlign: "center" }} py={20}>Java FullStack</Text>
            <Text>
                Java full-stack development encompasses a wide range of technologies and skills required to develop
                both frontend and backend components of web applications using Java-based technologies.
                Java full-stack developers need a blend of skills in Java programming, web development technologies,
                database management, version control systems (e.g., Git),
                and software development best practices to build robust and scalable web applications.
            </Text>
            <Text>The Java Fullstack provides support for:</Text>
            <List type='ordered' spacing={15}>
                <List.Item>
                    <Text>
                        <Text component='span' fw={600}>Agile and DevOps in Java Full-Stack Development: </Text>
                        Java full-stack development encompasses both front-end and back-end development using Java technologies.
                        Agile methodologies, such as Scrum or Kanban, are commonly used in Java full-stack teams to manage projects
                        in an iterative and incremental manner.
                        This allows teams to respond quickly to changing requirements and deliver value in short development cycles known as sprints.
                    </Text>
                </List.Item>
                <List.Item>
                    <Text>
                        <Text component='span' fw={600}>Continuous Integration and Continuous Deployment (CI/CD): </Text>
                        In Java full-stack development, CI/CD practices are crucial for ensuring code quality, fast integration,
                        and frequent deployments. Continuous Integration involves automating the process of code integration, build,
                        and testing whenever developers commit code changes to the version control system (e.g., Git). Continuous Deployment
                        automates the deployment of successfully
                        tested code changes to production or staging environments, ensuring rapid delivery of new features and bug fixes.
                    </Text>
                </List.Item>
                <List.Item>
                    <Text>
                        <Text component='span' fw={600}>Microservices Architecture: </Text>
                        Many Java full-stack applications are built using a microservices architecture, where the application is
                        divided into small, independently deployable services. Each service focuses on a specific business capability and
                        communicates with other services via APIs. Microservices enable scalability, flexibility,
                        and independent development/deployment of services, aligning well with Agile and DevOps principles.
                    </Text>
                </List.Item>
                <List.Item>
                    <Text>
                        <Text component='span' fw={600}>Infrastructure as Code (IaC): </Text>
                        Infrastructure planning and automation, often part of a DevOps CoE's responsibilities, can be facilitated
                        through Infrastructure as Code practices. Tools like Terraform or AWS CloudFormation enable defining and
                        managing infrastructure resources (servers, databases, networking) using code, promoting consistency,
                        repeatability, and scalability in Java full-stack applications' deployment environments.
                    </Text>
                </List.Item>
                <List.Item>
                    <Text>
                        <Text component='span' fw={600}>Automation in Java Full-Stack Development:</Text>
                        Automation plays a critical role in Java full-stack development, covering areas such as build automation
                        (e.g., using Maven or Gradle), testing automation (e.g., JUnit, Selenium), deployment automation (e.g., Docker, Kubernetes),
                        and monitoring/logging automation (e.g., ELK stack).
                        Automation reduces manual errors, speeds up development cycles, and enhances overall productivity.
                    </Text>
                </List.Item>
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

export default Javafullstackwrapper