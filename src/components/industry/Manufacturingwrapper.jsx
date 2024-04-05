import React from 'react'
import automation from '../../assets/automation.webp'
import careersoffering1 from '../../assets/payment.webp'
import careersoffering2 from '../../assets/careers-offering2.webp'
import innovation from '../../assets/innovation-icon.svg'
import diversity from '../../assets/diversity-icon.svg'
import agility from '../../assets/agility-icon.svg'
import semiconductor from '../../assets/semiconductor.webp'
import microsoft from '../../assets/microsoft.jpg'
import locations from '../../assets/locations.jpg'
import merchent from '../../assets/merchent.png'
import merchenticon from '../../assets/merchant-icon.svg'
import selfservice from '../../assets/selfservice.png'
import serlfserviceicon from '../../assets/selfservice-icon.svg'
import innovationbg from '../../assets/careers-innovation-bg.png'

function Manufacturingwrapper() {
  return (
    <div className='page-wrapper'>
      <section className="page-section industry-section-one">
        <div className="container">
          <div className="row">
            <div className="intro2 col-md-12">
              <h2>Creating smarter &amp; intelligent operations solutions</h2>
              <p>
                In today's dynamic landscape, manufacturers are embracing a borderless approach by investing in smarter and
                more intelligent operational solutions. This includes leveraging operational intelligence, adopting rapid
                prototyping methodologies, and accelerating product development cycles to enhance the overall customer experience.
                As a result, there is a growing demand for transparency and seamless connectivity among stakeholders to enable the
                delivery of real-time information and embrace digital concepts effectively.
              </p>
            </div>
          </div>
          <div className="row pt-5 boxes">
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={careersoffering1} alt="Achieving workforce scalability" />
                  <h5 className="card-title">Achieving Workforce Scalability</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">Through tailored strategies for building diverse talent pools with relevant industry segment expertise</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={automation} alt="Increasing operational efficiency" />
                  <h5 className="card-title">Increasing Operational efficiency</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">With automation, AI/ML, and other technologies by reducing manual workloads</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={careersoffering2} alt="Reducing Costly Disruptions" />
                  <h5 className="card-title">Reducing Costly Disruptions</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">By offering predictive solutions to preempt machine failures and boost uptime</p>
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
                  <h2 className='text-white'>Our Manufacturing&nbsp;industry expertise</h2>
                </div>
              </div>
              <div className="row why-trust-boxes justify-content-center pt-5">
                <div className="col-md-4">
                  <div className="box">
                    <figure><img className="img" src={agility} alt="850+ Consultants across skillsets deployed" /></figure>
                    <div className="nubers text-white">850+</div>
                    <div className="text-white">Consultants across<br />
                      skillsets deployed</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <figure><img className="img" src={diversity} alt="22+ Market-leading organizations served" /></figure>
                    <div className="nubers text-white">22+</div>
                    <div className="text-white">Market-leading<br />
                      organizations served</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <figure><img className="img" src={innovation} alt="1450+ Transformations successfully delivered" /></figure>
                    <div className="nubers text-white">1450+</div>
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
                  <h3 className="sub-heading">Creating a connected manufacturing value chain to drive enhanced experiences and productivity</h3>
                </div>
                <div className="row about-our-core-values justify-content-center">
                  <div className="col-md-3 about-our-core-values-box">
                    <article className="box data-centricity-box text-center">
                      <figure className="ai-for-good img"><img src={innovationbg} alt="Manufacturing Process-control Applications" />
                        <span className="icon"><img src={diversity} alt="Manufacturing Process-control Applications icon" /></span></figure>
                      <div className="text">
                        <h4>Manufacturing Process-control Applications</h4>
                        <p>Tailoring digital applications to help you gain better control over your processes and improve efficiency</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-3 about-our-core-values-box">
                    <article className="box diversity-box text-center">
                      <figure className="ai-for-good img"><img src={merchent} alt="Quality Management" />
                        <span className="icon"><img src={merchenticon} alt="Quality Management icon" /></span></figure>
                      <div className="text">
                        <h4>Quality Management</h4>
                        <p>Helping enterprises improve asset management and reliability with tailored quality control solutions</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-3 about-our-core-values-box">
                    <article className="box innovation-box text-center">
                      <figure className="ai-for-good img"><img src={innovationbg} alt="Mobile Solutions" /><span className="icon">
                        <img src={innovation} alt="Mobile Solutions icon" /></span></figure>
                      <div className="text">
                        <h4>Mobile Solutions</h4>
                        <p>Empowering your workforce with mobile solutions for greater flexibility and control</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-3 about-our-core-values-box">
                    <article className="box integrity-box text-center">
                      <figure className="ai-for-good img"><img src={selfservice} alt="Business" /><span className="icon">
                        <img src={serlfserviceicon} alt="Business Intelligence" /></span>
                      </figure>
                      <div className="text">
                        <h4>Business Intelligence &amp; Advanced Analytics</h4>
                        <p>Leveraging powerful analytics to enhance your decision-making capabilities with improved insights</p>
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
                          <img width="384" height="200" src={locations} className="card-img-top" alt="Enabling " /></a>
                      </figure>
                      <div className="card-body">
                        <h5 className="card-title"><a href="#">Enabling Faster Go-to-Market With Predictive Maintenance</a></h5>
                        <div className="cat-name"><a href="#">Case Studies</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3 client-stories-box">
                      <figure>
                        <a href="#">
                          <img width="384" height="200" src={microsoft} className="card-img-top" alt="Top-10 U.S. Product Packaging &amp; Design Company" loading="lazy" />													</a>
                      </figure>
                      <div className="card-body">
                        <h5 className="card-title"><a href="#">Top-10 U.S. Product Packaging &amp; Design Company</a></h5>
                        <div className="cat-name"><a href="#">Case Studies</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3 client-stories-box">
                      <figure>
                        <a href="#">
                          <img width="384" height="200" src={semiconductor} className="card-img-top" alt="Global Semiconductor Manufacturer Reduces Time to Hire By 30%" loading="lazy" />													</a>
                      </figure>
                      <div className="card-body">
                        <h5 className="card-title"><a href="#">Global Semiconductor Manufacturer Reduces Time to Hire By 30%</a></h5>
                        <div className="cat-name"><a href="#">Case Studies</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
      </section>
    </div>
  )
}

export default Manufacturingwrapper