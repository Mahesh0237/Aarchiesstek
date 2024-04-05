import React from 'react'
import bankingexp from '../../assets/bankingexp.jpg'
import Streamlining from '../../assets/streamlining.jpg'
import agileworkforce from '../../assets/agile.avif'
import innovation from '../../assets/innovation-icon.svg'
import diversity from '../../assets/diversity-icon.svg'
import agility from '../../assets/agility-icon.svg'
import marchent from '../../assets/merchent.png'
import merchenticon from '../../assets/merchant-icon.svg'
import selfservice from '../../assets/selfservice.png'
import selfserviceicon from '../../assets/selfservice-icon.svg'
import talent from '../../assets/careers-innovation-bg.png'
import talentsolutionsicon from '../../assets/talentsolutions-icon.svg'
import commercialbanking from '../../assets/commercialbanking.avif'
import lending from '../../assets/lending.avif'
import locations from '../../assets/locations.jpg'
import payment from '../../assets/payment.webp'
import bfsi from '../../assets/bfsi.webp'
function Bankingandfinancewrapper() {
  return (
    <div className='page-wrapper'>
      <section className="page-section industry-section-one">
        <div className="half-circle-left"></div>
        <div className="half-circle-right"></div>
        <div className="container">
          <div className="row">
            <div className="intro2 col-md-12">
              <h2>Enabling your customers to enjoy enhanced experiences across touchpoints</h2>
              <p>The financial services industry is in a constant state of flux. Meeting changing customer needs while handling competition from tech-savvy companies, compliance risks, and talent scarcity has become a tough ask</p>
            </div>
          </div>
          <div className="row pt-5 boxes">
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={agileworkforce} alt=" Agile Workforce" />
                  <h5 className="card-title">Building Agile Workforce</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">With talent strategies that bring in mission-critical skilled talent at scale</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={bankingexp} alt="Banking" />
                  <h5 className="card-title">Enhancing Banking Customer Experiences</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">With digital solutions that help you build customer-centered business models</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={Streamlining} alt="Streamlining" />
                  <h5 className="card-title">Streamlining Compliances and Processes</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">Through efficient solutions with built-in procedures to reduce iterative workload</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section why-trust1 ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about_4">
                <div className="intro2">
                  <h2 className='text-white text-center'>Our Banking industry expertise</h2>
                </div>
              </div>
              <div className="row why-trust-boxes justify-content-center pt-5">
                <div className="col-md-4">
                  <div className="box">
                    <figure>
                      <img className="img" src={agility} alt=" Consultants" />
                    </figure>
                    <div className="nubers text-white">950+</div>
                    <div className="text-white">Consultants across<br />
                      skillsets deployed</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <figure>
                      <img className="img" src={innovation} alt=" Market-leading " />
                    </figure>
                    <div className="nubers text-white">35+</div>
                    <div className="text-white">Market-leading<br />
                      organizations served</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <figure>
                      <img className="img" src={diversity} alt=" Transformations " />
                    </figure>
                    <div className="nubers text-white">1700+</div>
                    <div className="text-white">Transformations<br />
                      successfully delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section core-values ">
        <div className="container">
          <div className="row our-core-values">
            <div className="col-md-12">
              <div className="about_4">
                <div className="intro2 text-center">
                  <h2>What we do</h2>
                  <h3 className="sub-heading">Transforming experiences for banking and financial institutions to leap-frog their competition</h3>
                </div>
                <div className="row about-our-core-values justify-content-center">
                  <div className="col-md-4 about-our-core-values-box">
                    <article className="box integrity-box text-center">
                      <figure className="ai-for-good img"><img src={talent} alt="Talent Solutions" />
                        <span className="icon"><img src={talentsolutionsicon} alt="Talent Solutions icon" /></span>
                      </figure>
                      <div className="text">
                        <h4>Talent Solutions</h4>
                        <p>Engage specialists with digital and business skills to achieve better outcomes for your enterprise</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-4 about-our-core-values-box">
                    <article className="box agility-box text-center">
                      <figure className="ai-for-good img"><img src={marchent} alt="Merchant Management icon" />
                        <span className="icon"><img src={merchenticon} alt="Merchant Management icon" /></span></figure>
                      <div className="text">
                        <h4>Merchant Management</h4>
                        <p>Automate consolidation and reporting processes to determine the most profitable streams for competitive advantage</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-4 about-our-core-values-box">
                    <article className="box data-centricity-box text-center">
                      <figure className="ai-for-good img"><img src={selfservice} alt="Self-service Solutions icon" />
                        <span className="icon"><img src={selfserviceicon} alt="Self-service Solutions icon" /></span>
                      </figure>
                      <div className="text">
                        <h4>Self-service Solutions</h4>
                        <p>Empower customers with data to make faster decisions within secure omnichannel ecosystems</p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section industry-section-one">
        <div className="container">
          <div className="row">
            <div className="intro2 col-md-12 text-center">
              <h2>Segments we serve</h2>
            </div>
          </div>
          <div className="row pt-3 boxes">
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={payment} alt="Payments" />
                  <h5 className="card-title">Payments</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">Enable your customers to enjoy faster payment experiences with scalable solutions that mitigate compliance risks</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={commercialbanking} alt="Commercial Banking" />
                  <h5 className="card-title">Commercial Banking</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">Fulfill customer needs while enhancing agility with tailored solutions that drive personalized experiences</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 industry-section-one-box">
                <figure><img className="card-img-top" src={lending} alt="Lending" />
                  <h5 className="card-title">Lending</h5>
                </figure>
                <div className="card-body">
                  <p className="card-text">Ensure seamless lending experiences with flexible digital solutions that scale easily while offering deeper insights</p>
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
                          <img width="392" height="208" src={locations} className="card-img-top" alt="BFSI Company Transforms Workforce Experience with Real-time Reporting and Analytics" loading="lazy" />													</a>
                      </figure>
                      <div className="card-body">
                        <h5 className="card-title"><a href="#">BFSI Company Transforms Workforce Experience with Real-time Reporting and Analytics</a></h5>
                        <div className="cat-name"><a href="#">Case Studies</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3 client-stories-box">
                      <figure>
                        <a href="#">
                          <img width="384" height="200" src={bfsi} className="card-img-top" alt="U.S.-based BFSI Leader Modernizes for Real-time Reporting &amp; Analysis" loading="lazy" />													</a>
                      </figure>
                      <div className="card-body">
                        <h5 className="card-title"><a href="#">U.S.-based BFSI Leader Modernizes for Real-time Reporting &amp; Analysis</a></h5>
                        <div className="cat-name"><a href="#">Case Studies</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3 client-stories-box">
                      <figure>
                        <a href="#">
                          <img width="384" height="200" src={locations} className="card-img-top" alt="Leading " />	</a>
                      </figure>
                      <div className="card-body">
                        <h5 className="card-title"><a href="#">Leading Financial Company Fills Critical Business Roles in Remote Locations at Record Speed</a></h5>
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

export default Bankingandfinancewrapper