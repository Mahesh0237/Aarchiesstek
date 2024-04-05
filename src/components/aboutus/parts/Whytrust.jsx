import React from 'react'
import trusticon1 from '../../../assets/trusticon1.svg'
import trusticon2 from '../../../assets/trusticon2.svg'
import trusticon3 from '../../../assets/trusticon3.svg'
import trusticon4 from '../../../assets/trusticon4.svg'
import trusticon5 from '../../../assets/trusticon5.svg'
function Whytrust() {
    return (
        <section className="page-section why-trust1 pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about_4">
                            <div className="intro2 text-center">
                                <h2 className='text-white'>Why enterprises trust Aarchiesstek</h2>
                                <h3 className="text-white">Exploring new ways to deliver greater value to meet the evolving needs of enterprises</h3>
                            </div>
                        </div>
                        <div className="row why-trust-boxes justify-content-center">
                            <div className="col-md-4">
                                <div className="box">
                                    <figure><img className="img" src={trusticon2} alt=" Mindset" /></figure>
                                    <div className="text-white">Future-focused Mindset</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <figure>
                                        <img className="img" src={trusticon1} alt="Comprehensive " />
                                    </figure>
                                    <div className="text-white">Comprehensive Services Portfolio</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <figure><img className="img" src={trusticon3} alt="Intelligent " /></figure>
                                    <div className="text-white">Intelligent Technology Inclusion</div>
                                </div>
                            </div>
                        </div>
                        <div className="row why-trust-boxes justify-content-center">
                            <div className="col-md-4">
                                <div className="box">
                                    <figure><img className="img" src={trusticon5} alt="Redefined" /></figure>
                                    <div className="text-white">Redefined Centers of Excellence with Generative Solutions</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <figure><img className="img" src={trusticon4} /></figure>
                                    <div className="text-white">Consultative Customer<br />
                                        Service Approach</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whytrust