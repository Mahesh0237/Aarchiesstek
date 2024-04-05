import { useViewportSize } from '@mantine/hooks';
import React, { useState } from 'react'

function Maximizingcapabilities() {
    const { height, width } = useViewportSize()

    return (
        <section id="maximizing-capabilities" className="scrolling-section mec-wrapper reveal active">
            <div className="container">
                <div className={`intro ${width >500 && 'text-center'}`}>
                    <h2>Maximizing your enterprise experience <br />
                        with talent &amp; technology</h2>
                    <p>Leading enterprises worldwide trust Aarchiesstek to revolutionize their human capital, learning,
                        and digital experiences. Our customized solutions empower organizations to drive change at their
                        preferred pace and magnitude.</p>
                    <p>We enable them to leverage cutting-edge technologies such as AI/ML, automation, and cloud computing,
                        helping them acquire emerging skills to generate significant business value.</p>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="mec-cards">
                            <li>
                                <div className="card-box mec-card-1">
                                    <div className="mdc-card-wrapper__text-section">
                                        <p><span className="ico1">partnerships</span></p>
                                        <div className="card-box-title fw-bold">150+</div>
                                        <div className="card-box-subhead fs-5">Enduring client partnerships across industries</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card-box mec-card-2">
                                    <div className="mdc-card-wrapper__text-section">
                                        <p><span className="ico2">enterprises</span></p>
                                        <div className="card-box-title fw-bold">35%</div>
                                        <div className="card-box-subhead fs-5">The Fortune enterprises served with pride</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card-box mec-card-3">
                                    <div className="mdc-card-wrapper__text-section">
                                        <p><span className="ico3">Transformations</span></p>
                                        <div className="card-box-title fw-bold">300+</div>
                                        <div className="card-box-subhead fs-5">Digital Transformations delivered across industries</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card-box mec-card-4">
                                    <div className="mdc-card-wrapper__text-section">
                                        <p><span className="ico4">Leadership</span></p>
                                        <div className="card-box-title fw-bold">900+</div>
                                        <div className="card-box-subhead fs-5">Leadership development workshops every year</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <p>&nbsp;
                        </p></div>
                </div>
            </div>
        </section>
    )
}

export default Maximizingcapabilities