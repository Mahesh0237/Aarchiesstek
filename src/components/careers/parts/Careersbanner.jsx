import React from 'react'
import careersbg from '../../../assets/careersbg.jpg'
import { useViewportSize } from '@mantine/hooks';
function Careersbanner() {

    const { height, width } = useViewportSize();
    return (
        <div className="page-title big-title" >
            {
                width > 767 &&
                <img width="100%" height="663" src={careersbg} className="img" alt="Careers" />
            }
            <div className="container">
                <div className="row ">
                    <div className="col-md-5 px-4 pb-4">
                        <h1>Looking for a fulfilling career experience?</h1>
                        <p className="sub-heading">Join a global digital and talent transformation
                            <br />leader to build a thriving career
                        </p>
                        <a className="btn featured-btn" href="#" target="_self">Current Openings</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careersbanner