import React from 'react'
import agility from '../../../assets/careers-agility-bg.png'
import diversity from '../../../assets/careers-diversity-bg.png'
import innovation from '../../../assets/careers-innovation-bg.png'
function Ourvisionfortomarr() {
    return (
        <section className="page-section our-vision-better-tomorrow reveal active">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="intro2 text-center">
                            <h2>Our vision for a better tomorrow</h2>
                            <h3>Shaping the future by focusing on ideas, innovations, and talent</h3>
                        </div>
                    </div>
                </div>
                <div className="row pt-4 ">
                    <div className="col-md-4">
                        <article className="box">
                            <figure className="ai-for-good img"><img decoding="async" src={innovation} alt="AI for good" /><span className=" icon"></span></figure>
                            <div className="text">
                                <h4>AI for good</h4>
                                <p>Harnessing AI/ML to expedite change across industries &amp; communities</p>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-4">
                        <article className="box">
                            <figure className="leading-with-thought-icon img"><img decoding="async" src = {agility} alt="Leading with thought" /><span className=" icon"></span></figure>
                            <div className="text">
                                <h4>Leading with thought</h4>
                                <p>Leveraging out-of-the-box thinking to develop creative solutions</p>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-4">
                        <article className="box last">
                            <figure className="inspiring-next-gen-talent img"><img decoding="async" src={diversity} alt="Inspiring next-gen talent" /><span className=" icon"></span></figure>
                            <div className="text">
                                <h4>Inspiring next-gen talent</h4>
                                <p>Preparing the leaders of tomorrow<br />
                                    with skills and insights</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourvisionfortomarr