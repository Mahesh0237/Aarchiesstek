import React from 'react'
import Careersbanner from './parts/Careersbanner'
import Breadcrumbcareer from './parts/Breadcrumbcareer'
import offering1 from '../../assets/careers-offering1.webp'
import offering2 from '../../assets/careers-offering2.webp'
import offering3 from '../../assets/careers-offering3.webp'

import innovation from '../../assets/careers-innovation-bg.png'
import diversity from '../../assets/careers-diversity-bg.png'
import agility from '../../assets/careers-agility-bg.png'
import innovationicon from '../../assets/innovation-icon.svg'
import diversityicon from '../../assets/diversity-icon.svg'
import agilityicon from '../../assets/agility-icon.svg'
import { Grid, Text } from '@mantine/core'
function Careerswrapper() {
    return (
        <>
            <Careersbanner />
            <div className="page-wrapper">
                <Breadcrumbcareer />
                <div className="article-wrapper post-121 page type-page status-publish has-post-thumbnail hentry">
                    <div className="article clearfix">
                        <section className="mec-wrapper careers-page-wrap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="intro2 row justify-content-center mt-5">
                                            <h2 className="col-md-12">Why top professionals across skillsets choose Aarchiesstek</h2>
                                            <p className="col-md-12">At Aarchiesstek, you will work with the brightest minds who are passionate about driving innovations to make the world a better place.<br />
                                                Collaborate with thinkers and doers who are combining ideas with smart technology to ease user journeys across industries and communities</p>
                                        </div>
                                    </div>
                                    <div className='container'>
                                        <Grid p={20}>
                                            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                                                <Grid>
                                                    <Grid.Col span={12}>
                                                        <Text fw={700} style={{ fontSize: "1.375rem", lineHeight: "1.5rem", color:"#0358bb" }}>Positive work environment</Text>
                                                        <Text>Enjoy the perfect work-life balance at a flexible workplace</Text>
                                                    </Grid.Col>
                                                    <Grid.Col span={12}>
                                                        <Text fw={700} style={{ fontSize: "1.375rem", lineHeight: "1.5rem", color:"#0358bb" }}>Career-defining Opportunities</Text>
                                                        <Text>Find a job that takes your career to the next level and lets you build solutions for global brands</Text>
                                                    </Grid.Col>
                                                </Grid>
                                            </Grid.Col>
                                            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                                                <Grid>
                                                    <Grid.Col span={12}>
                                                        <Text fw={700} style={{ fontSize: "1.375rem", lineHeight: "1.5rem", color:"#0358bb" }}>Collaborative Work Culture</Text>
                                                        <Text>Be a part of a workplace that welcomes new ideas and rewards excellence</Text>
                                                    </Grid.Col>
                                                    <Grid.Col span={12}>
                                                        <Text fw={700} style={{ fontSize: "1.375rem", lineHeight: "1.5rem", color:"#0358bb" }}>A Workplace that Celebrates Diversity</Text>
                                                        <Text>Join an inclusive organization that celebrates the diversity of thought, expertise &amp; background</Text>
                                                    </Grid.Col>
                                                </Grid>
                                            </Grid.Col>
                                        </Grid>
                                    </div>
                                    {/* <div className="col-md-12 career-why-us-card">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="box row g-0">
                                                        <div className="col-12">
                                                            <div className="card-body">
                                                                <h5 className="card-title">Positive work environment</h5>
                                                                <p className="card-text">Enjoy the perfect work-life balance at a flexible workplace</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="box row g-0">
                                                        <div className="col-12">
                                                            <div className="card-body">
                                                                <h5 className="card-title">Career-defining Opportunities</h5>
                                                                <p className="card-text">Find a job that takes your career to the next level and lets you build solutions for global brands</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="box row g-0">
                                                        <div className="col-12">
                                                            <div className="card-body">
                                                                <h5 className="card-title">Collaborative Work Culture</h5>
                                                                <p className="card-text">Be a part of a workplace that welcomes new ideas and rewards excellence</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="box row g-0">
                                                        <div className="col-12">
                                                            <div className="card-body">
                                                                <h5 className="card-title">A Workplace that Celebrates Diversity</h5>
                                                                <p className="card-text">Join an inclusive organization that celebrates the diversity of thought, expertise &amp; background</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </section>

                        <section className="page-section joining-hands-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div className="intro2">
                                            <h2>Offering opportunities to everyone</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row joining-hands justify-content-center pt-2">
                                    <div className="col-md-12">
                                        <div className="joining-hands-slider row">
                                            <div className="col-md-4">
                                                <div className="box">
                                                    <figure>
                                                        <img className="img" src={offering1} alt="Students/ Freshers" />
                                                    </figure>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Students/ Freshers</h5>
                                                        <p className="card-text">Give the right start to your budding career through opportunities that drive growth</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="box">
                                                    <figure>
                                                        <img className="img" src={offering2} alt="Professionals" />
                                                    </figure>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Professionals</h5>
                                                        <p className="card-text">Leverage your expertise to help leading organizations achieve their business goals</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="box">
                                                    <figure>
                                                        <img className="img" src={offering3} alt="Executive" /></figure>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Executive</h5>
                                                        <p className="card-text">Utilize your rich experience to lead and drive transformations across industries and communities</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="page-section core-values reveal active" >
                            <div className="container">
                                <div className="row our-core-values">
                                    <div className="col-md-12">
                                        <div className="about_4">
                                            <div className="intro2 text-center">
                                                <h2>Driving elevated career experiences through our core values</h2>
                                            </div>
                                            <div className="row about-our-core-values">
                                                <div className="col-md-4 about-our-core-values-box">
                                                    <article className="box innovation-box text-center">
                                                        <figure className="ai-for-good img">
                                                            <img src={innovation} alt="Innovation" /><span className="icon">
                                                                <img src={innovationicon} alt="Innovation icon" /></span></figure>
                                                        <div className="text">
                                                            <h4>Innovation</h4>
                                                            <p>We encourage people to remain curious and reimagine better solutions to complex challenges</p>
                                                        </div>
                                                    </article>
                                                </div>
                                                <div className="col-md-4 about-our-core-values-box">
                                                    <article className="box agility-box text-center">
                                                        <figure className="ai-for-good img">
                                                            <img src={agility} alt="Agility" /><span className="icon">
                                                                <img src={agilityicon} alt="Agility icon" /></span></figure>
                                                        <div className="text">
                                                            <h4>Agility</h4>
                                                            <p>Agile in thought and action, we are continually refining our abilities to do and deliver more</p>
                                                        </div>
                                                    </article>
                                                </div>
                                                <div className="col-md-4 about-our-core-values-box">
                                                    <article className="box diversity-box text-center">
                                                        <figure className="ai-for-good img">
                                                            <img src={diversity} alt="Integrity" /><span className="icon">
                                                                <img src={diversityicon} alt="Integrity icon" /></span></figure>
                                                        <div className="text">
                                                            <h4>Integrity</h4>
                                                            <p>We act with honesty and transparency making sure that everyone enjoys a fulfilling experience</p>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Careerswrapper