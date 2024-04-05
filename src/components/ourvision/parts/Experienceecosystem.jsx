import React from 'react'
import leveraging from '../../../assets/leveraging.webp'
import meaningfull from '../../../assets/meaningfull.jpg'
import focusedinnovation from '../../../assets/focusedinnovation.jpg'
import transcending from '../../../assets/transcending.jpg'
function Experienceecosystem() {
    return (
        <section className="page-section our-vision-dtaj reveal active">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="intro2 ">
                            <h2>Our experience ecosystem approach</h2>
                            <h3>Revolutionizing experiences through empathy, expertise, and innovation to align with your
                                evolving expectations. We cultivate an outstanding Total Experience that accelerates
                                transformation for all stakeholders within our ecosystem. Our Total Experience (TX)
                                methodology has propelled us to become a recognized global leader in digital and human
                                capital transformation and consulting</h3>
                        </div>
                    </div>
                </div>
                <div className="row our-vision-dtaj-boxes pt-4">
                    <div className="col-md-3">
                        <article className="box box-2">
                            <figure className="img"><img src={meaningfull} alt="img" /></figure>
                            <figure className="img2"><img src={meaningfull} alt="img" /></figure>
                            <div className="text">
                                <h4>Meaningful Conversations</h4>
                                <p className="small">Driven by subject matter experts to gain deeper insights into your aspirations</p>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-3">
                        <article className="box box-1">
                            <figure className="img">
                                <img src={leveraging} alt="img" />
                            </figure>
                            <figure className="img2">
                                <img src={leveraging} alt="img" />
                            </figure>
                            <div className="text">
                                <h4>Leveraging Data Centricity</h4>
                                <p className="small">Through proprietary analytics to make better-informed decisions</p>
                            </div>
                        </article>  
                    </div>
                    <div className="col-md-3">
                        <article className="box box-4 last">
                            <figure className="img"><img src={transcending} alt="img" /></figure>
                            <figure className="img2"><img src={transcending} alt="img" /></figure>
                            <div className="text">
                                <h4>Transcending your Expectations</h4>
                                <p className="small">Through tailored solutions and ways to go beyond and deliver extra value</p>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-3">
                        <article className="box box-3">
                            <figure className="img"><img src={focusedinnovation} alt="img" /></figure>
                            <figure className="img2"><img src={focusedinnovation} alt="img" /></figure>
                            <div className="text">
                                <h4>User-focused Innovations</h4>
                                <p className="small">By utilizing people-centered technology expertise to solve your challenges</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experienceecosystem