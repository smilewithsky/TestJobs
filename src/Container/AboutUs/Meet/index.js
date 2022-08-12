import React from 'react';
import Heading from '../../../Components/Common/Heading';
import { MeetWrapper } from './styled'

import Image1 from './../../Images/AboutUs/Meet/1.webp'
import Image2 from './../../Images/AboutUs/Meet/2.webp'
import Image3 from './../../Images/AboutUs/Meet/3.webp'
import Button from '../../../Components/Common/Button';

function Meet(){
    const array = [
        {
            job: "DIRECTOR",
            name: "Laura Palmer",
            image: Image1
        },
        {
            job: "SALES MANAGER",
            name: "Christina Mac",
            image: Image2
        },
        {
            job: "REGIONAL SALES MANAGER",
            name: "Margharet Teacher",
            image: Image3
        },
    ]

    return (
        <MeetWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 offset-lg-2">
                        <div className="contain-item">
                            <Heading align="center" title="WHO WE ARE" heading="WHO WE ARE" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {array.map( item => (
                        <div className="col-12 col-lg-4 mb-5">
                            <div className="meet-item">
                                <img src={item.image} alt="" />
                                <div className='meet-item__content'>
                                    <h3 className="meet-item__content-jobs">{item.job}</h3>
                                    <p className='meet-item__content-name'>{item.name}</p>
                                    <div className='line'></div>
                                </div>
                            </div>
                        </div>
                    ) )}
                </div>
                <div className="row">
                    <div className="col-12 col-lg-8 offset-lg-2">
                        <div className="contain-item">
                            <Heading desc="Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum.Vestibulum dapibus, mauris nec malesuada" />
                            <Button>GO TO TESTIMONIALS</Button>
                        </div>
                    </div>
                </div>
            </div>
        </MeetWrapper>
    )
}

export default Meet;
