import React from 'react'
import Service from './shared/Service'
import service1 from '../../assets/corporatetraining.jpg'
import service2 from '../../assets/leadership.jpg'
import service3 from '../../assets/learning.webp'
import learning1 from '../../assets/learning1.jpg'
import learning2 from '../../assets/learning2.jpg'
import learning3 from '../../assets/learning3.jpg'
import learning4 from '../../assets/learning4.jpg'
import agility from '../../assets/careers-agility-bg.png'
import innovation from '../../assets/careers-innovation-bg.png'
import diversity from '../../assets/careers-diversity-bg.png'
import agilityicon from '../../assets/agility-icon.svg'
import diversityicon from '../../assets/diversity-icon.svg'
import innovationicon from '../../assets/innovation-icon.svg'
import semiconductor from '../../assets/semiconductor.webp'
import microsoft from '../../assets/microsoft.jpg'
import locations from '../../assets/locations.jpg'
function Learningwrapper() {
  return (
    <div className='page-wrapper'>
      <section className="page-section intro-section section-one-wrapper our-vision-dtaj reveal active">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="intro2">
                <h2>Designing meaningful, tailored learning experiences for all </h2>
                <p className="sub-heading">We are transforming businesses with cutting-edge tools and systems to unlock success
                  with the power of people </p>
              </div>
            </div>
          </div>
          <div className="row our-vision-dtaj-boxes section-one pt-4 justify-content-start">
            <div className="col-md-3">
              <article className="box box-1 section-one-box">
                <figure className="img">
                  <img alt="Analytics-driven Decision-making" src={learning3} />
                </figure>
                <div className="text">
                  <h4>Analytics-driven Decision-making</h4>
                  <p>Ensure your learning program is on track with smart tech-driven insights</p>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="box box-1 section-one-box">
                <figure className="img">
                  <img alt="training" src={learning1} />
                </figure>
                <div className="text">
                  <h4>Corporate training services</h4>
                  <p>End-to-end program design and management for improved efficiency</p>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="box box-1 section-one-box">
                <figure className="img">
                  <img alt="Master Change with Technology" src={learning4} />
                </figure>
                <div className="text">
                  <h4>Master Change with Technology</h4>
                  <p>Enable your workforce to adapt to change with comprehensive plans</p>
                </div>
              </article>
            </div>
            <div className="col-md-3">
              <article className="box box-1 section-one-box">
                <figure className="img">
                  <img alt="Engaging Learning Programs" src={learning2} />
                </figure>
                <div className="text">
                  <h4>Engaging Learning Programs</h4>
                  <p>Utilize innovative strategies like gamification to create engaging training</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section service-provide talent reveal active">
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
                      title="Learning Solutions"
                      image={service3}
                      info="Develop technology-driven learning solutions that utilize innovative strategies like gamification and simulation for better training outcomes"
                    />
                  </div>
                  <div className="col-md-4 cat-listing normal-link service-post-list contingent-staffing">
                    <Service
                      title="Leadership Developmen"
                      image={service2}
                      info="Nurture your next generation of leaders with a learning strategy aligned with your business priorities, company culture, and development goals"
                    />
                  </div>
                  <div className="col-md-4 cat-listing normal-link service-post-list ai-ml">
                    <Service
                      title="Corporate Training"
                      image={service1}
                      info="Accelerate human resource transformation by using our learning strategy that combines business learning with all the elements of a successful academic program"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section our-vision-better-tomorrow reveal active">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="intro2 text-center">
                <h2>Transform workforce performance with exceptional learning experiences </h2>
                <p className="sub-heading">Chart your enterprise learning journey to elevate individual
                  and overall organizational performance </p>
              </div>
            </div>
          </div>
          <div className="row pt-4 justify-content-center">
            <div className="col-md-4">
              <article className="box">
                <figure className="img"><img decoding="async" alt="imgn" src={innovation} />
                  <span className=" icon"><img decoding="async" alt="immg " src={innovationicon} /></span></figure>
                <div className="text">
                  <h4>Enhance talent retention</h4>
                  <p>Maximize employee engagement and retention for long-term success</p>
                </div>
              </article>
            </div>
            
            <div className="col-md-4">
              <article className="box">
                <figure className="img"><img decoding="async" alt="img" src={agility} />
                  <span className=" icon"><img decoding="async" alt="img" src={agilityicon} /></span>
                </figure>
                <div className="text">
                  <h4>Build your future leadership now</h4>
                  <p>Nurture a breed of skilled leaders who can drive your growth</p>
                </div>
              </article>
            </div>

            <div className="col-md-4">
              <article className="box">
                <figure className="img"><img decoding="async" alt="img" src={diversity} />
                  <span className=" icon"><img decoding="async" alt="img" src={diversityicon} /></span>
                </figure>
                <div className="text">
                  <h4>Reduce costs through automation</h4>
                  <p>Integrate smart tech-driven learning programs to shrink costs</p>
                </div>
              </article>
            </div>

          </div>
        </div>
      </section>

      <section className="page-section why-trust our-client-stories blue-graphical-bg what-we-think reveal active">
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
                          <img width="384" height="200" src={microsoft} className="card-img-top" alt="img" />
                        </a>
                      </figure>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="#">A Trusted Guide to Outsource Talent in 2023</a>
                        </h5>
                        <div className="cat-name"><a href="#">eBooks</a></div>
                      </div>
                    </div>

                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3 client-stories-box normal-link">
                      <figure>
                        <a href="#">
                          <img width="384" height="200" src={semiconductor} className="card-img-top" alt="img" />
                        </a>
                      </figure>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="#">Key Measures You Must Adopt for a Sustainable Training Delivery</a>
                        </h5>
                        <div className="cat-name"><a href="#">Blogs</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">

                    <div className="card mb-3 client-stories-box normal-link">
                      <figure>
                        <a href="#">
                          <img width="384" height="200" src={locations} className="card-img-top" alt="img" />
                        </a>
                      </figure>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="#">Developing custom elearning content for a leading bank</a>
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

export default Learningwrapper