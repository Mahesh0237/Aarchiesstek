import React from 'react'
import aboutus from '../../../assets/aboutusbanner.avif'
function Aboutusbanner() {
  return (
    <div className="page-title big-title">
      <div className="container">
        <div className="row ">
          <div className="col-md-5">
            <h1>Empowering enterprises with exceptional experiences</h1>
            <p className="sub-heading">Creating competitive advantage through <br />
              a holistic experience for over 30 years
            </p>
          </div>
        </div>
      </div>
      <img width="1440" height="664" src={aboutus} className="img" alt="Who We Are" />
    </div>
  )
}

export default Aboutusbanner