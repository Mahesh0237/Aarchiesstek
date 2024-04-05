import React, { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel'
import partner1 from '../../assets/partners/google.png'
import partner2 from '../../assets/partners/Genpact.png'
import partner3 from '../../assets/partners/ICICI_Bank.png'
import partner4 from '../../assets/partners/Linkedin.png'
import partner5 from '../../assets/partners/microsoft.png'
import partner6 from '../../assets/partners/Rackspace.png'
import partner7 from '../../assets/partners/Visa.png'
import { useViewportSize } from '@mantine/hooks';
import { Text } from '@mantine/core';

function AwardsSection() {
    const { height, width } = useViewportSize();
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <section className="awards-recognition reveal active">
            <div className="container">
                <div className="timeline-wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className= {`awards-recognition-inner ${width > 500 && 'text-center' }`}>
                                <h2 style={{ fontWeight: "600" }} >Trusted Partner To Global Brands</h2>
                                <Text size='lg'>Aarchiesstek has used Cloud Innovation and Cloud Engineering to help build or reengineer a range of products that transform businesses.</Text>
                            </div>
                            <Carousel
                                withIndicators
                                height={70}
                                slideSize="25%"
                                slideGap="md"
                                loop
                                slidesToScroll={3}
                                withControls={false}
                                plugins={[autoplay.current]}
                                onMouseEnter={autoplay.current.stop}
                                onMouseLeave={autoplay.current.reset}
                            >
                                <Carousel.Slide>
                                    <img src={partner1} alt='award1'  width={100}/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={partner2} alt='award2' width={150} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={partner3} alt='award3' width={150}/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={partner4} alt='award4' width={150}/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={partner5} alt='award2' width={150} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={partner6} alt='award3' width={150}/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={partner7} alt='award4' width={150}/>
                                </Carousel.Slide>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardsSection