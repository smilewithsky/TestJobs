import React from 'react';
import Image1 from './../../Images/Banner/1.webp'
import Image2 from './../../Images/Banner/2.webp'
import Image3 from './../../Images/Banner/3.webp'
import Block from './../../Images/blog_masonry_tile_gradient.png'
import { BannerWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons'

function Banner() {
    const array = [
        {
            image: Image1,
            user: " Muffin Group on",
            time: "October 11 , 2021",
            title: "Tempor diam pede cursus vitae"
        },
        {
            image: Image2,
            user: " Muffin Group on",
            time: " October 11, 2021",
            title: "Mauris nec malesuada fames ac turpis velit"
        },
        {
            image: Image3,
            user: " Muffin Group on",
            time: " September 21, 2021",
            title: "Utin laoreet sapien eu amet lorem kebab"
        },
    ]

    const array1 = array[0];
    const array2 = array.slice(1)

    console.log("array1 ", array1, "array2 ", array2);

    return (
        <BannerWrapper BlogImage={Block}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="banner-item">
                            <img src={array1.image} alt="" />
                            <div className="content">
                                <p className='content-info'>
                                    <FontAwesomeIcon icon={faUser} /> {array1.user} on <FontAwesomeIcon icon={faClock} />  {array1.time}
                                </p>
                                <p className='content-title'>
                                    {array1.title}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        {array2.map( item => (
                            <div className="banner-item">
                                <img src={item.image} alt="" />
                                <div className="content">
                                    <p className='content-info'>
                                        <FontAwesomeIcon icon={faUser} /> {item.user} on <FontAwesomeIcon icon={faClock} />  {item.time}
                                    </p>
                                    <p className='content-title'>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ) )}
                    </div>
                </div>
            </div>
        </BannerWrapper>
    )
}

export default Banner;
