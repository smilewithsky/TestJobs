import React from 'react';
import Image1Left from './../../Images/babyshop-features-icon1.png'
import Image2Left from './../../Images/babyshop-features-icon2.png'
import Image3Left from './../../Images/babyshop-features-icon3.png'
import Image4Left from './../../Images/babyshop-features-icon4.png'

import ImageCenter from './../../Images/babyshop-features-pic1.webp'

import { BenefitsWrapper } from './styled'
function Benefits(){
    const leftArr = [
        {
            heading: "100% bio",
            text: "Lorem ipsum dolor sit amet enim etiam lorem lectus",
            image: Image1Left
        },
        {
            heading: "COMFORT FOAM",
            text: "Lorem ipsum dolor sit amet enim etiam lorem lectus",
            image: Image2Left
        }
    ]

    const rightArr = [
        {
            heading: "HIGH SAFETY",
            text: "Lorem ipsum dolor sit amet enim etiam lorem lectus",
            image: Image3Left
        },
        {
            heading: "MOISTURE CONTROL",
            text: "Lorem ipsum dolor sit amet enim etiam lorem lectus",
            image: Image4Left
        }
    ]

    return (
        <BenefitsWrapper>
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-3">
                    {leftArr.map( item => (
                        <div className="benefits-item">
                            <img src={item.image} alt="" />
                            <h4>{item.heading}</h4>
                            <p>{item.text}</p>
                        </div>
                    ) )}
                </div>
                <div className="col-md-12 col-lg-6">
                    <img className='image-center' src={ImageCenter} alt="" />
                </div>
                <div className="col-md-12 col-lg-3">
                    {rightArr.map( item => (
                        <div className="benefits-item">
                            <img src={item.image} alt="" />
                            <h4>{item.heading}</h4>
                            <p>{item.text}</p>
                        </div>
                    ) )}
                </div>
            </div>
        </BenefitsWrapper>
    )
}

export default Benefits;