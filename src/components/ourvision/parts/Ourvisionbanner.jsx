import React from 'react'
import ourvisionbanner from '../../../assets/ourvisionbanner.jpg'
function Ourvisionbanner() {
    return (
        <div class="page-title big-title">
            <div class="container">
                <div class="row ">
                    <div class="col-md-5">
                        <h1>Engineering Total <br /> Experience ​</h1>
                        <p class="sub-heading">Humanizing technology to transform &amp; <br />connect diverse experiences ​</p>
                    </div>
                </div>
            </div>
            <img width="1440" height="664" src={ourvisionbanner} class="img-rounded img-responsive center-block featured wp-post-image" alt="Our Vision" decoding="async" fetchpriority="high" />
        </div>
    )
}

export default Ourvisionbanner