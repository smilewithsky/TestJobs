import React from 'react';
import { AboutManagerWrapper } from './styled'
import sign from './../../Images/AboutUs/babyshop-about-pic1.webp'

function AboutManager(){
    return (
        <AboutManagerWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <h3 className="title">
                            Nulla auge ut torto elit consequat auctor
                        </h3>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="contains">
                            <p className="desc">
                                <div className="desc-item">
                                    <span>P</span> retium vitae aliquam praesent mattis sed mauris sit habitasse laoreet phasellus ut quam morbi ullamcorper porta suscipit molestie blandit pulvinar molestie vestibulum eleifend neque gravida quis aenean ullamcorper placerat aptent eget dui purus consequat viverra tellus et dui potenti massa malesuada eleifend gravida praesent vestibulum. 
                                </div>

                                <div className="desc-item">
                                    Habitant leo est curae sollicitudin porta magna lacus ornare placerat quis libero nisi diam etiam consequat etiam nullam facilisis nisi mauris iaculis tellus neque non.
                                </div>

                                <div className="desc-item">
                                    Pulvinar leo quisque turpis molestie ut consectetur varius sit at curae molestie nullam ornare faucibus conubia nec massa at platea hac mattis ut metus aliquam.
                                </div>
                            </p>
                        </div>
                        <div className='author'>
                                <div className="row">
                                    <div className="col-12 col-lg-8">
                                        <div className="author-info">
                                            <h4 className='author-info__name'>
                                                KEVIN THOMPSON
                                            </h4>
                                            <p className='author-info__job'>
                                                Sales manager
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="author-signature">
                                            <img src={sign} alt="" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                    </div>
                </div>
            </div>
        </AboutManagerWrapper>
    )
}

export default AboutManager;
