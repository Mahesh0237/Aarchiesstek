import { IconCircleChevronRight } from '@tabler/icons-react'
import React from 'react'
import Service from './shared/Service'
import service1 from '../../assets/service1.jpg'
import service3 from '../../assets/service3.jpg'
import service5 from '../../assets/service5.jpg'
import workforcemngmnt from '../../assets/workforcemngmnt.jpg'
import property from '../../assets/property.jpg'
import vasttalent from '../../assets/vasttalent.jpg'
import business from '../../assets/business.jpg'
import agility from '../../assets/careers-agility-bg.png'
import innovation from '../../assets/careers-innovation-bg.png'
import diversity from '../../assets/careers-diversity-bg.png'
import agilityicon from '../../assets/agility-icon.svg'
import diversityicon from '../../assets/diversity-icon.svg'
import innovationicon from '../../assets/innovation-icon.svg'
import semiconductor from '../../assets/semiconductor.webp'
import microsoft from '../../assets/microsoft.jpg'
import locations from '../../assets/locations.jpg'
function Talentwrapper() {
    return (
        <div className='page-wrapper'>
            <section className="page-section intro-section section-one-wrapper our-vision-dtaj reveal ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="intro2">
                                <h2>Offering a superior workforce experience
                                    that translates into improved outcomes </h2>
                                <p className="sub-heading">
                                    Aarchiesstek delivers an unparalleled workforce experience that directly translates into
                                    enhanced outcomes for your organization. We specialize in providing the perfect-fit talent
                                    necessary for navigating your journey of reinvention. With a blend of industry and functional
                                    expertise, profound insights, and cutting-edge recruitment technology, we empower you to cultivate
                                    a more agile and efficient workforce.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row our-vision-dtaj-boxes section-one pt-4 justify-content-start">
                        <div className="col-md-3">
                            <article className="box box-1 section-one-box">
                                <figure className="img">
                                    <img alt="Proprietary Recruitment Tech" src={property} />
                                </figure>
                                <div className="text">
                                    <h4>Proprietary Recruitment Tech</h4>
                                    <p>Utilize smart tools to source, screen, and hire top talent, at speed</p>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-3">
                            <article className="box box-1 section-one-box">
                                <figure className="img">
                                    <img alt="Optimize Workforce Management" src={workforcemngmnt} />
                                </figure>
                                <div className="text">
                                    <h4>Optimize Workforce Management</h4>
                                    <p>Maximize workforce potential through engagement and productivity strategies</p>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-3">
                            <article className="box box-1 section-one-box">
                                <figure className="img">
                                    <img alt="Business-aligned Strategy" src={business} />
                                </figure>
                                <div className="text">
                                    <h4>Business-aligned Strategy</h4>
                                    <p>Achieve your talent goals through actionable plans that are tied to your business objectives</p>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-3">
                            <article className="box box-1 section-one-box">
                                <figure className="img">
                                    <img alt="Vast Talent Pool" src={vasttalent} />
                                </figure>
                                <div className="text">
                                    <h4>Vast Talent Pool</h4>
                                    <p>Rapidly find top-grade digital and non-technical specialists across 100+ skillsets</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section service-provide talent reveal ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="intro2 text-center">
                                <h2 className='mb-4'>Services we provide</h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="listing-container">
                                <div className="industry-listing-slider listing-wrapper row">
                                    <div className="col-md-4 cat-listing normal-link service-post-list full-time-hiring">
                                        <Service
                                            title="Full-time Hiring"
                                            image={service3}
                                            info="Filling your business-critical roles across IT and Non-IT categories with specialists who possess the relevant industry expertise"
                                        />
                                    </div>
                                    <div className="col-md-4 cat-listing normal-link service-post-list direct-sourcing">
                                        <Service
                                            title="Direct Sourcing"
                                            image={service5}
                                            info="Amplify your employer brand, leveraging direct sourcing to hit recruitment goals to engage top-tier talent, fostering corporate vision and growth"
                                        />
                                    </div>
                                    <div className="col-md-4 cat-listing normal-link service-post-list ai-ml">
                                        <Service
                                            title="AI/ML"
                                            image={service1}
                                            info="Ramp up your digital projects and speed up business growth with the skills of our top-grade AI/ML specialists"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section our-vision-better-tomorrow reveal ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="intro2 text-center">
                                <h2>Elevate Workforce Output With Tailored Talent Solutions </h2>
                                <p className="sub-heading">Utilize our cross-industry expertise and smart technology to get
                                    more out of your workforce </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4 justify-content-center">
                        <div className="col-md-4">
                            <article className="box">
                                <figure className="img">
                                    <img decoding="async" alt="Shrink workforce costs" src={diversity} />
                                    <span className=" icon"><img decoding="async" alt="Shrink workforce costs" src={diversityicon} /></span>
                                </figure>
                                <div className="text">
                                    <h4>Shrink workforce costs</h4><p>Optimize costs through automation, process efficiencies, and workforce planning</p>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-4">
                            <article className="box">
                                <figure className="img">
                                    <img decoding="async" alt="Continuous workforce improvement" src={innovation} />
                                    <span className=" icon"><img decoding="async" alt="Continuous workforce improvement" src={innovationicon} /></span>
                                </figure>
                                <div className="text">
                                    <h4>Continuous workforce improvement</h4><p>Transform your workforce with focused skills development programs</p>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-4">
                            <article className="box">
                                <figure className="img">
                                    <img decoding="async" alt="Make better-informed decisions" src={agility} />
                                    <span className=" icon"><img decoding="async" alt="Make better-informed decisions" src={agilityicon} /></span>
                                </figure>
                                <div className="text">
                                    <h4>Make better-informed decisions</h4><p>Maximize your talent potential with insights from our exclusive analytics</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section why-trust our-client-stories blue-graphical-bg what-we-think reveal ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about_4">
                                <div className="intro2 text-center">
                                    <h2 className='text-dark'>What we think</h2>
                                </div>
                                <div className="row why-trust-boxes justify-content-center pt-4">
                                    <div className="col-md-4">
                                        <div className="card mb-3 client-stories-box normal-link">
                                            <figure>
                                                <a href="#">
                                                    <img width="384" height="200" src={locations} className="card-img-top" alt="img" />
                                                </a>
                                            </figure>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <a href="#">Leading Financial Company Fills Critical Business Roles in Remote Locations at Record Speed</a>
                                                </h5>
                                                <div className="cat-name"><a href="#">Case Studies</a></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="card mb-3 client-stories-box normal-link">
                                            <figure>
                                                <a href="#">
                                                    <img width="384" height="200" src={semiconductor} className="card-img-top" alt="imhg" />																										</a>
                                            </figure>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <a href="#">Global Semiconductor Manufacturer Reduces Time to Hire By 30%</a>
                                                </h5>
                                                <div className="cat-name"><a href="#">Case Studies</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card mb-3 client-stories-box normal-link">
                                            <figure>
                                                <a href="#">
                                                    <img width="384" height="200" src={microsoft} className="card-img-top" alt="img" />
                                                </a>
                                            </figure>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <a href="#">Automotive Giant Engages Aarchiesstek to Fill High Volume Needs for Industrial Resources</a>
                                                </h5>
                                                <div className="cat-name"><a href="#">Case Studies</a></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Talentwrapper