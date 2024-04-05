import React from 'react'
// import banner1 from '../../assets/banner22.jpg'
import banner1 from '../../assets/homebanner1.jpg'
import banner2 from '../../assets/homebanner2.jpg'
import banner5 from '../../assets/homebanner3.jpg'
import homebanner4 from '../../assets/homebanner4.jpg'
import homebanner5 from '../../assets/homebanner5.jpg'
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Text } from '@mantine/core'
function Banner() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    const { height, width } = useViewportSize();
    let updateheight;
    let updateleftpos;
    if (width < 500) {
        updateheight = '200px'
        updateleftpos = "40%"
    } else if (width < 1200) {
        updateheight = '400px'
        updateleftpos = "40%"
    } else {
        updateheight = height - 100
        updateleftpos = "28%"
    }

    return (
        <div style={{ height: updateheight, display: 'flex' }} >
            <Carousel
                height="100%"
                dragFree
                loop
                style={{ flex: 1 }}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                <Carousel.Slide>
                    <div style={{ position: "relative" }}>
                        <img src={banner1} width="100%" height="100%" />
                        <div style={{ position: "absolute", top: "40%", left: updateleftpos, transform: "translate(-50%, -50%)" }} >
                            {
                                width < 500 ?
                                    <div>
                                        <Text c="white" style={{ fontSize: "22px" }} fw={700}> Designing Learning Experiences</Text>
                                        <Text c="white">that empower your workforce to develop future-ready solutions</Text>
                                    </div>
                                    :
                                    <div>
                                        <h1 style={{ fontWeight: 700, fontSize: "2.875rem", lineHeight: "3.25rem", color: "white" }}>
                                            Designing Learning <br /> Experiences
                                        </h1>
                                        <p style={{ fontWeight: "400", fontSize: "1.75rem", lineHeight: "2.25rem", color: "white" }}>that empower your workforce to develop <br /> future-ready solutions</p>
                                    </div>
                            }


                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div style={{ position: "relative" }}>
                        <img src={banner5} width="100%" height="100%" />
                        {/* <div style={{ position: "absolute", top: "40%", left: "30%", transform: "translate(-50%, -50%)" }} >
                            <div>
                                <>
                                    <h1 style={{ fontWeight: 700, fontSize: "2.875rem", lineHeight: "3.25rem", color: "white" }}>
                                    Accelerating Business  <br/> Transformation
                                    </h1>
                                    <p style={{ fontWeight: "400", fontSize: "1.75rem", lineHeight: "2.25rem", color: "white" }}>with a holistic & digital-first Approach</p>
                                </>
                            </div>
                        </div> */}
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div style={{ position: "relative" }}>
                        <img src={homebanner4} width="100%" height="100%" />
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div style={{ position: "relative" }}>
                        <img src={banner2} width="100%" height="100%" />
                        {/* <div style={{ position: "absolute", top: "40%", left: "30%", transform: "translate(-50%, -50%)" }} >
                            <div>
                                <>
                                    <h1 style={{ fontWeight: 700, fontSize: "2.875rem", lineHeight: "3.25rem", color: "white" }}>
                                        Maximizing Your <br /> Human Capital's
                                    </h1>
                                    <p style={{ fontWeight: "400", fontSize: "1.75rem", lineHeight: "2.25rem", color: "white" }}>value by offering a people-centered experience</p>
                                </>
                            </div>
                        </div> */}
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div style={{ position: "relative" }}>
                        <img src={homebanner5} width="100%" height="100%" />
                    </div>
                </Carousel.Slide>
            </Carousel>
        </div>
    )
}

export default Banner