import React from 'react'
import healthcare from '../../assets/healthcare.avif'
import steeringpatient from '../../assets/steeringpatient.jpg'
import softwareemployee from '../../assets/softwareemployee.webp'
import qualifiedworkforce from '../../assets/qualifiedworkforce.jpg'

import innovation from '../../assets/innovation-icon.svg'
import diversity from '../../assets/diversity-icon.svg'
import agility from '../../assets/agility-icon.svg'

import innovationbg from '../../assets/careers-innovation-bg.png'
import agilitybg from '../../assets/careers-agility-bg.png'
import diversitybg from '../../assets/careers-diversity-bg.png'
import Healthcareclientservice1 from '../../assets/Healthcareclientservice1.jpg'
import Healthcareclientservice2 from '../../assets/Healthcareclientservice2.jpg'
function Healthcarewrapper() {
  return (
    <div className='page-wrapper'>
      <section className="page-section industry-section-one">
        <div className="container">
          <div className="row">
            <div className="intro2 col-md-12 ">
              <h2>Leveraging Technology &amp; Talent to drive experiences
                that your customers desire</h2>
              <p>Healthcare organizations are exploring new opportunities with advanced technology and innovative growth strategies while aiming to deliver a unified care experience. To achieve success, they need tailored digital solutions and qualified talent</p>
            </div>
          </div>
          <div className="row pt-5 boxes">
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={qualifiedworkforce} alt="Building qualified workforce" />
                  <h5 className="card-title">Building Qualified Workforce</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">With the right strategies to acquire qualified expertise in the industry</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={steeringpatient} alt="Steering patient-centric solutions" />
                  <h5 className="card-title">Steering Patient-centric Solutions</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">By developing solutions that elevate experiences across physical and digital touchpoints</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={softwareemployee} alt="Generating deeper insights" />
                  <h5 className="card-title">Generating Deeper Insights</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">Through Master Data Management, data intelligence, AI/ML solutions with build-in governance features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section why-trust1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about_4">
                <div className="intro2 text-center">
                  <h2 className='text-white'>Our Healthcare industry expertise</h2>
                </div>
              </div>
              <div className="row why-trust-boxes justify-content-center pt-5">
                <div className="col-md-4">
                  <div className="box">
                    <figure><img className="img" src={diversity} alt="img" /></figure>
                    <div className="nubers text-white">650+</div>
                    <div className="text-white">Consultants across<br />
                      skillsets deployed</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <figure><img className="img" src={innovation} alt="img" /></figure>
                    <div className="nubers text-white">17+</div>
                    <div className="text-white">Market-leading<br />
                      organizations served</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <figure><img className="img" src={agility} alt="img" /></figure>
                    <div className="nubers text-white">1500+</div>
                    <div className="text-white">Transformations<br />
                      successfully delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section core-values light-blue-bg">
        <div className="container">
          <div className="row our-core-values">
            <div className="col-md-12">
              <div className="about_4">
                <div className="intro2 text-center">
                  <h2>What we do</h2>
                  <h3 className="sub-heading">Improving healthcare outcomes while reducing costs with innovative solutions</h3>
                </div>
                <div className="row about-our-core-values justify-content-center">
                  <div className="col-md-3 about-our-core-values-box">
                    <article className="box innovation-box text-center">
                      <figure className="ai-for-good img"><img src={agilitybg} alt="Learning Management Systems" />
                        <span className="icon"><img src={agility} alt="Learning Management Systems icon" /></span></figure>
                      <div className="text">
                        <h4>Learning management systems</h4>
                        <p>Enabling improved healthcare workforce productivity with tailored LMS solutions</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-3 about-our-core-values-box">
                    <article className="box data-centricity-box text-center">
                      <figure className="ai-for-good img"><img src={innovationbg} alt="Mobile Health icon" />
                        <span className="icon"><img src={innovation} alt="Mobile Health icon" /></span></figure>
                      <div className="text">
                        <h4>Mobile health</h4>
                        <p>Developing and integrating digital mobile solutions with existing systems</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-3 about-our-core-values-box">
                    <article className="box integrity-box text-center">
                      <figure className="ai-for-good img"><img src={diversitybg} alt="Patient " />
                        <span className="icon"><img src={diversity} alt="Patient" /></span></figure>
                      <div className="text">
                        <h4>Patient &amp; provider engagement</h4>
                        <p>Delivering advanced analytics ecosystem to improve user engagement</p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section why-trust blue-graphical-bg our-client-stories what-we-think">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about_4">
                <div className="intro2 text-center">
                  <h2 className='text-dark'>What we think</h2>
                </div>
                <div className="row why-trust-boxes justify-content-center pt-4">
                  <div className="col-md-4">
                    <div className="card mb-3 client-stories-box">
                      <figure>
                        <a href="#">
                          <img width="384" height="200" src={Healthcareclientservice2} className="card-img-top" alt="Healthcare" />
                        </a>
                      </figure>
                      <div className="card-body">
                        <h5 className="card-title"><a href="#">Healthcare organization improves data quality with an advanced patient Master Data Management</a></h5>
                        <div className="cat-name"><a href="#">Case Studies</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3 client-stories-box">
                      <figure>
                        <a href="#">
                          <img width="384" height="200" src={Healthcareclientservice1} className="card-img-top" alt="Leading" />													</a>
                      </figure>
                      <div className="card-body">
                        <h5 className="card-title"><a href="#">Leading Healthcare Services Provider</a></h5>
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

export default Healthcarewrapper