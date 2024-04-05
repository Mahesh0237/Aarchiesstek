import React from 'react'
import corevalue1 from '../../../assets/careers-agility-bg.png'
import corevalue2 from '../../../assets/careers-diversity-bg.png'
import corevalue3 from '../../../assets/careers-innovation-bg.png'
import innovationicon from '../../../assets/innovation-icon.svg'
import agilityicon from '../../../assets/agility-icon.svg'
import diversityicon from '../../../assets/diversity-icon.svg'
import datacentricityicon from '../../../assets/data-centricity-icon.svg'
import integrityicon from '../../../assets/integrity-icon.svg'
import transparencyicon from '../../../assets/transparency-icon.svg'
function Corevalues() {
    return (
        <section className="page-section core-values reveal">
            <div className="container">
                <div className="row our-core-values">
                    <div className="col-md-12">
                        <div className="about_4">
                            <div className="intro2 text-center">
                                <h2>Our core values</h2>
                                <h3 className="sub-heading">Principles that guide our Total Experience Ecosystem</h3>
                            </div>
                            <div className="row about-our-core-values">
                                <div className="col-md-4 about-our-core-values-box">
                                    <article className="box integrity-box text-center">
                                        <figure className="ai-for-good img">
                                            <img src={corevalue1} alt="Integrity" />
                                            <span className="icon"><img src={integrityicon} alt="Integrity icon" />
                                            </span>
                                        </figure>
                                        <div className="text">
                                            <h4>Integrity</h4>
                                            <p>We act with honesty, fairness, and thoughtfulness while doing what is right for our customers</p>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-4 about-our-core-values-box">
                                    <article className="box diversity-box text-center">
                                        <figure className="ai-for-good img">
                                            <img src={corevalue3} alt="Diversity" />
                                            <span className="icon">
                                                <img src={diversityicon} alt="Diversity icon" />
                                            </span>
                                        </figure>
                                        <div className="text">
                                            <h4>Diversity</h4>
                                            <p>As a certified minority business, we value the diversity of culture, background, thought, and experience</p>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-4 about-our-core-values-box">
                                    <article className="box data-centricity-box text-center">
                                        <figure className="ai-for-good img">
                                            <img src={corevalue3} alt="Data-centricity" />
                                            <span className="icon">
                                                <img src={datacentricityicon} alt="Data-centricity icon" />
                                            </span>
                                        </figure>
                                        <div className="text">
                                            <h4>Data-centricity</h4>
                                            <p>We depend on reliable and authentic data to drive deeper insights and make focused decisions</p>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-4 about-our-core-values-box">
                                    <article className="box innovation-box text-center">
                                        <figure className="ai-for-good img">
                                            <img src={corevalue1} alt="Innovation" />
                                            <span className="icon">
                                                <img src={innovationicon} alt="Innovation icon" />
                                            </span>
                                        </figure>
                                        <div className="text">
                                            <h4>Innovation</h4>
                                            <p>We encourage curiosity and novel ideas while taking measured risks to exceed your expectations</p>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-4 about-our-core-values-box">
                                    <article className="box agility-box text-center">
                                        <figure className="ai-for-good img">
                                            <img src={corevalue2} alt="Agility" />
                                            <span className="icon">
                                                <img src={agilityicon} alt="Agility icon" />
                                            </span>
                                        </figure>
                                        <div className="text">
                                            <h4>Agility</h4>
                                            <p>We are continually evolving our abilities to pivot quickly in any situation and deliver more value</p>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-4 about-our-core-values-box">
                                    <article className="box transparency-box text-center">
                                        <figure className="ai-for-good img">
                                            <img src={corevalue2} alt="Transparency" />
                                            <span className="icon">
                                                <img src={transparencyicon} alt="Transparency icon" />
                                            </span>
                                        </figure>
                                        <div className="text">
                                            <h4>Transparency</h4>
                                            <p>We foster trust by underpinning every interaction with honesty and authenticity</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Corevalues